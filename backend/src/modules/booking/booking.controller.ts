import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Query,
    UseGuards,
} from '@nestjs/common';
import { ThrottlerGuard } from '@nestjs/throttler';
import { BookingService } from './booking.service';
import { PublicBookAppointmentDto } from './dto/booking.dto';

@Controller('booking')
@UseGuards(ThrottlerGuard) // Limit abuse on public endpoint
export class BookingController {
    constructor(private bookingService: BookingService) { }

    @Get(':slug/info')
    async getClinicInfo(@Param('slug') slug: string) {
        return this.bookingService.getClinicBySlug(slug);
    }

    @Get(':slug/doctors')
    async getClinicDoctors(@Param('slug') slug: string) {
        return this.bookingService.getClinicDoctors(slug);
    }

    @Get(':slug/slots')
    async getAvailableSlots(
        @Param('slug') slug: string,
        @Query('doctorId') doctorId: string,
        @Query('date') date: string,
    ) {
        return this.bookingService.getAvailableSlots(slug, doctorId, date);
    }

    @Post(':slug/appointments')
    async bookAppointment(
        @Param('slug') slug: string,
        @Body() dto: PublicBookAppointmentDto,
    ) {
        return this.bookingService.bookAppointment(slug, dto);
    }
}
