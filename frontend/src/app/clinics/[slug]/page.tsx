import { notFound } from 'next/navigation';
import Link from 'next/link';

// Fetch clinic info from the backend public API
async function getClinicInfo(slug: string) {
    const res = await fetch(`http://localhost:4000/api/booking/${slug}/info`, {
        next: { revalidate: 60 }, // Revalidate every minute
    });

    if (!res.ok) {
        if (res.status === 404) return null;
        throw new Error('Failed to fetch clinic information');
    }

    return res.json();
}

export default async function ClinicLandingPage({
    params,
}: {
    params: { slug: string };
}) {
    const clinic = await getClinicInfo(params.slug);

    if (!clinic) {
        notFound();
    }

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col items-center py-16 px-4">
            <div className="w-full max-w-4xl bg-white shadow-xl rounded-2xl overflow-hidden text-center p-10">
                <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
                    {clinic.name}
                </h1>
                <p className="text-lg text-slate-500 mb-8 max-w-lg mx-auto">
                    Welcome to our official booking portal. Manage your appointments and consult our top specialists seamlessly.
                </p>

                {clinic.address && (
                    <div className="text-sm text-slate-600 mb-6 bg-slate-100 p-4 rounded-xl inline-block">
                        📍 {clinic.address}
                    </div>
                )}

                {clinic.phone && (
                    <div className="text-sm text-slate-600 mb-10 bg-slate-100 p-4 rounded-xl inline-block ml-4">
                        📞 {clinic.phone}
                    </div>
                )}

                <div className="mt-8">
                    <Link
                        href={`/clinics/${params.slug}/book`}
                        className="px-8 py-4 text-xl font-bold rounded-full text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                        Book Appointment Now
                    </Link>
                </div>
            </div>
        </div>
    );
}
