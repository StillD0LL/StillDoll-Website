import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FanfictionData } from '../types';
import { BookOpen } from 'lucide-react';

interface TabsProps {
  data: FanfictionData;
}

export function Tabs({ data }: TabsProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'characters' | 'chapters'>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'characters', label: 'Characters' },
    { id: 'chapters', label: 'Chapters' },
  ] as const;

  return (
    <div className="flex-1 min-w-0 flex flex-col gap-8">
      {/* Tab Navigation */}
      <div className="flex items-center gap-6 border-b border-white/10 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as 'overview' | 'characters' | 'chapters')}
            className={`relative py-4 text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === tab.id ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-violet-500 rounded-t-full"
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          {activeTab === 'overview' && <OverviewTab data={data} />}
          {activeTab === 'characters' && <CharactersTab data={data} />}
          {activeTab === 'chapters' && <ChaptersTab data={data} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function OverviewTab({ data }: { data: FanfictionData }) {
  return (
    <div className="flex flex-col gap-10">
      {/* Characters Preview */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Characters</h2>
          <button className="text-sm font-medium text-violet-400 hover:text-violet-300">View All</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {data.characters.slice(0, 6).map((char) => (
            <div key={char.id} className="group cursor-pointer">
              <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3 ring-1 ring-white/10">
                <img 
                  src={char.image} 
                  alt={char.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm font-medium text-white line-clamp-1">{char.name}</p>
              <p className="text-xs text-zinc-400 capitalize">{char.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chapters Preview */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Latest Chapters</h2>
          <button className="text-sm font-medium text-violet-400 hover:text-violet-300">View All</button>
        </div>
        <div className="flex flex-col gap-3">
          {data.chapters.slice(-3).reverse().map((chapter) => (
            <div key={chapter.id} className="bg-zinc-900/50 border border-white/5 p-4 rounded-xl hover:bg-zinc-800/50 transition-colors cursor-pointer group">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                    <BookOpen className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium group-hover:text-violet-300 transition-colors">
                      Chapter {chapter.number}: {chapter.title}
                    </h4>
                    <p className="text-xs text-zinc-400">{new Date(chapter.publishedAt).toLocaleDateString()}</p>
                  </div>
                </div>
                <div className="text-sm text-zinc-500">
                  {chapter.wordCount.toLocaleString()} words
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function CharactersTab({ data }: { data: FanfictionData }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {data.characters.map((char) => (
        <div key={char.id} className="group cursor-pointer">
          <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3 ring-1 ring-white/10">
            <img 
              src={char.image} 
              alt={char.name} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <p className="text-sm font-medium text-white line-clamp-1">{char.name}</p>
          <p className="text-xs text-zinc-400 capitalize">{char.role}</p>
        </div>
      ))}
    </div>
  );
}

function ChaptersTab({ data }: { data: FanfictionData }) {
  if (!data.chapters || data.chapters.length === 0) {
    return (
      <div className="text-center py-20 text-zinc-400">
        <p>No chapters available yet.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {data.chapters.map((chapter) => (
        <div key={chapter.id} className="bg-zinc-900/50 border border-white/5 p-4 rounded-xl hover:bg-zinc-800/50 transition-colors cursor-pointer group">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center group-hover:bg-violet-500/20 transition-colors">
                <BookOpen className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h4 className="text-white font-medium group-hover:text-violet-300 transition-colors text-lg">
                  Chapter {chapter.number}: {chapter.title}
                </h4>
                <p className="text-sm text-zinc-400">Published on {new Date(chapter.publishedAt).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="text-sm font-medium text-zinc-500 bg-black/20 px-3 py-1 rounded-full">
              {chapter.wordCount.toLocaleString()} words
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
