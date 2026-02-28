import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { PrismaService } from '../../prisma/prisma.service';
import { UpdateSubscriptionDto } from './dto/subscription.dto';

@Injectable()
export class SubscriptionService {
    private readonly logger = new Logger(SubscriptionService.name);

    constructor(private prisma: PrismaService) { }

    async findByClinicId(clinicId: string) {
        const subscription = await this.prisma.subscription.findUnique({
            where: { clinicId },
            include: {
                clinic: {
                    select: { name: true, slug: true, isActive: true },
                },
            },
        });

        if (!subscription) {
            throw new NotFoundException('Subscription not found');
        }

        return subscription;
    }

    async update(clinicId: string, dto: UpdateSubscriptionDto) {
        await this.findByClinicId(clinicId);

        return this.prisma.subscription.update({
            where: { clinicId },
            data: {
                ...dto,
                expiryDate: dto.expiryDate ? new Date(dto.expiryDate) : undefined,
            },
            include: {
                clinic: {
                    select: { name: true, slug: true },
                },
            },
        });
    }

    async renewSubscription(clinicId: string, months: number) {
        const subscription = await this.findByClinicId(clinicId);

        const newExpiry = new Date(subscription.expiryDate);
        if (newExpiry < new Date()) {
            newExpiry.setTime(Date.now());
        }
        newExpiry.setMonth(newExpiry.getMonth() + months);

        return this.prisma.subscription.update({
            where: { clinicId },
            data: {
                expiryDate: newExpiry,
                status: 'ACTIVE',
            },
        });
    }

    // Run daily at midnight to check for expired subscriptions
    @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
    async handleExpiredSubscriptions() {
        this.logger.log('Checking for expired subscriptions...');

        const expired = await this.prisma.subscription.updateMany({
            where: {
                status: 'ACTIVE',
                expiryDate: { lt: new Date() },
            },
            data: { status: 'EXPIRED' },
        });

        if (expired.count > 0) {
            this.logger.warn(`${expired.count} subscriptions have been expired`);

            // Also deactivate the clinics
            await this.prisma.clinic.updateMany({
                where: {
                    subscription: {
                        status: 'EXPIRED',
                    },
                    isActive: true,
                },
                data: { isActive: false },
            });
        }
    }
}
