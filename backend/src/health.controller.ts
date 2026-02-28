import { Controller, Get } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Controller('health')
export class HealthController {
    constructor(private prisma: PrismaService) { }

    @Get()
    async check() {
        let dbStatus = 'ok';
        try {
            // Simple connectivity check
            await this.prisma.clinic.count();
        } catch {
            dbStatus = 'error';
        }

        return {
            status: 'ok',
            timestamp: new Date().toISOString(),
            uptime: process.uptime(),
            database: dbStatus,
            environment: process.env.NODE_ENV || 'development',
        };
    }
}
