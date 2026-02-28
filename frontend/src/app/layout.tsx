import type { Metadata } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'ClinicOS — Healthcare Management Platform',
  description:
    'ClinicOS is a multi-tenant SaaS healthcare management platform for clinics — manage patients, appointments, staff, and analytics all in one place.',
  keywords: 'clinic management, patient records, appointments, healthcare SaaS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
