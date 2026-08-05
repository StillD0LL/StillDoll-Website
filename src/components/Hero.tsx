import React from 'react';
import { AnimeData } from '../types';
import { Play, BookmarkPlus, Share2, Star, Heart } from 'lucide-react';
import { motion } from 'motion/react';
import DOMPurify from 'dompurify';

interface HeroProps {
  anime: AnimeData;
}

export function Hero({ anime }: HeroProps) {
  const cleanDescription = DOMPurify.sanitize(anime.description);
  const color = anime.coverImage.color || '#6366f1'; // fallback to indigo

  return (
    <div className="relative w-full min-h-[85vh] flex items-end pb-12 pt-32">
      {/* Banner Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-zinc-950/80 z-10" />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent z-20" 
        />
        <div 
          className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent z-20" 
        />
        <img 
          src={anime.bannerImage || anime.coverImage.extraLarge} 
          alt="Banner" 
          className="w-full h-full object-cover opacity-50 blur-[2px]"
        />
      </div>

      <div className="container mx-auto px-6 relative z-30 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-end">
        {/* Poster */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="shrink-0 w-48 md:w-64 lg:w-72 rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 relative group"
        >
          <img 
            src={anime.coverImage.extraLarge} 
            alt={anime.title.english || anime.title.romaji}
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
             <button className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
               <Play className="w-5 h-5 ml-1" fill="currentColor" />
             </button>
          </div>
        </motion.div>

        {/* Info */}
        <div className="flex-1 max-w-4xl pb-2 md:pb-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap gap-2 mb-4"
          >
            {anime.genres.map(genre => (
              <span 
                key={genre} 
                className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 backdrop-blur-md text-white/90 border border-white/5"
              >
                {genre}
              </span>
            ))}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-2 leading-tight tracking-tight"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            {anime.title.english || anime.title.romaji}
          </motion.h1>
          
          {anime.title.english && anime.title.romaji !== anime.title.english && (
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-zinc-400 font-medium mb-6"
            >
              {anime.title.romaji}
            </motion.p>
          )}

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-6 text-sm text-zinc-300 mb-8 font-medium"
          >
            <div className="flex items-center gap-1.5 text-yellow-500 bg-yellow-500/10 px-2 py-1 rounded-md">
              <Star className="w-4 h-4 fill-current" />
              <span>{anime.meanScore}%</span>
            </div>
            <div className="flex items-center gap-1.5 text-pink-500 bg-pink-500/10 px-2 py-1 rounded-md">
              <Heart className="w-4 h-4 fill-current" />
              <span>#{anime.popularity.toLocaleString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
              <span>{anime.format}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
              <span>{anime.episodes} Episodes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
              <span>{anime.status}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span>
              <span className="text-white/80 px-2 py-0.5 rounded bg-white/10">{anime.season} {anime.seasonYear}</span>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <button 
              className="flex items-center gap-2 px-8 py-3.5 rounded-full text-white font-bold transition-all hover:scale-105 shadow-[0_0_20px_rgba(var(--brand-color),0.3)]"
              style={{ backgroundColor: color }}
            >
              <Play className="w-5 h-5 fill-current" />
              Watch Now
            </button>
            <button className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium transition-all">
              <BookmarkPlus className="w-5 h-5" />
              Add to List
            </button>
            <button className="flex items-center gap-2 px-4 py-3.5 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-medium transition-all">
              <Share2 className="w-5 h-5" />
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-zinc-300 leading-relaxed max-w-3xl text-sm md:text-base line-clamp-4 hover:line-clamp-none transition-all duration-500 cursor-pointer"
            dangerouslySetInnerHTML={{ __html: cleanDescription }}
          />
        </div>
      </div>
    </div>
  );
}
