import React from 'react';
import { Menu, Bell, User, LogOut } from 'lucide-react';

export default function Navbar({ role }: { role: string }) {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md hover:bg-gray-100 lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <div className="ml-4 flex items-center">
              <span className="text-xl font-bold text-indigo-600">RealEstateHub</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100 relative">
              <Bell className="h-6 w-6" />
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-400 ring-2 ring-white" />
            </button>
            
            <div className="flex items-center space-x-2">
              <img
                className="h-8 w-8 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="User avatar"
              />
              <span className="hidden md:block text-sm font-medium text-gray-700">
                {role === 'admin' ? 'Administrator' : role === 'manager' ? 'Property Manager' : 'Tenant'}
              </span>
            </div>
            
            <button className="p-2 rounded-full hover:bg-gray-100">
              <LogOut className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}