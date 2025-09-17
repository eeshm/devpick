import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import BackgroundEffect from "@/components/BackgroundEffect";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/next"
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  metadataBase: new URL('https://dev-pick.vercel.app'), // Update with your domain
  title: {
    default: 'DevPick- Find Your Perfect Tech Stack',
    template: '%s | DevPick'
  },
  description: 'Explore, compare, and choose the right technologies for your next project. Comprehensive guides on Frontend, Backend, Database, DevOps and many more technologies.',
  keywords: [
    'tech stack',
    'technology comparison', 
    'web development',
    'programming languages',
    'react vs vue',
    'react vs Angular',
    'react vs Astor',
    'react vs Nextjs',
    'nodejs vs django',
    'nodejs vs Express',
    'nodejs vs Laravel',
    'nodejs vs Nestjs',
    'nodejs vs Go',
    'Express vs Ruby on Rails',
    'Express vs Nestjs',
    'Express vs FastAPI',
    'Tailwind vs Bootstrap', 
    'Tailwind vs Material UI', 
    'MongoDB vs PostgreSQL',
    'MongoDB vs MySQL',
    'MongoDB vs Firebase',
    'PostgreSQL vs MySQL',
    'PostgreSQL vs SQLite',
    'MySQL vs MariaDB',
    'Django vs Flask',
    'Django vs FastAPI',
    'Laravel vs Symfony',
    'Ruby on Rails vs Django',
    'Ruby on Rails vs Express',
    'DevOps tools comparison',
    'CI/CD tools',
    'cloud providers comparison',
    'AWS vs Azure',
    'AWS vs GCP',
    'Azure vs GCP',
    'containerization tools',
    'Kubernetes vs Docker ',
    'Docker vs Kubernetes',
    'React Native vs Flutter',
    'Ionic vs React Native',
    'Xamarin vs Flutter',
    'mobile app development frameworks',
    'Kotlin vs Flutter',
    'Flutter vs Flutter',
    'Swift vs Flutter',
    'cross-platform mobile development',
    'machine learning frameworks',
    'TensorFlow vs PyTorch',
    'scikit-learn vs TensorFlow',
    'Jest vs Mocha',
    'testing frameworks comparison',
    'AI tools comparison',
    'frontend frameworks',
    'backend technologies',
    'database comparison',
    'devops tools'
  ],
  authors: [{ name:'DevPick' }],
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
    title: 'DevPick- Find Your Perfect Tech Stack',
    description: 'Explore, compare, and choose the right technologies for your next project',
    siteName: 'DevPick',
    images: [
      {
        url: '/img-devpick.png', 
        width: 1200,
        height: 630,
        alt: 'DevPick - Technology Comparison Platform'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevPick - Find Your Perfect Tech Stack',
    description: 'Explore, compare, and choose the right technologies for your next project',
    images: ['/img-devpick.png'],
    creator: '@eeshmidha_' 
  },
  alternates: {
    canonical: 'https://dev-pick.vercel.app'
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) { 
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
        >
         <div className="min-h-screen flex flex-col">
          <BackgroundEffect />
          <Header/>
          <main className="flex-1">
          {children}
          </main>
          <Analytics/>
          <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
