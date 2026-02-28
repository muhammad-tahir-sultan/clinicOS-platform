"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SubscriptionService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionService = void 0;
const common_1 = require("@nestjs/common");
const schedule_1 = require("@nestjs/schedule");
const prisma_service_1 = require("../../prisma/prisma.service");
let SubscriptionService = SubscriptionService_1 = class SubscriptionService {
    prisma;
    logger = new common_1.Logger(SubscriptionService_1.name);
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findByClinicId(clinicId) {
        const subscription = await this.prisma.subscription.findUnique({
            where: { clinicId },
            include: {
                clinic: {
                    select: { name: true, slug: true, isActive: true },
                },
            },
        });
        if (!subscription) {
            throw new common_1.NotFoundException('Subscription not found');
        }
        return subscription;
    }
    async update(clinicId, dto) {
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
    async renewSubscription(clinicId, months) {
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
};
exports.SubscriptionService = SubscriptionService;
__decorate([
    (0, schedule_1.Cron)(schedule_1.CronExpression.EVERY_DAY_AT_MIDNIGHT),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], SubscriptionService.prototype, "handleExpiredSubscriptions", null);
exports.SubscriptionService = SubscriptionService = SubscriptionService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SubscriptionService);
//# sourceMappingURL=subscription.service.js.map