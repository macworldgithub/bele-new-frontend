import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bele.ai — AI Agency Partnership Program',
  description: 'Unlock a high-margin recurring revenue stream with Bele AI. You own the client relationship. We handle the complex builds, deployment, and support.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>{children}</body>
    </html>
  );
}
