"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const schedule_1 = require("@nestjs/schedule");
const throttler_1 = require("@nestjs/throttler");
const prisma_module_1 = require("./prisma/prisma.module");
const auth_module_1 = require("./modules/auth/auth.module");
const tenant_module_1 = require("./modules/tenant/tenant.module");
const subscription_module_1 = require("./modules/subscription/subscription.module");
const users_module_1 = require("./modules/users/users.module");
const patients_module_1 = require("./modules/patients/patients.module");
const appointments_module_1 = require("./modules/appointments/appointments.module");
const dashboard_module_1 = require("./modules/dashboard/dashboard.module");
const booking_module_1 = require("./modules/booking/booking.module");
const marketing_module_1 = require("./modules/marketing/marketing.module");
const health_controller_1 = require("./health.controller");
const prisma_service_1 = require("./prisma/prisma.service");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            schedule_1.ScheduleModule.forRoot(),
            throttler_1.ThrottlerModule.forRoot([{ ttl: 60000, limit: 100 }]),
            prisma_module_1.PrismaModule,
            auth_module_1.AuthModule,
            tenant_module_1.TenantModule,
            subscription_module_1.SubscriptionModule,
            users_module_1.UsersModule,
            patients_module_1.PatientsModule,
            appointments_module_1.AppointmentsModule,
            dashboard_module_1.DashboardModule,
            booking_module_1.BookingModule,
            marketing_module_1.MarketingModule,
        ],
        controllers: [health_controller_1.HealthController],
        providers: [prisma_service_1.PrismaService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map