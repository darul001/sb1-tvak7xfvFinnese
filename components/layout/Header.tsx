'use client';

import { Bell, Calendar } from 'lucide-react';
import { useState } from 'react';
import { UserAvatar } from '@/components/features/UserAvatar';

export function Header() {
  const [alerts] = useState(2);
  const currentDate = new Date();
  const monthYear = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  return (
    <header className="fixed top-0 left-20 right-0 h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2 bg-gray-100 px-3 py-1.5 rounded-md">
          <Calendar className="h-4 w-4 text-gray-600" />
          <span className="text-sm font-medium">{monthYear}</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="relative p-2 hover:bg-gray-100 rounded-full">
          <Bell className="h-5 w-5 text-gray-600" />
          {alerts > 0 && (
            <span className="absolute top-1 right-1 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
              {alerts}
            </span>
          )}
        </button>
        <UserAvatar
          email="john.doe@example.com"
          name="John Doe"
        />
      </div>
    </header>
  );
}