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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const users_service_1 = require("./users.service");
const user_dto_1 = require("./dto/user.dto");
const decorators_1 = require("../../common/decorators");
const guards_1 = require("../../common/guards");
const client_1 = require("@prisma/client");
let UsersController = class UsersController {
    usersService;
    constructor(usersService) {
        this.usersService = usersService;
    }
    async create(clinicId, dto) {
        return this.usersService.create(clinicId, dto);
    }
    async findAll(clinicId, page, limit) {
        return this.usersService.findAll(clinicId, page ? parseInt(page) : 1, limit ? parseInt(limit) : 10);
    }
    async findDoctors(clinicId) {
        return this.usersService.findDoctors(clinicId);
    }
    async findOne(clinicId, id) {
        return this.usersService.findOne(clinicId, id);
    }
    async update(clinicId, id, dto) {
        return this.usersService.update(clinicId, id, dto);
    }
    async deactivate(clinicId, id) {
        return this.usersService.deactivate(clinicId, id);
    }
    async activate(clinicId, id) {
        return this.usersService.activate(clinicId, id);
    }
    async resetPassword(clinicId, id, password) {
        return this.usersService.resetPassword(clinicId, id, password);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)(),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, user_dto_1.CreateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN, client_1.Role.DOCTOR, client_1.Role.RECEPTIONIST),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('doctors'),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN, client_1.Role.DOCTOR, client_1.Role.RECEPTIONIST),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findDoctors", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, user_dto_1.UpdateUserDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/deactivate'),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deactivate", null);
__decorate([
    (0, common_1.Patch)(':id/activate'),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "activate", null);
__decorate([
    (0, common_1.Patch)(':id/reset-password'),
    (0, decorators_1.Roles)(client_1.Role.CLINIC_ADMIN),
    __param(0, (0, decorators_1.CurrentUser)('clinicId')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)('password')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "resetPassword", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), guards_1.RolesGuard, guards_1.SubscriptionGuard),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map