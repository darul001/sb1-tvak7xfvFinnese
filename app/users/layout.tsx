import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Users | Enterprise KPI Dashboard',
  description: 'User management and analytics',
};

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <div className="border-b pb-4">
        <h1 className="text-2xl font-bold text-gray-900">Users</h1>
        <p className="text-gray-500 mt-1">Manage users and permissions</p>
      </div>
      {children}
    </div>
  );
}