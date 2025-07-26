import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navbar } from "@/components/navbar";
import { ClerkProvider} from '@clerk/nextjs';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
   title: 'Muhammad Saeef | Web Developer & Designer Portfolio',
  description: 'Hi, I’m Muhammad Saeef — a creative web developer and designer specializing in modern, responsive websites using Next.js, React, and more.',
  keywords: ['Muhammad Saeef', 'Web Developer', 'Frontend Developer', 'Next.js Portfolio', 'Creative Designer', 'Freelancer Pakistan'],
  authors: [{ name: 'Muhammad Saeef' }],
  verification: {
    google: '85tj4GfcBCMItqW5s_6jxhvb8txI5lglxw7ia2CJ2yw',
  },
  openGraph: {
    title: 'Muhammad Saeef | Web Developer Portfolio',
    description: 'Explore the projects and skills of Muhammad Saeef, a passionate web developer and designer.',
    url: 'https://portfolio-nine-lemon-48.vercel.app',
    siteName: 'Muhammad Saeef Portfolio',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}