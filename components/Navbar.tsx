import React from 'react';
import { Presentation, FolderOpen, Crown, Search } from 'lucide-react';
import Link from 'next/link';

interface NavbarProps {
  currentPath?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPath }) => {
  
  return (
    <nav className="h-16 border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto h-full px-6 flex items-center justify-between">
        {/* Logo Area */}
        <Link 
          href="/"
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-9 h-9 bg-indigo-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-200">
            <Presentation size={20} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-800">
            AI PPT <span className="text-indigo-600">Maker</span>
          </span>
        </Link>

        {/* Search Bar (Visual Only) */}
        <div className="hidden lg:flex flex-1 max-w-md mx-12">
           <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search for templates, topics, or styles..." 
                className="w-full h-10 pl-10 pr-4 bg-slate-100 rounded-lg text-sm text-slate-700 outline-none focus:ring-2 focus:ring-indigo-100 transition-all placeholder:text-slate-400"
              />
           </div>
        </div>

        {/* Links & Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600">
             <Link href="/#templates" className="hover:text-indigo-600 transition-colors">Explore</Link>
             <Link href="/#tools" className="hover:text-indigo-600 transition-colors">Tools</Link>
             <Link href="/premium" className="flex items-center gap-1.5 text-orange-500 hover:text-orange-600 transition-colors">
                <Crown size={16} fill="currentColor" />
                <span>Premium</span>
             </Link>
          </div>

          <div className="h-6 w-px bg-slate-200 hidden md:block"></div>

          <div className="flex items-center gap-3">
             <Link href="/login" className="hidden sm:flex text-slate-600 hover:bg-slate-50 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Log in
             </Link>
             <Link href="/signup" className="bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-lg text-sm font-medium transition-all shadow-md shadow-slate-200">
                Sign up
             </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};