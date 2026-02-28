import 'dotenv/config';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL! });
const prisma = new PrismaClient({ adapter });



async function main() {
    console.log('🌱 Seeding database...');

    // Create Super Admin
    const superAdminPassword = await bcrypt.hash(
        process.env.SUPER_ADMIN_PASSWORD || 'SuperAdmin@123',
        12,
    );

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

    // Create a demo clinic
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

    // Create subscription for demo clinic
    await prisma.subscription.upsert({
        where: { clinicId: demoClinic.id },
        update: {},
        create: {
            clinicId: demoClinic.id,
            plan: 'PRO',
            status: 'ACTIVE',
            maxDoctors: 999,
            maxStaff: 999,
            expiryDate: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000), // 1 year
        },
    });

    // Create demo clinic admin
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

    // Create demo doctors
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

    // Create demo receptionist
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

    // Create demo patients
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

    // Create demo appointments
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

    // Create demo revenue records
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
                    category: ['consultation', 'procedure', 'lab', 'pharmacy'][
                        Math.floor(Math.random() * 4)
                    ],
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
