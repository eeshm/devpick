import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Covered_By_Your_Grace,
  Doto,
  Instrument_Serif,
  Manrope,
  Oswald,
} from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import BackgroundEffect from "@/components/BackgroundEffect";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const coveredByYourGrace = Covered_By_Your_Grace({
  variable: "--font-covered-by-your-grace",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const doto = Doto({
  variable: "--font-doto",
  subsets: ["latin"],
  weight: ["100", "400", "700", "900"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "400", "600", "800"],
  display: "swap",
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["200", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://dev-pick.vercel.app'),
  title: {
    default: 'DevPick — Find Your Perfect Tech Stack',
    template: '%s | DevPick'
  },
  description: 'Explore, compare, and choose the right technologies for your next project. Comprehensive guides on Frontend, Backend, Database, DevOps and many more technologies.',
  keywords: [
    'tech stack', 'technology comparison', 'web development', 'programming languages',
    'react vs vue', 'react vs Angular', 'nodejs vs django', 'MongoDB vs PostgreSQL',
    'Tailwind vs Bootstrap', 'AWS vs Azure', 'Docker vs Kubernetes',
    'React Native vs Flutter', 'TensorFlow vs PyTorch', 'frontend frameworks',
    'backend technologies', 'database comparison', 'devops tools'
  ],
  authors: [{ name: 'DevPick' }],
  creator: 'Eesh Midha',
  publisher: 'DevPick',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://dev-pick.vercel.app',
    title: 'DevPick — Find Your Perfect Tech Stack',
    description: 'Explore, compare, and choose the right technologies for your next project',
    siteName: 'DevPick',
    images: [{ url: '/img-devpick.png', width: 1200, height: 630, alt: 'DevPick - Technology Comparison Platform' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevPick — Find Your Perfect Tech Stack',
    description: 'Explore, compare, and choose the right technologies for your next project',
    images: ['/img-devpick.png'],
    creator: '@eeshmidha_'
  },
  alternates: { canonical: 'https://dev-pick.vercel.app' }
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} ${coveredByYourGrace.variable} ${doto.variable} ${instrumentSerif.variable} ${manrope.variable} ${oswald.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <div className="min-h-screen flex flex-col" style={{ background: '#000' }}>
            <BackgroundEffect />
            <Header />
            <main className="flex-1">
              {children}
            </main>
            <Analytics />
            {/* <Footer /> */}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
