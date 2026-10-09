import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EGO International',
  description: 'Private-sector management platform for EGO International',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
