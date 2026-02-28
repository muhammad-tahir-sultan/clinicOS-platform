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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const bcrypt = __importStar(require("bcrypt"));
const prisma_service_1 = require("../../prisma/prisma.service");
let AuthService = class AuthService {
    prisma;
    jwtService;
    configService;
    constructor(prisma, jwtService, configService) {
        this.prisma = prisma;
        this.jwtService = jwtService;
        this.configService = configService;
    }
    async login(dto) {
        const user = await this.prisma.user.findUnique({
            where: { email: dto.email },
            include: {
                clinic: {
                    include: { subscription: true },
                },
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        if (!user.isActive) {
            throw new common_1.ForbiddenException('Account is deactivated');
        }
        const passwordMatch = await bcrypt.compare(dto.password, user.password);
        if (!passwordMatch) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        if (user.role !== 'SUPER_ADMIN' && user.clinic?.subscription) {
            const sub = user.clinic.subscription;
            if (sub.status === 'EXPIRED' || new Date() > new Date(sub.expiryDate)) {
                throw new common_1.ForbiddenException('Your clinic subscription has expired. Contact your administrator.');
            }
            if (sub.status === 'SUSPENDED') {
                throw new common_1.ForbiddenException('Your clinic account is suspended. Contact support.');
            }
        }
        const tokens = await this.generateTokens(user.id, user.email, user.role, user.clinicId);
        const refreshHash = await bcrypt.hash(tokens.refreshToken, 10);
        await this.prisma.user.update({
            where: { id: user.id },
            data: { refreshToken: refreshHash },
        });
        return {
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
                clinicId: user.clinicId,
            },
            ...tokens,
        };
    }
    async registerClinic(dto) {
        const existingClinic = await this.prisma.clinic.findUnique({
            where: { slug: dto.clinicSlug },
        });
        if (existingClinic) {
            throw new common_1.ConflictException('Clinic slug already exists');
        }
        const existingUser = await this.prisma.user.findUnique({
            where: { email: dto.adminEmail },
        });
        if (existingUser) {
            throw new common_1.ConflictException('Email already registered');
        }
        const hashedPassword = await bcrypt.hash(dto.adminPassword, 12);
        const result = await this.prisma.$transaction(async (tx) => {
            const clinic = await tx.clinic.create({
                data: {
                    name: dto.clinicName,
                    slug: dto.clinicSlug,
                    email: dto.clinicEmail,
                    phone: dto.clinicPhone,
                    address: dto.clinicAddress,
                },
            });
            await tx.subscription.create({
                data: {
                    clinicId: clinic.id,
                    plan: 'BASIC',
                    status: 'ACTIVE',
                    maxDoctors: 2,
                    maxStaff: 2,
                    expiryDate: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000),
                },
            });
            const admin = await tx.user.create({
                data: {
                    clinicId: clinic.id,
                    email: dto.adminEmail,
                    password: hashedPassword,
                    firstName: dto.adminFirstName,
                    lastName: dto.adminLastName,
                    role: 'CLINIC_ADMIN',
                },
            });
            return { clinic, admin };
        });
        const tokens = await this.generateTokens(result.admin.id, result.admin.email, result.admin.role, result.clinic.id);
        return {
            user: {
                id: result.admin.id,
                email: result.admin.email,
                firstName: result.admin.firstName,
                lastName: result.admin.lastName,
                role: result.admin.role,
                clinicId: result.clinic.id,
            },
            clinic: {
                id: result.clinic.id,
                name: result.clinic.name,
                slug: result.clinic.slug,
            },
            ...tokens,
        };
    }
    async refreshTokens(userId, refreshToken) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user || !user.refreshToken) {
            throw new common_1.UnauthorizedException('Access denied');
        }
        const rtMatch = await bcrypt.compare(refreshToken, user.refreshToken);
        if (!rtMatch) {
            throw new common_1.UnauthorizedException('Access denied');
        }
        const tokens = await this.generateTokens(user.id, user.email, user.role, user.clinicId);
        const refreshHash = await bcrypt.hash(tokens.refreshToken, 10);
        await this.prisma.user.update({
            where: { id: user.id },
            data: { refreshToken: refreshHash },
        });
        return tokens;
    }
    async logout(userId) {
        await this.prisma.user.update({
            where: { id: userId },
            data: { refreshToken: null },
        });
        return { message: 'Logged out successfully' };
    }
    async getProfile(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                phone: true,
                specialization: true,
                clinicId: true,
                clinic: {
                    select: {
                        id: true,
                        name: true,
                        slug: true,
                        subscription: {
                            select: {
                                plan: true,
                                status: true,
                                expiryDate: true,
                            },
                        },
                    },
                },
            },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        return user;
    }
    async generateTokens(userId, email, role, clinicId) {
        const payload = { sub: userId, email, role, clinicId };
        const [accessToken, refreshToken] = await Promise.all([
            this.jwtService.signAsync(payload, {
                secret: this.configService.get('JWT_SECRET'),
                expiresIn: this.configService.get('JWT_EXPIRES_IN', '15m'),
            }),
            this.jwtService.signAsync(payload, {
                secret: this.configService.get('JWT_REFRESH_SECRET'),
                expiresIn: this.configService.get('JWT_REFRESH_EXPIRES_IN', '7d'),
            }),
        ]);
        return { accessToken, refreshToken };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map