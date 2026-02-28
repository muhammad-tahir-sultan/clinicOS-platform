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
exports.PatientsController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const patients_service_1 = require("./patients.service");
const patient_dto_1 = require("./dto/patient.dto");
const decorators_1 = require("../../common/decorators");
const guards_1 = require("../../common/guards");
const client_1 = require("@prisma/client");
let PatientsController = class PatientsController {
    patientsService;
    constructor(patientsService) {
        this.patientsService = patientsService;
    }
    async create(clinicId, dto) {
        return this.patientsService.create(clinicId, dto);
    }
    async findAll(clinicId, page, limit, search) {
        return this.patientsService.findAll(clinicId, page ? parseInt(page) : 1, limit ? parseInt(limit) : 10, search);
    }
    async findOne(clinicId, id) {
        return this.patientsService.findOne(clinicId, id);
    }
    async update(clinicId, id, dto) {
        return this.patientsService.update(clinicId, id, dto);
    }
    async delete(clinicId, id) {
        return this.patientsService.delete(clinicId, id);
    }
    async addVisitLog(clinicId, patientId, body) {
        return this.patientsService.addVisitLog(clinicId, patientId, body);
    }
    async getVisitLogs(clinicId, patientId) {
        return this.patientsService.getVisitLogs(clinicId, patientId);
    }
};
exports.PatientsController = PatientsController;
__decorate([
    (0, common_1.Post)(),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN, client_1.Role.DOCTOR, client_1.Role.RECEPTIONIST),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, patient_dto_1.CreatePatientDto]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN, client_1.Role.DOCTOR, client_1.Role.RECEPTIONIST),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __param(3, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN, client_1.Role.DOCTOR, client_1.Role.RECEPTIONIST),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN, client_1.Role.DOCTOR, client_1.Role.RECEPTIONIST),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, patient_dto_1.UpdatePatientDto]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(':id/visit-logs'),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN, client_1.Role.DOCTOR),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "addVisitLog", null);
__decorate([
    (0, common_1.Get)(':id/visit-logs'),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN, client_1.Role.DOCTOR, client_1.Role.RECEPTIONIST),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], PatientsController.prototype, "getVisitLogs", null);
exports.PatientsController = PatientsController = __decorate([
    (0, common_1.Controller)('patients'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), guards_1.RolesGuard, guards_1.SubscriptionGuard),
    __metadata("design:paramtypes", [patients_service_1.PatientsService])
], PatientsController);
//# sourceMappingURL=patients.controller.js.map