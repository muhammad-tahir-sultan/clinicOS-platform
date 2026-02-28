"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gender = exports.AppointmentStatus = exports.SubscriptionStatus = exports.SubscriptionPlan = exports.Role = void 0;
exports.Role = {
    SUPER_ADMIN: 'SUPER_ADMIN',
    CLINIC_ADMIN: 'CLINIC_ADMIN',
    DOCTOR: 'DOCTOR',
    RECEPTIONIST: 'RECEPTIONIST'
};
exports.SubscriptionPlan = {
    BASIC: 'BASIC',
    PRO: 'PRO',
    ENTERPRISE: 'ENTERPRISE'
};
exports.SubscriptionStatus = {
    ACTIVE: 'ACTIVE',
    SUSPENDED: 'SUSPENDED',
    EXPIRED: 'EXPIRED'
};
exports.AppointmentStatus = {
    SCHEDULED: 'SCHEDULED',
    CONFIRMED: 'CONFIRMED',
    IN_PROGRESS: 'IN_PROGRESS',
    COMPLETED: 'COMPLETED',
    CANCELLED: 'CANCELLED',
    NO_SHOW: 'NO_SHOW'
};
exports.Gender = {
    MALE: 'MALE',
    FEMALE: 'FEMALE',
    OTHER: 'OTHER'
};
//# sourceMappingURL=enums.js.map