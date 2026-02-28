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
exports.AppointmentsController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const appointments_service_1 = require("./appointments.service");
const appointment_dto_1 = require("./dto/appointment.dto");
const decorators_1 = require("../../common/decorators");
const guards_1 = require("../../common/guards");
const client_1 = require("@prisma/client");
let AppointmentsController = class AppointmentsController {
    appointmentsService;
    constructor(appointmentsService) {
        this.appointmentsService = appointmentsService;
    }
    async create(clinicId, dto) {
        return this.appointmentsService.create(clinicId, dto);
    }
    async findAll(clinicId, page, limit, doctorId, status, date, startDate, endDate) {
        return this.appointmentsService.findAll(clinicId, page ? parseInt(page) : 1, limit ? parseInt(limit) : 10, { doctorId, status, date, startDate, endDate });
    }
    async getTodayAppointments(clinicId, role, userId) {
        const doctorId = role === 'DOCTOR' ? userId : undefined;
        return this.appointmentsService.getTodayAppointments(clinicId, doctorId);
    }
    async findOne(clinicId, id) {
        return this.appointmentsService.findOne(clinicId, id);
    }
    async update(clinicId, id, dto) {
        return this.appointmentsService.update(clinicId, id, dto);
    }
    async cancel(clinicId, id) {
        return this.appointmentsService.cancel(clinicId, id);
    }
};
exports.AppointmentsController = AppointmentsController;
__decorate([
    (0, common_1.Post)(),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN, client_1.Role.DOCTOR, client_1.Role.RECEPTIONIST),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, appointment_dto_1.CreateAppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN, client_1.Role.DOCTOR, client_1.Role.RECEPTIONIST),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('doctorId')),
    __param(4, (0, common_1.Query)('status')),
    __param(5, (0, common_1.Query)('date')),
    __param(6, (0, common_1.Query)('startDate')),
    __param(7, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('today'),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN, client_1.Role.DOCTOR, client_1.Role.RECEPTIONIST),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, decorators_1.CurrentUser)('role')),
    __param(2, (0, decorators_1.CurrentUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "getTodayAppointments", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN, client_1.Role.DOCTOR, client_1.Role.RECEPTIONIST),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN, client_1.Role.DOCTOR, client_1.Role.RECEPTIONIST),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, appointment_dto_1.UpdateAppointmentDto]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/cancel'),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN, client_1.Role.DOCTOR, client_1.Role.RECEPTIONIST),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AppointmentsController.prototype, "cancel", null);
exports.AppointmentsController = AppointmentsController = __decorate([
    (0, common_1.Controller)('appointments'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), guards_1.RolesGuard, guards_1.SubscriptionGuard),
    __metadata("design:paramtypes", [appointments_service_1.AppointmentsService])
], AppointmentsController);
//# sourceMappingURL=appointments.controller.js.map