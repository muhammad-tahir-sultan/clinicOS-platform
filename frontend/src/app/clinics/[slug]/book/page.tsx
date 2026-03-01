'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

export default function BookAppointment({ params }: { params: { slug: string } }) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [clinic, setClinic] = useState<any>(null);
    const [doctors, setDoctors] = useState<any[]>([]);
    const [availableSlots, setAvailableSlots] = useState<any[]>([]);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        doctorId: '',
        date: '',
        startTime: '',
        endTime: '',
        reason: '',
    });

    const [loading, setLoading] = useState(true);
    const [booking, setBooking] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    // Capture UTM parameters from URL on load
    const campaignSource = searchParams.get('utm_source') || 'organic';
    const utmParameters = JSON.stringify(Object.fromEntries(searchParams.entries()));

    useEffect(() => {
        // Fetch Clinic Info and Doctors concurrently
        Promise.all([
            fetch(`${API_BASE}/booking/${params.slug}/info`).then((res) => res.json()),
            fetch(`${API_BASE}/booking/${params.slug}/doctors`).then((res) => res.json()),
        ])
            .then(([clinicData, doctorData]) => {
                setClinic(clinicData);
                setDoctors(doctorData);
            })
            .catch((err) => setError('Failed to load clinic information. Please try again later.'))
            .finally(() => setLoading(false));
    }, [params.slug]);

    const fetchSlots = async (doctorId: string, selectedDate: string) => {
        if (!doctorId || !selectedDate) return;
        try {
            const res = await fetch(`${API_BASE}/booking/${params.slug}/slots?doctorId=${doctorId}&date=${selectedDate}`);
            const data = await res.json();
            setAvailableSlots(data);
        } catch {
            setAvailableSlots([]);
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        // Reset slots if doctor or date changes
        if (name === 'doctorId' || name === 'date') {
            const updatedDoctorId = name === 'doctorId' ? value : formData.doctorId;
            const updatedDate = name === 'date' ? value : formData.date;

            setFormData((prev) => ({ ...prev, startTime: '', endTime: '' }));
            if (updatedDoctorId && updatedDate) {
                fetchSlots(updatedDoctorId, updatedDate);
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        setBooking(true);

        try {
            const res = await fetch(`${API_BASE}/booking/${params.slug}/appointments`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    campaignSource,
                    utmParameters,
                }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || 'Failed to book appointment.');
            }

            setSuccess(true);
        } catch (err: any) {
            setError(err.message || 'An error occurred.');
        } finally {
            setBooking(false);
        }
    };

    if (loading) return <div className="min-h-screen grid items-center justify-center text-slate-500">Loading booking page...</div>;
    if (error && !clinic) return <div className="text-red-500 text-center p-8">{error}</div>;

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden p-8">

                {success ? (
                    <div className="text-center py-10">
                        <h2 className="text-3xl font-bold text-green-600 mb-4">You're Booked! 🎉</h2>
                        <p className="text-slate-600 text-lg mb-8">
                            Your appointment at {clinic?.name || 'the clinic'} has been confirmed. We look forward to seeing you.
                        </p>
                        <button
                            onClick={() => router.push(`/clinics/${params.slug}`)}
                            className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800"
                        >
                            Return Home
                        </button>
                    </div>
                ) : (
                    <>
                        <div className="text-center mb-10">
                            <h1 className="text-3xl font-bold text-slate-900 leading-tight">Book an Appointment</h1>
                            <p className="text-slate-500 mt-2">Fill out the details below to schedule your visit at {clinic?.name}</p>
                        </div>

                        {error && <div className="bg-red-50 text-red-600 p-4 rounded-lg mb-6 text-sm">{error}</div>}

                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">First Name *</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className="w-full border-slate-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 border"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Last Name *</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        required
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className="w-full border-slate-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 border"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full border-slate-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 border"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number *</label>
                                    <input
                                        type="tel"
                                        name="phone"
                                        required
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="w-full border-slate-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 border"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Select Specialist *</label>
                                <select
                                    name="doctorId"
                                    required
                                    value={formData.doctorId}
                                    onChange={handleInputChange}
                                    className="w-full border-slate-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 border bg-white"
                                >
                                    <option value="" disabled>Choose a doctor</option>
                                    {doctors.map((doctor) => (
                                        <option key={doctor.id} value={doctor.id}>
                                            Dr. {doctor.firstName} {doctor.lastName} - {doctor.specialization}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Appointment Date *</label>
                                <input
                                    type="date"
                                    name="date"
                                    required
                                    value={formData.date}
                                    onChange={handleInputChange}
                                    // Disable past dates roughly
                                    min={new Date().toISOString().split("T")[0]}
                                    className="w-full border-slate-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 border"
                                />
                            </div>

                            {availableSlots.length > 0 && (
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Available Time Slots *</label>
                                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                                        {availableSlots.map((slot, idx) => (
                                            <button
                                                key={idx}
                                                type="button"
                                                onClick={() => setFormData({ ...formData, startTime: slot.startTime, endTime: slot.endTime })}
                                                className={`py-2 px-3 text-sm font-medium rounded-lg border focus:outline-none transition-colors ${formData.startTime === slot.startTime
                                                        ? 'bg-blue-600 border-blue-600 text-white shadow-md'
                                                        : 'bg-white border-slate-200 text-slate-700 hover:border-blue-300 hover:bg-slate-50'
                                                    }`}
                                            >
                                                {slot.startTime}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {formData.date && formData.doctorId && availableSlots.length === 0 && (
                                <p className="text-sm text-amber-600 bg-amber-50 p-3 rounded">
                                    No slots available for the selected date and specialist. Try another combinations.
                                </p>
                            )}

                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">Reason for Visit (Optional)</label>
                                <textarea
                                    name="reason"
                                    rows={3}
                                    value={formData.reason}
                                    onChange={(e) => handleInputChange(e as any)}
                                    className="w-full border-slate-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 border"
                                    placeholder="Briefly describe your symptoms or reason for visit"
                                ></textarea>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={booking || !formData.startTime}
                                    className={`w-full py-4 px-6 text-white text-lg font-bold rounded-xl transition-all shadow-md
                    ${booking || !formData.startTime
                                            ? 'bg-slate-400 cursor-not-allowed'
                                            : 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg'
                                        }`}
                                >
                                    {booking ? 'Confirming...' : 'Confirm Appointment'}
                                </button>
                            </div>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
