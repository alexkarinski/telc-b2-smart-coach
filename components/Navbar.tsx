import React from 'react';
import { BookOpen, CheckCircle, User, Activity } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'dashboard', label: 'Lernen', icon: BookOpen },
    { id: 'practice', label: 'Training', icon: Activity },
    { id: 'profile', label: 'Profil', icon: User },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe pt-2 px-4 shadow-lg z-50 h-20 flex justify-around items-start">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeTab === item.id;
        return (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`flex flex-col items-center w-16 transition-all duration-200 ${
              isActive ? 'text-primary -translate-y-1' : 'text-gray-400'
            }`}
          >
            <div className={`p-1.5 rounded-xl ${isActive ? 'bg-primary/10' : ''}`}>
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
            </div>
            <span className="text-xs font-medium mt-1">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
};

export default Navbar;