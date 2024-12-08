import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Settings | Enterprise KPI Dashboard',
  description: 'System settings and configurations',
};

export default function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-500 mt-1">Manage your dashboard preferences</p>
      </div>
      {children}
    </div>
  );
}