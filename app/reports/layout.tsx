import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Reports | Enterprise KPI Dashboard',
  description: 'Financial and performance reports',
};

export default function ReportsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
        <p className="text-gray-500 mt-1">View and analyze financial reports</p>
      </div>
      {children}
    </div>
  );
}