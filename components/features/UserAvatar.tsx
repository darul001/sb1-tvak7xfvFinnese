'use client';

import { LogOut, User } from 'lucide-react';
import { useState } from 'react';

interface UserAvatarProps {
  email: string;
  name: string;
  imageUrl?: string;
}

export function UserAvatar({ email, name, imageUrl }: UserAvatarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSignOut = () => {
    // Implement sign out logic here
    console.log('Signing out...');
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 hover:bg-gray-100 rounded-full p-1 transition-colors"
      >
        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
          {imageUrl ? (
            <img src={imageUrl} alt={name} className="h-8 w-8 rounded-full" />
          ) : (
            <User className="h-4 w-4 text-blue-600" />
          )}
        </div>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
          <div className="px-4 py-3 border-b">
            <p className="text-sm font-medium text-gray-900">{name}</p>
            <p className="text-sm text-gray-500 truncate">{email}</p>
          </div>
          <button
            onClick={handleSignOut}
            className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}