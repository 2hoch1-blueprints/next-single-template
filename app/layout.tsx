import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Next Single Template',
  description: 'A production-ready Next.js starter',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
