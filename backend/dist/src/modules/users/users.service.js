"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = __importStar(require("bcrypt"));
const prisma_service_1 = require("../../prisma/prisma.service");
let UsersService = class UsersService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(clinicId, dto) {
        const existing = await this.prisma.user.findUnique({
            where: { email: dto.email },
        });
        if (existing) {
            throw new common_1.ConflictException('Email already registered');
        }
        await this.checkPlanLimits(clinicId, dto.role);
        const hashedPassword = await bcrypt.hash(dto.password, 12);
        const user = await this.prisma.user.create({
            data: {
                clinicId,
                email: dto.email,
                password: hashedPassword,
                firstName: dto.firstName,
                lastName: dto.lastName,
                role: dto.role || 'RECEPTIONIST',
                phone: dto.phone,
                specialization: dto.specialization,
            },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                phone: true,
                specialization: true,
                isActive: true,
                createdAt: true,
            },
        });
        return user;
    }
    async findAll(clinicId, page = 1, limit = 10) {
        const skip = (page - 1) * limit;
        const [users, total] = await Promise.all([
            this.prisma.user.findMany({
                where: { clinicId },
                select: {
                    id: true,
                    email: true,
                    firstName: true,
                    lastName: true,
                    role: true,
                    phone: true,
                    specialization: true,
                    isActive: true,
                    createdAt: true,
                },
                skip,
                take: limit,
                orderBy: { createdAt: 'desc' },
            }),
            this.prisma.user.count({ where: { clinicId } }),
        ]);
        return {
            data: users,
            meta: {
                total,
                page,
                limit,
                totalPages: Math.ceil(total / limit),
            },
        };
    }
    async findDoctors(clinicId) {
        return this.prisma.user.findMany({
            where: { clinicId, role: 'DOCTOR', isActive: true },
            select: {
                id: true,
                firstName: true,
                lastName: true,
                specialization: true,
                email: true,
                phone: true,
            },
            orderBy: { firstName: 'asc' },
        });
    }
    async findOne(clinicId, id) {
        const user = await this.prisma.user.findFirst({
            where: { id, clinicId },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                phone: true,
                specialization: true,
                isActive: true,
                createdAt: true,
                updatedAt: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return user;
    }
    async update(clinicId, id, dto) {
        await this.findOne(clinicId, id);
        return this.prisma.user.update({
            where: { id },
            data: dto,
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                phone: true,
                specialization: true,
                isActive: true,
            },
        });
    }
    async deactivate(clinicId, id) {
        await this.findOne(clinicId, id);
        await this.prisma.user.update({
            where: { id },
            data: { isActive: false },
        });
        return { message: 'User deactivated successfully' };
    }
    async activate(clinicId, id) {
        await this.findOne(clinicId, id);
        await this.prisma.user.update({
            where: { id },
            data: { isActive: true },
        });
        return { message: 'User activated successfully' };
    }
    async resetPassword(clinicId, id, newPassword) {
        await this.findOne(clinicId, id);
        const hashedPassword = await bcrypt.hash(newPassword, 12);
        await this.prisma.user.update({
            where: { id },
            data: { password: hashedPassword },
        });
        return { message: 'Password reset successfully' };
    }
    async checkPlanLimits(clinicId, role) {
        const subscription = await this.prisma.subscription.findUnique({
            where: { clinicId },
        });
        if (!subscription)
            return;
        if (role === 'DOCTOR') {
            const doctorCount = await this.prisma.user.count({
                where: { clinicId, role: 'DOCTOR' },
            });
            if (doctorCount >= subscription.maxDoctors) {
                throw new common_1.ForbiddenException(`Your plan allows a maximum of ${subscription.maxDoctors} doctors. Upgrade your plan to add more.`);
            }
        }
        const staffCount = await this.prisma.user.count({
            where: { clinicId },
        });
        if (staffCount >= subscription.maxStaff + subscription.maxDoctors) {
            throw new common_1.ForbiddenException('Maximum staff limit reached for your plan. Upgrade to add more users.');
        }
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], UsersService);
//# sourceMappingURL=users.service.js.map