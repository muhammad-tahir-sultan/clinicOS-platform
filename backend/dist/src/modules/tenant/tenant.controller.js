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
exports.TenantController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const tenant_service_1 = require("./tenant.service");
const tenant_dto_1 = require("./dto/tenant.dto");
const decorators_1 = require("../../common/decorators");
const guards_1 = require("../../common/guards");
const client_1 = require("@prisma/client");
let TenantController = class TenantController {
    tenantService;
    constructor(tenantService) {
        this.tenantService = tenantService;
    }
    async create(dto) {
        return this.tenantService.create(dto);
    }
    async findAll(page, limit, search) {
        return this.tenantService.findAll(page ? parseInt(page) : 1, limit ? parseInt(limit) : 10, search);
    }
    async getStats() {
        return this.tenantService.getStats();
    }
    async findOne(id) {
        return this.tenantService.findOne(id);
    }
    async update(id, dto) {
        return this.tenantService.update(id, dto);
    }
    async suspend(id) {
        return this.tenantService.suspend(id);
    }
    async deactivate(id) {
        return this.tenantService.suspend(id);
    }
    async activate(id) {
        return this.tenantService.activate(id);
    }
    async delete(id) {
        return this.tenantService.delete(id);
    }
};
exports.TenantController = TenantController;
__decorate([
    (0, common_1.Post)(),
    (0, decorators_1.Roles)(client_1.Role.SUPER_ADMIN),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [tenant_dto_1.CreateTenantDto]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, decorators_1.Roles)(client_1.Role.SUPER_ADMIN),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('stats'),
    (0, decorators_1.Roles)(client_1.Role.SUPER_ADMIN),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "getStats", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, decorators_1.Roles)(client_1.Role.SUPER_ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    (0, decorators_1.Roles)(client_1.Role.SUPER_ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, tenant_dto_1.UpdateTenantDto]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)(':id/suspend'),
    (0, decorators_1.Roles)(client_1.Role.SUPER_ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "suspend", null);
__decorate([
    (0, common_1.Patch)(':id/deactivate'),
    (0, decorators_1.Roles)(client_1.Role.SUPER_ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "deactivate", null);
__decorate([
    (0, common_1.Patch)(':id/activate'),
    (0, decorators_1.Roles)(client_1.Role.SUPER_ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "activate", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, decorators_1.Roles)(client_1.Role.SUPER_ADMIN),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TenantController.prototype, "delete", null);
exports.TenantController = TenantController = __decorate([
    (0, common_1.Controller)('tenants'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), guards_1.RolesGuard),
    __metadata("design:paramtypes", [tenant_service_1.TenantService])
], TenantController);
//# sourceMappingURL=tenant.controller.js.map