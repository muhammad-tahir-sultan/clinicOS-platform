import { Injectable, NotFoundException } from '@nestjs/common';
import * as QRCode from 'qrcode';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class MarketingService {
    constructor(private prisma: PrismaService) { }

    async generateClinicQrCode(clinicId: string): Promise<string> {
        const clinic = await this.prisma.clinic.findUnique({
            where: { id: clinicId },
        });

        if (!clinic) {
            throw new NotFoundException('Clinic not found');
        }

        // In a production app, the base domain would come from a config or env
        const domain = process.env.PUBLIC_DOMAIN || 'clinicos.com';
        const bookingUrl = `https://${clinic.slug}.${domain}/book`;

        // Generate QR code as a data URI (base64 PNG)
        const qrCodeDataUri = await QRCode.toDataURL(bookingUrl, {
            width: 300,
            margin: 2,
            color: {
                dark: '#0f172a', // Tailwind slate-900 (or brand color)
                light: '#ffffff',
            },
        });

        return qrCodeDataUri;
    }

    async getCampaignAnalytics(clinicId: string, startDate?: string, endDate?: string) {
        // Determine the date range
        let start = new Date();
        start.setDate(start.getDate() - 30); // Default to last 30 days
        let end = new Date();

        if (startDate) start = new Date(startDate);
        if (endDate) end = new Date(endDate);

        // Set 'end' to the end of the day for inclusivity
        end.setHours(23, 59, 59, 999);

        // Use `reason` as a temporary source bucket until campaign fields are added to schema.
        const appointmentsByCampaign = await this.prisma.appointment.groupBy({
            by: ['reason'],
            where: {
                clinicId,
                date: {
                    gte: start,
                    lte: end,
                },
                reason: {
                    not: null,
                },
            },
            _count: {
                id: true,
            },
        });

        const revenueByCampaign = await this.prisma.appointment.groupBy({
            by: ['reason'],
            where: {
                clinicId,
                status: 'COMPLETED',
                date: {
                    gte: start,
                    lte: end,
                },
                reason: {
                    not: null,
                },
            },
            _sum: {
                fee: true,
            },
        });

        const metrics = appointmentsByCampaign.map((campaign) => {
            const rev = revenueByCampaign.find((r) => r.reason === campaign.reason);
            return {
                campaignSource: campaign.reason || 'unknown',
                appointmentsBooked: campaign._count.id,
                totalRevenue: rev?._sum.fee || 0,
            };
        });

        return {
            dateRange: { start, end },
            campaigns: metrics,
        };
    }
}
