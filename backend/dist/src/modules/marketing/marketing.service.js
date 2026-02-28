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
exports.MarketingService = void 0;
const common_1 = require("@nestjs/common");
const QRCode = __importStar(require("qrcode"));
const prisma_service_1 = require("../../prisma/prisma.service");
let MarketingService = class MarketingService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async generateClinicQrCode(clinicId) {
        const clinic = await this.prisma.clinic.findUnique({
            where: { id: clinicId },
        });
        if (!clinic) {
            throw new common_1.NotFoundException('Clinic not found');
        }
        const domain = process.env.PUBLIC_DOMAIN || 'clinicos.com';
        const bookingUrl = `https://${clinic.slug}.${domain}/book`;
        const qrCodeDataUri = await QRCode.toDataURL(bookingUrl, {
            width: 300,
            margin: 2,
            color: {
                dark: '#0f172a',
                light: '#ffffff',
            },
        });
        return qrCodeDataUri;
    }
    async getCampaignAnalytics(clinicId, startDate, endDate) {
        let start = new Date();
        start.setDate(start.getDate() - 30);
        let end = new Date();
        if (startDate)
            start = new Date(startDate);
        if (endDate)
            end = new Date(endDate);
        end.setHours(23, 59, 59, 999);
        const appointmentsByCampaign = await this.prisma.appointment.groupBy({
            by: ['campaignSource'],
            where: {
                clinicId,
                date: {
                    gte: start,
                    lte: end,
                },
                campaignSource: {
                    not: null,
                },
            },
            _count: {
                id: true,
            },
        });
        const revenueByCampaign = await this.prisma.appointment.groupBy({
            by: ['campaignSource'],
            where: {
                clinicId,
                status: 'COMPLETED',
                date: {
                    gte: start,
                    lte: end,
                },
                campaignSource: {
                    not: null,
                },
            },
            _sum: {
                fee: true,
            },
        });
        const metrics = appointmentsByCampaign.map((campaign) => {
            const rev = revenueByCampaign.find(r => r.campaignSource === campaign.campaignSource);
            return {
                campaignSource: campaign.campaignSource,
                appointmentsBooked: campaign._count.id,
                totalRevenue: rev?._sum.fee || 0,
            };
        });
        return {
            dateRange: { start, end },
            campaigns: metrics,
        };
    }
};
exports.MarketingService = MarketingService;
exports.MarketingService = MarketingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], MarketingService);
//# sourceMappingURL=marketing.service.js.map