import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Clinic: "Clinic";
    readonly Subscription: "Subscription";
    readonly User: "User";
    readonly Patient: "Patient";
    readonly Appointment: "Appointment";
    readonly VisitLog: "VisitLog";
    readonly RevenueRecord: "RevenueRecord";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const ClinicScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly email: "email";
    readonly phone: "phone";
    readonly address: "address";
    readonly logo: "logo";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ClinicScalarFieldEnum = (typeof ClinicScalarFieldEnum)[keyof typeof ClinicScalarFieldEnum];
export declare const SubscriptionScalarFieldEnum: {
    readonly id: "id";
    readonly clinicId: "clinicId";
    readonly plan: "plan";
    readonly status: "status";
    readonly maxDoctors: "maxDoctors";
    readonly maxStaff: "maxStaff";
    readonly startDate: "startDate";
    readonly expiryDate: "expiryDate";
    readonly billingCycle: "billingCycle";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SubscriptionScalarFieldEnum = (typeof SubscriptionScalarFieldEnum)[keyof typeof SubscriptionScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly clinicId: "clinicId";
    readonly email: "email";
    readonly password: "password";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly role: "role";
    readonly phone: "phone";
    readonly specialization: "specialization";
    readonly isActive: "isActive";
    readonly refreshToken: "refreshToken";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const PatientScalarFieldEnum: {
    readonly id: "id";
    readonly clinicId: "clinicId";
    readonly firstName: "firstName";
    readonly lastName: "lastName";
    readonly email: "email";
    readonly phone: "phone";
    readonly dateOfBirth: "dateOfBirth";
    readonly gender: "gender";
    readonly address: "address";
    readonly bloodGroup: "bloodGroup";
    readonly allergies: "allergies";
    readonly medicalNotes: "medicalNotes";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type PatientScalarFieldEnum = (typeof PatientScalarFieldEnum)[keyof typeof PatientScalarFieldEnum];
export declare const AppointmentScalarFieldEnum: {
    readonly id: "id";
    readonly clinicId: "clinicId";
    readonly patientId: "patientId";
    readonly doctorId: "doctorId";
    readonly date: "date";
    readonly startTime: "startTime";
    readonly endTime: "endTime";
    readonly status: "status";
    readonly reason: "reason";
    readonly notes: "notes";
    readonly fee: "fee";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AppointmentScalarFieldEnum = (typeof AppointmentScalarFieldEnum)[keyof typeof AppointmentScalarFieldEnum];
export declare const VisitLogScalarFieldEnum: {
    readonly id: "id";
    readonly clinicId: "clinicId";
    readonly patientId: "patientId";
    readonly diagnosis: "diagnosis";
    readonly treatment: "treatment";
    readonly prescription: "prescription";
    readonly vitals: "vitals";
    readonly notes: "notes";
    readonly visitDate: "visitDate";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type VisitLogScalarFieldEnum = (typeof VisitLogScalarFieldEnum)[keyof typeof VisitLogScalarFieldEnum];
export declare const RevenueRecordScalarFieldEnum: {
    readonly id: "id";
    readonly clinicId: "clinicId";
    readonly category: "category";
    readonly amount: "amount";
    readonly description: "description";
    readonly date: "date";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type RevenueRecordScalarFieldEnum = (typeof RevenueRecordScalarFieldEnum)[keyof typeof RevenueRecordScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const NullableJsonNullValueInput: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
};
export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
export declare const JsonNullValueFilter: {
    readonly DbNull: import("@prisma/client-runtime-utils").DbNullClass;
    readonly JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
    readonly AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
};
export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter];
