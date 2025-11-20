import React from 'react';

export const Header: React.FC<{ title: string }> = ({ title }) => (
  <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-gray-200 px-4 h-14 flex items-center justify-center">
    <h1 className="text-lg font-bold text-gray-800 tracking-tight">{title}</h1>
  </header>
);