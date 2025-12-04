import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kamal Haider - AI Mobile Engineer",
  description: "Building AI-powered mobile applications that integrate LLMs, on-device intelligence, and intelligent features into production-ready iOS and Android apps.",
  metadataBase: new URL('https://kamalhaider.ai'),
  openGraph: {
    title: 'Kamal Haider - AI Mobile Engineer',
    description: 'Building AI-powered mobile apps with LLMs, on-device intelligence, and cross-platform experiences.',
    url: 'https://kamalhaider.ai',
    siteName: 'Kamal Haider',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kamal Haider - AI Mobile Engineer',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kamal Haider - AI Mobile Engineer',
    description: 'Building AI-powered mobile apps with LLMs, on-device intelligence, and cross-platform experiences.',
    images: ['/twitter-card.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@300;400;500;600;700&family=Outfit:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-void text-white">
        {children}
      </body>
    </html>
  );
}
