import React, { useEffect, useState } from 'react';
import { fetchAnimeData } from './api/anilist';
import { AnimeData } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Sidebar } from './components/Sidebar';
import { Tabs } from './components/Tabs';
import { Loader2 } from 'lucide-react';

export default function App() {
  const [anime, setAnime] = useState<AnimeData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // The AniList ID from the prompt URL (My Dress-Up Darling)
  const ANIME_ID = 132405; 

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchAnimeData(ANIME_ID);
        setAnime(data);
      } catch (err) {
        setError('Failed to fetch anime data');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-zinc-950 flex flex-col items-center justify-center text-white">
        <Loader2 className="w-12 h-12 text-indigo-500 animate-spin mb-4" />
        <p className="text-zinc-400 font-medium">Loading anime data...</p>
      </div>
    );
  }

  if (error || !anime) {
    return (
      <div className="min-h-screen bg-zinc-950 flex items-center justify-center text-white">
        <p className="text-red-400 font-medium">{error || 'Data not found'}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-200 font-sans selection:bg-indigo-500/30 selection:text-white">
      <Navbar />
      
      <main>
        <Hero anime={anime} />
        
        <div className="container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row gap-10">
            <Sidebar anime={anime} />
            <Tabs anime={anime} />
          </div>
        </div>
      </main>

      <footer className="border-t border-white/5 py-10 mt-10">
        <div className="container mx-auto px-6 text-center text-zinc-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Anime Info Explorer. Data provided by AniList.</p>
        </div>
      </footer>
    </div>
  );
}
