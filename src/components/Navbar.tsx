import React from 'react';
import { Search, User, Menu, Bell, BookOpen } from 'lucide-react';
import { motion } from 'motion/react';

export function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-zinc-950/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="flex items-center gap-6">
        <button className="p-2 text-zinc-400 hover:text-white transition-colors lg:hidden">
          <Menu className="w-5 h-5" />
        </button>
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white hidden sm:block">StillDoll</span>
        </div>
        
        <div className="hidden lg:flex items-center gap-1 ml-4">
          {['Home', 'Stories', 'Characters', 'Updates'].map((item) => (
            <button key={item} className="px-4 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-white/5 rounded-md transition-all">
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
          <input 
            type="text" 
            placeholder="Search stories..." 
            className="w-64 bg-zinc-900 border border-zinc-800 rounded-full py-1.5 pl-9 pr-4 text-sm text-zinc-200 focus:outline-none focus:border-violet-500/50 focus:ring-1 focus:ring-violet-500/50 placeholder:text-zinc-600 transition-all"
          />
        </div>
        <button className="p-2 text-zinc-400 hover:text-white transition-colors md:hidden">
          <Search className="w-5 h-5" />
        </button>
        <button className="p-2 text-zinc-400 hover:text-white transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-violet-500 rounded-full border border-zinc-950"></span>
        </button>
        <button className="w-8 h-8 rounded-full bg-zinc-800 flex items-center justify-center border border-zinc-700 hover:border-zinc-500 transition-colors">
          <User className="w-4 h-4 text-zinc-400" />
        </button>
      </div>
    </motion.nav>
  );
}
