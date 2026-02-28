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
exports.DashboardController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const dashboard_service_1 = require("./dashboard.service");
const decorators_1 = require("../../common/decorators");
const guards_1 = require("../../common/guards");
const client_1 = require("@prisma/client");
let DashboardController = class DashboardController {
    dashboardService;
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    async getDashboard(clinicId) {
        return this.dashboardService.getClinicDashboard(clinicId);
    }
    async getPatientGrowth(clinicId, months) {
        return this.dashboardService.getPatientGrowth(clinicId, months ? parseInt(months) : 6);
    }
    async getAppointmentStats(clinicId, months) {
        return this.dashboardService.getAppointmentStats(clinicId, months ? parseInt(months) : 6);
    }
    async getRevenueStats(clinicId, months) {
        return this.dashboardService.getRevenueStats(clinicId, months ? parseInt(months) : 6);
    }
    async getDoctorPerformance(clinicId) {
        return this.dashboardService.getDoctorPerformance(clinicId);
    }
};
exports.DashboardController = DashboardController;
__decorate([
    (0, common_1.Get)(),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN, client_1.Role.DOCTOR),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getDashboard", null);
__decorate([
    (0, common_1.Get)('patient-growth'),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Query)('months')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getPatientGrowth", null);
__decorate([
    (0, common_1.Get)('appointment-stats'),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN, client_1.Role.DOCTOR),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Query)('months')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getAppointmentStats", null);
__decorate([
    (0, common_1.Get)('revenue'),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Query)('months')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getRevenueStats", null);
__decorate([
    (0, common_1.Get)('doctor-performance'),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getDoctorPerformance", null);
exports.DashboardController = DashboardController = __decorate([
    (0, common_1.Controller)('dashboard'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), guards_1.RolesGuard, guards_1.SubscriptionGuard),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
], DashboardController);
//# sourceMappingURL=dashboard.controller.js.map