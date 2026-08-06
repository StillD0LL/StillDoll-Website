import React, { useEffect, useState } from 'react';
import { FanfictionData } from './types';
import { fanfictionData } from './data';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Sidebar } from './components/Sidebar';
import { Tabs } from './components/Tabs';
import { Loader2 } from 'lucide-react';

export default function App() {
  const [data, setData] = useState<FanfictionData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for effect
    const timer = setTimeout(() => {
      setData(fanfictionData);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-white">
        <Loader2 className="w-12 h-12 text-violet-500 animate-spin mb-4" />
        <p className="text-zinc-400 font-medium">Loading story...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">
        <p className="text-red-400 font-medium">Story not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-violet-500/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero data={data} />
        
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            <Sidebar data={data} />
            <Tabs data={data} />
          </div>
        </div>
      </main>

      <footer className="border-t border-white/5 py-10 mt-10">
        <div className="container mx-auto px-6 text-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} StillDoll. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
