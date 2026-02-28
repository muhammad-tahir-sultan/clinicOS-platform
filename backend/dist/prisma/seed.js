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
require("dotenv/config");
const adapter_pg_1 = require("@prisma/adapter-pg");
const client_1 = require("@prisma/client");
const bcrypt = __importStar(require("bcrypt"));
const adapter = new adapter_pg_1.PrismaPg({ connectionString: process.env.DATABASE_URL });
const prisma = new client_1.PrismaClient({ adapter });
async function main() {
    console.log('🌱 Seeding database...');
    const superAdminPassword = await bcrypt.hash(process.env.SUPER_ADMIN_PASSWORD || 'SuperAdmin@123', 12);
    const superAdmin = await prisma.user.upsert({
        where: { email: process.env.SUPER_ADMIN_EMAIL || 'admin@clinicos.com' },
        update: {},
        create: {
            email: process.env.SUPER_ADMIN_EMAIL || 'admin@clinicos.com',
            password: superAdminPassword,
            firstName: 'Super',
            lastName: 'Admin',
            role: 'SUPER_ADMIN',
        },
    });
    console.log(`✅ Super Admin created: ${superAdmin.email}`);
    const demoClinic = await prisma.clinic.upsert({
        where: { slug: 'demo-clinic' },
        update: {},
        create: {
            name: 'Demo Medical Center',
            slug: 'demo-clinic',
            email: 'demo@clinicos.com',
            phone: '+1234567890',
            address: '123 Medical Street, Health City',
        },
    });
    console.log(`✅ Demo clinic created: ${demoClinic.name}`);
    await prisma.subscription.upsert({
        where: { clinicId: demoClinic.id },
        update: {},
        create: {
            clinicId: demoClinic.id,
            plan: 'PRO',
            status: 'ACTIVE',
            maxDoctors: 999,
            maxStaff: 999,
            expiryDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000),
        },
    });
    const clinicAdminPassword = await bcrypt.hash('ClinicAdmin@123', 12);
    const clinicAdmin = await prisma.user.upsert({
        where: { email: 'clinic@demo.com' },
        update: {},
        create: {
            clinicId: demoClinic.id,
            email: 'clinic@demo.com',
            password: clinicAdminPassword,
            firstName: 'Clinic',
            lastName: 'Admin',
            role: 'CLINIC_ADMIN',
        },
    });
    console.log(`✅ Clinic Admin created: ${clinicAdmin.email}`);
    const doctorPassword = await bcrypt.hash('Doctor@123', 12);
    const doctor1 = await prisma.user.upsert({
        where: { email: 'dr.smith@demo.com' },
        update: {},
        create: {
            clinicId: demoClinic.id,
            email: 'dr.smith@demo.com',
            password: doctorPassword,
            firstName: 'John',
            lastName: 'Smith',
            role: 'DOCTOR',
            specialization: 'General Physician',
            phone: '+1234567891',
        },
    });
    const doctor2 = await prisma.user.upsert({
        where: { email: 'dr.jane@demo.com' },
        update: {},
        create: {
            clinicId: demoClinic.id,
            email: 'dr.jane@demo.com',
            password: doctorPassword,
            firstName: 'Jane',
            lastName: 'Doe',
            role: 'DOCTOR',
            specialization: 'Cardiologist',
            phone: '+1234567892',
        },
    });
    console.log(`✅ Demo doctors created`);
    const receptionistPassword = await bcrypt.hash('Reception@123', 12);
    await prisma.user.upsert({
        where: { email: 'reception@demo.com' },
        update: {},
        create: {
            clinicId: demoClinic.id,
            email: 'reception@demo.com',
            password: receptionistPassword,
            firstName: 'Sarah',
            lastName: 'Johnson',
            role: 'RECEPTIONIST',
            phone: '+1234567893',
        },
    });
    console.log(`✅ Demo receptionist created`);
    const patients = await Promise.all([
        prisma.patient.create({
            data: {
                clinicId: demoClinic.id,
                firstName: 'Ahmad',
                lastName: 'Khan',
                phone: '+921234567890',
                email: 'ahmad@example.com',
                gender: 'MALE',
                dateOfBirth: new Date('1990-05-15'),
                bloodGroup: 'A+',
                address: '456 Main Street, Islamabad',
            },
        }),
        prisma.patient.create({
            data: {
                clinicId: demoClinic.id,
                firstName: 'Fatima',
                lastName: 'Ali',
                phone: '+921234567891',
                email: 'fatima@example.com',
                gender: 'FEMALE',
                dateOfBirth: new Date('1985-10-20'),
                bloodGroup: 'B+',
                address: '789 Oak Avenue, Lahore',
            },
        }),
        prisma.patient.create({
            data: {
                clinicId: demoClinic.id,
                firstName: 'Muhammad',
                lastName: 'Hassan',
                phone: '+921234567892',
                gender: 'MALE',
                dateOfBirth: new Date('1975-03-08'),
                bloodGroup: 'O+',
            },
        }),
    ]);
    console.log(`✅ ${patients.length} demo patients created`);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(tomorrow.getDate() + 1);
    await Promise.all([
        prisma.appointment.create({
            data: {
                clinicId: demoClinic.id,
                patientId: patients[0].id,
                doctorId: doctor1.id,
                date: today,
                startTime: '09:00',
                endTime: '09:30',
                status: 'SCHEDULED',
                reason: 'General checkup',
                fee: 500,
            },
        }),
        prisma.appointment.create({
            data: {
                clinicId: demoClinic.id,
                patientId: patients[1].id,
                doctorId: doctor2.id,
                date: today,
                startTime: '10:00',
                endTime: '10:30',
                status: 'CONFIRMED',
                reason: 'Heart consultation',
                fee: 1500,
            },
        }),
        prisma.appointment.create({
            data: {
                clinicId: demoClinic.id,
                patientId: patients[2].id,
                doctorId: doctor1.id,
                date: tomorrow,
                startTime: '11:00',
                endTime: '11:30',
                status: 'SCHEDULED',
                reason: 'Follow-up visit',
                fee: 300,
            },
        }),
    ]);
    console.log(`✅ Demo appointments created`);
    for (let i = 0; i < 6; i++) {
        const month = new Date();
        month.setMonth(month.getMonth() - i);
        const numRecords = Math.floor(Math.random() * 20) + 10;
        for (let j = 0; j < numRecords; j++) {
            const day = Math.floor(Math.random() * 28) + 1;
            const recordDate = new Date(month.getFullYear(), month.getMonth(), day);
            await prisma.revenueRecord.create({
                data: {
                    clinicId: demoClinic.id,
                    category: ['consultation', 'procedure', 'lab', 'pharmacy'][Math.floor(Math.random() * 4)],
                    amount: Math.floor(Math.random() * 2000) + 200,
                    description: `Service charge`,
                    date: recordDate,
                },
            });
        }
    }
    console.log(`✅ Demo revenue records created`);
    console.log('');
    console.log('🎉 Database seeded successfully!');
    console.log('');
    console.log('📋 Login Credentials:');
    console.log('  Super Admin: admin@clinicos.com / SuperAdmin@123');
    console.log('  Clinic Admin: clinic@demo.com / ClinicAdmin@123');
    console.log('  Doctor: dr.smith@demo.com / Doctor@123');
    console.log('  Receptionist: reception@demo.com / Reception@123');
}
main()
    .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map