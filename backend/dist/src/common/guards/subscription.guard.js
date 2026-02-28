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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionGuard = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let SubscriptionGuard = class SubscriptionGuard {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        if (user?.role === 'SUPER_ADMIN') {
            return true;
        }
        const clinicId = user?.clinicId;
        if (!clinicId) {
            throw new common_1.ForbiddenException('No clinic associated with this user');
        }
        const subscription = await this.prisma.subscription.findUnique({
            where: { clinicId },
        });
        if (!subscription) {
            throw new common_1.ForbiddenException('No active subscription found');
        }
        if (subscription.status === 'EXPIRED') {
            throw new common_1.ForbiddenException('Subscription has expired. Please renew to continue.');
        }
        if (subscription.status === 'SUSPENDED') {
            throw new common_1.ForbiddenException('Subscription is suspended. Contact support.');
        }
        if (new Date() > new Date(subscription.expiryDate)) {
            await this.prisma.subscription.update({
                where: { id: subscription.id },
                data: { status: 'EXPIRED' },
            });
            throw new common_1.ForbiddenException('Subscription has expired. Please renew to continue.');
        }
        return true;
    }
};
exports.SubscriptionGuard = SubscriptionGuard;
exports.SubscriptionGuard = SubscriptionGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], SubscriptionGuard);
//# sourceMappingURL=subscription.guard.js.map