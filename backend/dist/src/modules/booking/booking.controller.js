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
exports.BookingController = void 0;
const common_1 = require("@nestjs/common");
const throttler_1 = require("@nestjs/throttler");
const booking_service_1 = require("./booking.service");
const booking_dto_1 = require("./dto/booking.dto");
let BookingController = class BookingController {
    bookingService;
    constructor(bookingService) {
        this.bookingService = bookingService;
    }
    async getClinicInfo(slug) {
        return this.bookingService.getClinicBySlug(slug);
    }
    async getClinicDoctors(slug) {
        return this.bookingService.getClinicDoctors(slug);
    }
    async getAvailableSlots(slug, doctorId, date) {
        return this.bookingService.getAvailableSlots(slug, doctorId, date);
    }
    async bookAppointment(slug, dto) {
        return this.bookingService.bookAppointment(slug, dto);
    }
};
exports.BookingController = BookingController;
__decorate([
    (0, common_1.Get)(':slug/info'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "getClinicInfo", null);
__decorate([
    (0, common_1.Get)(':slug/doctors'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "getClinicDoctors", null);
__decorate([
    (0, common_1.Get)(':slug/slots'),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Query)('doctorId')),
    __param(2, (0, common_1.Query)('date')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "getAvailableSlots", null);
__decorate([
    (0, common_1.Post)(':slug/appointments'),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, booking_dto_1.PublicBookAppointmentDto]),
    __metadata("design:returntype", Promise)
], BookingController.prototype, "bookAppointment", null);
exports.BookingController = BookingController = __decorate([
    (0, common_1.Controller)('booking'),
    (0, common_1.UseGuards)(throttler_1.ThrottlerGuard),
    __metadata("design:paramtypes", [booking_service_1.BookingService])
], BookingController);
//# sourceMappingURL=booking.controller.js.map