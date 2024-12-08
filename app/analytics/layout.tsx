import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Analytics | Enterprise KPI Dashboard',
  description: 'Detailed analytics and insights',
};

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
        <p className="text-gray-500 mt-1">Detailed performance analytics and trends</p>
      </div>
      {children}
    </div>
  );
}