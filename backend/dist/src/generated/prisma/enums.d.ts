export declare const Role: {
    readonly SUPER_ADMIN: "SUPER_ADMIN";
    readonly CLINIC_ADMIN: "CLINIC_ADMIN";
    readonly DOCTOR: "DOCTOR";
    readonly RECEPTIONIST: "RECEPTIONIST";
};
export type Role = (typeof Role)[keyof typeof Role];
export declare const SubscriptionPlan: {
    readonly BASIC: "BASIC";
    readonly PRO: "PRO";
    readonly ENTERPRISE: "ENTERPRISE";
};
export type SubscriptionPlan = (typeof SubscriptionPlan)[keyof typeof SubscriptionPlan];
export declare const SubscriptionStatus: {
    readonly ACTIVE: "ACTIVE";
    readonly SUSPENDED: "SUSPENDED";
    readonly EXPIRED: "EXPIRED";
};
export type SubscriptionStatus = (typeof SubscriptionStatus)[keyof typeof SubscriptionStatus];
export declare const AppointmentStatus: {
    readonly SCHEDULED: "SCHEDULED";
    readonly CONFIRMED: "CONFIRMED";
    readonly IN_PROGRESS: "IN_PROGRESS";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
    readonly NO_SHOW: "NO_SHOW";
};
export type AppointmentStatus = (typeof AppointmentStatus)[keyof typeof AppointmentStatus];
export declare const Gender: {
    readonly MALE: "MALE";
    readonly FEMALE: "FEMALE";
    readonly OTHER: "OTHER";
};
export type Gender = (typeof Gender)[keyof typeof Gender];
