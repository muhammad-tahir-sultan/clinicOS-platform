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
Object.defineProperty(exports, "__esModule", { value: true });
exports.defineExtension = exports.JsonNullValueFilter = exports.NullsOrder = exports.QueryMode = exports.NullableJsonNullValueInput = exports.SortOrder = exports.RevenueRecordScalarFieldEnum = exports.VisitLogScalarFieldEnum = exports.AppointmentScalarFieldEnum = exports.PatientScalarFieldEnum = exports.UserScalarFieldEnum = exports.SubscriptionScalarFieldEnum = exports.ClinicScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.prismaVersion = exports.getExtensionContext = exports.Decimal = exports.Sql = exports.raw = exports.join = exports.empty = exports.sql = exports.PrismaClientValidationError = exports.PrismaClientInitializationError = exports.PrismaClientRustPanicError = exports.PrismaClientUnknownRequestError = exports.PrismaClientKnownRequestError = void 0;
const runtime = __importStar(require("@prisma/client/runtime/client"));
exports.PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
exports.PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
exports.PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
exports.PrismaClientInitializationError = runtime.PrismaClientInitializationError;
exports.PrismaClientValidationError = runtime.PrismaClientValidationError;
exports.sql = runtime.sqltag;
exports.empty = runtime.empty;
exports.join = runtime.join;
exports.raw = runtime.raw;
exports.Sql = runtime.Sql;
exports.Decimal = runtime.Decimal;
exports.getExtensionContext = runtime.Extensions.getExtensionContext;
exports.prismaVersion = {
    client: "7.4.2",
    engine: "94a226be1cf2967af2541cca5529f0f7ba866919"
};
exports.NullTypes = {
    DbNull: runtime.NullTypes.DbNull,
    JsonNull: runtime.NullTypes.JsonNull,
    AnyNull: runtime.NullTypes.AnyNull,
};
exports.DbNull = runtime.DbNull;
exports.JsonNull = runtime.JsonNull;
exports.AnyNull = runtime.AnyNull;
exports.ModelName = {
    Clinic: 'Clinic',
    Subscription: 'Subscription',
    User: 'User',
    Patient: 'Patient',
    Appointment: 'Appointment',
    VisitLog: 'VisitLog',
    RevenueRecord: 'RevenueRecord'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.ClinicScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    email: 'email',
    phone: 'phone',
    address: 'address',
    logo: 'logo',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SubscriptionScalarFieldEnum = {
    id: 'id',
    clinicId: 'clinicId',
    plan: 'plan',
    status: 'status',
    maxDoctors: 'maxDoctors',
    maxStaff: 'maxStaff',
    startDate: 'startDate',
    expiryDate: 'expiryDate',
    billingCycle: 'billingCycle',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.UserScalarFieldEnum = {
    id: 'id',
    clinicId: 'clinicId',
    email: 'email',
    password: 'password',
    firstName: 'firstName',
    lastName: 'lastName',
    role: 'role',
    phone: 'phone',
    specialization: 'specialization',
    isActive: 'isActive',
    refreshToken: 'refreshToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.PatientScalarFieldEnum = {
    id: 'id',
    clinicId: 'clinicId',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    phone: 'phone',
    dateOfBirth: 'dateOfBirth',
    gender: 'gender',
    address: 'address',
    bloodGroup: 'bloodGroup',
    allergies: 'allergies',
    medicalNotes: 'medicalNotes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AppointmentScalarFieldEnum = {
    id: 'id',
    clinicId: 'clinicId',
    patientId: 'patientId',
    doctorId: 'doctorId',
    date: 'date',
    startTime: 'startTime',
    endTime: 'endTime',
    status: 'status',
    reason: 'reason',
    notes: 'notes',
    fee: 'fee',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.VisitLogScalarFieldEnum = {
    id: 'id',
    clinicId: 'clinicId',
    patientId: 'patientId',
    diagnosis: 'diagnosis',
    treatment: 'treatment',
    prescription: 'prescription',
    vitals: 'vitals',
    notes: 'notes',
    visitDate: 'visitDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.RevenueRecordScalarFieldEnum = {
    id: 'id',
    clinicId: 'clinicId',
    category: 'category',
    amount: 'amount',
    description: 'description',
    date: 'date',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.NullableJsonNullValueInput = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
exports.JsonNullValueFilter = {
    DbNull: exports.DbNull,
    JsonNull: exports.JsonNull,
    AnyNull: exports.AnyNull
};
exports.defineExtension = runtime.Extensions.defineExtension;
//# sourceMappingURL=prismaNamespace.js.map