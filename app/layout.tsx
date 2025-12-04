import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kamal Haider - AI Mobile Engineer",
  description: "Building AI-powered mobile applications that integrate LLMs, on-device intelligence, and intelligent features into production-ready iOS and Android apps.",
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
