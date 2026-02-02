import type { Metadata } from "next"
import { Inter, Source_Sans_3 } from "next/font/google"
import "./globals.css"

import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ScrollProgress from "@/components/ScrollProgress"
// import WeatherWidget from '@/components/WeatherWidget';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const sourceSansPro = Source_Sans_3({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700'],
  variable: '--font-source-sans-pro',
});

export const metadata: Metadata = {
  title: 'Dr. Maya Reynolds, PsyD | Therapy for Adults in Santa Monica, CA',
  description: 'Licensed Clinical Psychologist specializing in anxiety, trauma, and burnout treatment for adults in Santa Monica, California.',
  keywords: 'therapy, psychologist, Santa Monica, anxiety, trauma, burnout, EMDR, CBT',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sourceSansPro.variable}`}>
      <body>
        <ScrollProgress />
        <Header />
        <main className="pt-20">{children}</main>
        <Footer />
        {/* <WeatherWidget /> */}
      </body>
    </html>
  );
}
