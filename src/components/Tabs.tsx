import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AnimeData } from '../types';
import { PlayCircle } from 'lucide-react';

interface TabsProps {
  anime: AnimeData;
}

export function Tabs({ anime }: TabsProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'characters' | 'episodes'>('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'characters', label: 'Characters' },
    { id: 'episodes', label: 'Episodes' },
  ] as const;

  return (
    <div className="flex-1 min-w-0 flex flex-col gap-8">
      {/* Tab Navigation */}
      <div className="flex items-center gap-6 border-b border-white/10 overflow-x-auto no-scrollbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative py-4 text-sm font-medium transition-colors whitespace-nowrap ${
              activeTab === tab.id ? 'text-white' : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-indigo-500 rounded-t-full"
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
          {activeTab === 'overview' && <OverviewTab anime={anime} />}
          {activeTab === 'characters' && <CharactersTab anime={anime} />}
          {activeTab === 'episodes' && <EpisodesTab anime={anime} />}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function OverviewTab({ anime }: { anime: AnimeData }) {
  return (
    <div className="flex flex-col gap-10">
      {/* Characters Preview */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Characters</h2>
          <button className="text-sm font-medium text-indigo-400 hover:text-indigo-300">View All</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {anime.characters.edges.slice(0, 6).map((char) => (
            <div key={char.node.id} className="group cursor-pointer">
              <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3 ring-1 ring-white/10">
                <img 
                  src={char.node.image.large} 
                  alt={char.node.name.userPreferred} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <p className="text-sm font-medium text-white line-clamp-1">{char.node.name.userPreferred}</p>
              <p className="text-xs text-zinc-400 capitalize">{char.role.toLowerCase()}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Recommendations Preview */}
      {anime.recommendations.edges.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-white mb-6">Recommendations</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {anime.recommendations.edges.slice(0, 6).map((rec, i) => {
              const recAnime = rec.node.mediaRecommendation;
              if (!recAnime) return null;
              return (
                <div key={i} className="group cursor-pointer">
                  <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3 ring-1 ring-white/10">
                    <img 
                      src={recAnime.coverImage.large} 
                      alt={recAnime.title.userPreferred} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <p className="text-sm font-medium text-white line-clamp-2 leading-tight">
                    {recAnime.title.userPreferred}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

function CharactersTab({ anime }: { anime: AnimeData }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {anime.characters.edges.map((char) => (
        <div key={char.node.id} className="group cursor-pointer">
          <div className="relative aspect-[2/3] rounded-xl overflow-hidden mb-3 ring-1 ring-white/10">
            <img 
              src={char.node.image.large} 
              alt={char.node.name.userPreferred} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <p className="text-sm font-medium text-white line-clamp-1">{char.node.name.userPreferred}</p>
          <p className="text-xs text-zinc-400 capitalize">{char.role.toLowerCase()}</p>
        </div>
      ))}
    </div>
  );
}

function EpisodesTab({ anime }: { anime: AnimeData }) {
  if (!anime.streamingEpisodes || anime.streamingEpisodes.length === 0) {
    return (
      <div className="text-center py-20 text-zinc-400">
        <p>No streaming episodes found for this series.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
      {anime.streamingEpisodes.map((ep, i) => (
        <a 
          key={i} 
          href={ep.url} 
          target="_blank" 
          rel="noreferrer"
          className="group block bg-zinc-900/40 rounded-xl overflow-hidden border border-white/5 hover:border-indigo-500/50 transition-colors"
        >
          <div className="relative aspect-video overflow-hidden">
            <img 
              src={ep.thumbnail} 
              alt={ep.title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <PlayCircle className="w-10 h-10 text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all drop-shadow-lg" />
            </div>
            <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs font-medium text-white">
              {ep.site}
            </div>
          </div>
          <div className="p-4">
            <h4 className="text-sm font-medium text-white line-clamp-2 leading-snug group-hover:text-indigo-400 transition-colors">
              {ep.title}
            </h4>
          </div>
        </a>
      ))}
    </div>
  );
}
