import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import Footer from "@/components/Footer";
import BackgroundEffect from "@/components/BackgroundEffect";
import Header from "@/components/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// app/layout.tsx - Add basic metadata
export const metadata = {
  title: 'DevPick - Find Your Perfect Tech Stack',
  description: 'Explore, compare, and choose the right technologies for your next project',
  keywords: 'tech stack, technology comparison, web development, programming',
  openGraph: {
    title: 'DevPick',
    description: 'Find Your Perfect Tech Stack',
    url: 'https://your-domain.com',
    siteName: 'DevPick',
  },
}

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
          <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
