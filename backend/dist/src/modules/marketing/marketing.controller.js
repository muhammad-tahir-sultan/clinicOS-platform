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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MarketingController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const marketing_service_1 = require("./marketing.service");
const decorators_1 = require("../../common/decorators");
const guards_1 = require("../../common/guards");
const client_1 = require("@prisma/client");
let MarketingController = class MarketingController {
    marketingService;
    constructor(marketingService) {
        this.marketingService = marketingService;
    }
    async getClinicQrCode(clinicId) {
        const qrCodeBase64 = await this.marketingService.generateClinicQrCode(clinicId);
        return { dataUri: qrCodeBase64 };
    }
    async getCampaignAnalytics(clinicId, startDate, endDate) {
        return this.marketingService.getCampaignAnalytics(clinicId, startDate, endDate);
    }
};
exports.MarketingController = MarketingController;
__decorate([
    (0, common_1.Get)('qr-code'),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN, client_1.Role.DOCTOR),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], MarketingController.prototype, "getClinicQrCode", null);
__decorate([
    (0, common_1.Get)('campaign-analytics'),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Query)('startDate')),
    __param(2, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], MarketingController.prototype, "getCampaignAnalytics", null);
exports.MarketingController = MarketingController = __decorate([
    (0, common_1.Controller)('marketing'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), guards_1.RolesGuard, guards_1.SubscriptionGuard),
    __metadata("design:paramtypes", [marketing_service_1.MarketingService])
], MarketingController);
//# sourceMappingURL=marketing.controller.js.map