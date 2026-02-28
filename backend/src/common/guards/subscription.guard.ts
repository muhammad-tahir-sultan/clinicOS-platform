import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SubscriptionGuard implements CanActivate {
    constructor(private prisma: PrismaService) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const user = request.user;

        // Super admins bypass subscription checks
        if (user?.role === 'SUPER_ADMIN') {
            return true;
        }

        const clinicId = user?.clinicId;
        if (!clinicId) {
            throw new ForbiddenException('No clinic associated with this user');
        }

        const subscription = await this.prisma.subscription.findUnique({
            where: { clinicId },
        });

        if (!subscription) {
            throw new ForbiddenException('No active subscription found');
        }

        if (subscription.status === 'EXPIRED') {
            throw new ForbiddenException('Subscription has expired. Please renew to continue.');
        }

        if (subscription.status === 'SUSPENDED') {
            throw new ForbiddenException('Subscription is suspended. Contact support.');
        }

        // Check if subscription has passed expiry date
        if (new Date() > new Date(subscription.expiryDate)) {
            // Auto-expire the subscription
            await this.prisma.subscription.update({
                where: { id: subscription.id },
                data: { status: 'EXPIRED' },
            });
            throw new ForbiddenException('Subscription has expired. Please renew to continue.');
        }

        return true;
    }
}
