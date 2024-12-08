'use client';

import { Bell, Globe, Lock, User } from 'lucide-react';

const settingSections = [
  {
    id: 'profile',
    title: 'Profile Settings',
    icon: User,
    description: 'Update your personal information and preferences',
  },
  {
    id: 'notifications',
    title: 'Notification Preferences',
    icon: Bell,
    description: 'Configure how you receive alerts and updates',
  },
  {
    id: 'security',
    title: 'Security Settings',
    icon: Lock,
    description: 'Manage your account security and authentication',
  },
  {
    id: 'regional',
    title: 'Regional Settings',
    icon: Globe,
    description: 'Set your timezone and localization preferences',
  },
];

export default function SettingsPage() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {settingSections.map((section) => {
        const Icon = section.icon;
        return (
          <div
            key={section.id}
            className="bg-white p-6 rounded-lg shadow-sm border hover:border-blue-500 transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div className="h-10 w-10 rounded-full bg-blue-50 flex items-center justify-center">
                <Icon className="h-5 w-5 text-blue-500" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">{section.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{section.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}