import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050508",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "NEURAL.LINK | Kamal Haider - AI Mobile Engineer",
  description:
    "Command center for AI-powered mobile experiences. Building production apps with LLMs, on-device intelligence, and cross-platform Flutter solutions for iOS and Android.",
  metadataBase: new URL("https://kamalhaider.ai"),
  keywords: [
    "AI Mobile Engineer",
    "Flutter Developer",
    "iOS Developer",
    "Android Developer",
    "Mobile App Development",
    "LLM Integration",
    "OpenAI",
    "Cross-Platform",
    "React Native",
    "Mobile Architecture",
  ],
  authors: [{ name: "Kamal Haider", url: "https://kamalhaider.ai" }],
  creator: "Kamal Haider",
  openGraph: {
    title: "NEURAL.LINK | Kamal Haider - AI Mobile Engineer",
    description:
      "Command center for AI-powered mobile experiences. Building production apps with LLMs and cross-platform solutions.",
    url: "https://kamalhaider.ai",
    siteName: "Kamal Haider",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "NEURAL.LINK - Kamal Haider Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NEURAL.LINK | Kamal Haider - AI Mobile Engineer",
    description:
      "Command center for AI-powered mobile experiences. Building production apps with LLMs and cross-platform solutions.",
    images: ["/twitter-card.png"],
    creator: "@kamalhaider",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${jetbrainsMono.variable} ${outfit.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans antialiased bg-void text-text-primary">
        {children}
      </body>
    </html>
  );
}
