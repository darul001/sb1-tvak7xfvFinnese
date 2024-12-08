import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Sidebar } from '@/components/layout/Sidebar';
import { Header } from '@/components/layout/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Enterprise KPI Dashboard',
  description: 'Financial Performance Metrics Dashboard',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Sidebar />
        <Header />
        <main className="pl-20 pt-16 min-h-screen bg-gray-50">
          <div className="max-w-7xl mx-auto p-6">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}