/* The Google Fonts stylesheet is shared in the App Router root layout. */
/* oxlint-disable next/no-page-custom-font */
import type { Metadata } from 'next';
import './globals.css';
import './studio.css';

export const metadata: Metadata = {
  title: 'DAKAWA | Nước uống tinh khiết tại Hội An',
  description:
    'Nước uống tinh khiết đóng bình và đóng chai DAKAWA, phục vụ Hội An, Đà Nẵng và khu vực lân cận.',
  icons: { icon: '/assets/dakawa-logo.png' },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="vi">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
