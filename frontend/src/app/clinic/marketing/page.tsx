'use client';

import { useState, useEffect } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api';

export default function MarketingDashboard() {
    const [loading, setLoading] = useState(true);
    const [qrCodeData, setQrCodeData] = useState<string | null>(null);
    const [analytics, setAnalytics] = useState<any>(null);
    const [dateRange, setDateRange] = useState('30');

    useEffect(() => {
        fetchMarketingData();
    }, [dateRange]);

    const fetchMarketingData = async () => {
        setLoading(true);
        try {
            const token = localStorage.getItem('accessToken');
            const headers = { Authorization: `Bearer ${token}` };
            const end = new Date();
            const start = new Date();
            start.setDate(end.getDate() - Number(dateRange));

            const qrRes = await fetch(`${API_BASE}/marketing/qr-code`, { headers });
            const qrData = await qrRes.json();

            const analyticsRes = await fetch(
                `${API_BASE}/marketing/campaign-analytics?startDate=${start.toISOString()}&endDate=${end.toISOString()}`,
                { headers },
            );
            const analyticsData = await analyticsRes.json();

            setQrCodeData(qrData.dataUri);
            setAnalytics(analyticsData);
        } catch (error) {
            console.error('Failed to load marketing dashboard', error);
        } finally {
            setLoading(false);
        }
    };

    const chartData = analytics?.campaigns?.map((c: any) => ({
        Source: c.campaignSource || 'Organic',
        Appointments: c.appointmentsBooked,
        Revenue: c.totalRevenue,
    })) || [];

    return (
        <div className="p-8 max-w-7xl mx-auto space-y-8">
            <div className="flex justify-between items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Marketing & Growth</h1>
                    <p className="text-slate-500 mt-2">Track campaigns, download QR codes, and grow your patient base.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* QR Code Card */}
                <div className="col-span-1 border-t-4 border-blue-500 rounded-2xl shadow-lg bg-white p-6">
                    <h2 className="text-xl font-semibold text-slate-800">Public Booking QR Code</h2>
                    <p className="mt-2 text-sm text-slate-500">Patients can scan this to book appointments.</p>

                    <div className="mt-8 flex flex-col items-center justify-center p-6 bg-slate-50 rounded-xl border border-slate-100">
                        {loading ? (
                            <div className="h-48 w-48 bg-slate-200 animate-pulse rounded-lg"></div>
                        ) : qrCodeData ? (
                            <>
                                <img src={qrCodeData} alt="Clinic Booking QR" className="w-48 h-48 mb-6 shadow-md rounded-lg" />
                                <a
                                    href={qrCodeData}
                                    download="clinic_booking_qr.png"
                                    className="px-6 py-2 bg-slate-900 text-white rounded-lg text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm"
                                >
                                    Download PNG
                                </a>
                            </>
                        ) : (
                            <p className="text-sm text-slate-400">Failed to load QR code</p>
                        )}
                    </div>
                </div>

                {/* Analytics Card */}
                <div className="col-span-1 lg:col-span-2 rounded-2xl shadow-lg border-t-4 border-emerald-500 bg-white p-6">
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-6">
                        <div>
                            <h2 className="text-xl font-semibold text-slate-800">Campaign ROI & Appointments</h2>
                            <p className="text-sm text-slate-500 mt-1">Appointments booked categorised by UTM Source</p>
                        </div>
                        <div className="mt-4 sm:mt-0 max-w-xs">
                            <select
                                value={dateRange}
                                onChange={(e) => setDateRange(e.target.value)}
                                className="w-full border-slate-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500 px-4 py-2 border bg-white text-sm"
                            >
                                <option value="7">Last 7 Days</option>
                                <option value="30">Last 30 Days</option>
                                <option value="90">Last 90 Days</option>
                            </select>
                        </div>
                    </div>

                    {loading ? (
                        <div className="h-72 w-full bg-slate-100 animate-pulse rounded-xl"></div>
                    ) : chartData.length > 0 ? (
                        <div className="mt-6 flex flex-col gap-4">
                            {chartData.map((d: any, i: number) => (
                                <div key={i} className="flex justify-between items-center p-4 bg-slate-50 rounded-xl">
                                    <span className="font-semibold text-slate-800 uppercase tracking-wide text-sm">{d.Source}</span>
                                    <div className="flex gap-4 items-center">
                                        <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-bold">{d.Appointments} Bookings</span>
                                        <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-bold">${d.Revenue}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center p-8 rounded-xl bg-slate-50 border border-slate-100 text-slate-500 text-sm h-72 text-center">
                            No campaign data available for this period. Try sharing links with "?utm_source=facebook" appended.
                        </div>
                    )}
                </div>
            </div>

            {/* Guide / Instructions */}
            <div className="col-span-1 lg:col-span-3 rounded-2xl shadow-lg border border-slate-100 p-8 bg-white mt-8">
                <h2 className="text-xl font-semibold text-slate-800 mb-6">Growing your Clinic Guide</h2>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 bg-blue-50/50 rounded-xl">
                        <h3 className="font-bold text-blue-900 mb-2">1. Social Media Links</h3>
                        <p className="text-sm text-slate-600 mb-4">Paste your booking link in your Instagram and Facebook bios. Append tracking tags to know where patients come from.</p>
                        <code className="text-xs font-mono bg-blue-100 text-blue-800 p-2 rounded block break-all">
                            https://[yourslug].clinicos.com/book?utm_source=instagram
                        </code>
                    </div>
                    <div className="p-6 bg-emerald-50/50 rounded-xl">
                        <h3 className="font-bold text-emerald-900 mb-2">2. Clinic Reception Desk</h3>
                        <p className="text-sm text-slate-600">Download the QR code and display it on acrylic stands at your front desk. Encourage walk-ins to scan and book return appointments seamlessly.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
