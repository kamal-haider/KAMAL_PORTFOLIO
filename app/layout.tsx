import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kamal Haider - AI-First Technical Leader & Product Architect",
  description: "I architect and ship AI-powered systems end-to-end — from LLM integration and intelligent automation to scalable product platforms. Building AI systems that matter.",
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
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}

