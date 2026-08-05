import React from 'react';
import { AnimeData } from '../types';

interface SidebarProps {
  anime: AnimeData;
}

export function Sidebar({ anime }: SidebarProps) {
  const details = [
    { label: 'Format', value: anime.format },
    { label: 'Episodes', value: anime.episodes },
    { label: 'Episode Duration', value: `${anime.duration} mins` },
    { label: 'Status', value: anime.status },
    { label: 'Start Date', value: `${anime.startDate.month}/${anime.startDate.day}/${anime.startDate.year}` },
    { label: 'Season', value: `${anime.season} ${anime.seasonYear}` },
    { label: 'Average Score', value: `${anime.meanScore}%` },
    { label: 'Studios', value: anime.studios.edges.map(e => e.node.name).join(', ') },
    { label: 'Source', value: anime.source },
  ];

  return (
    <div className="w-full lg:w-72 shrink-0 flex flex-col gap-6">
      <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-5 backdrop-blur-sm">
        <h3 className="text-white font-semibold mb-4 text-lg">Details</h3>
        <ul className="space-y-4">
          {details.map((detail, idx) => detail.value && (
            <li key={idx} className="flex flex-col gap-1 text-sm">
              <span className="text-zinc-500 font-medium">{detail.label}</span>
              <span className="text-zinc-200">{detail.value}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-5 backdrop-blur-sm">
        <h3 className="text-white font-semibold mb-4 text-lg">Alternative Titles</h3>
        <ul className="space-y-4">
          <li className="flex flex-col gap-1 text-sm">
            <span className="text-zinc-500 font-medium">Romaji</span>
            <span className="text-zinc-200">{anime.title.romaji}</span>
          </li>
          <li className="flex flex-col gap-1 text-sm">
            <span className="text-zinc-500 font-medium">English</span>
            <span className="text-zinc-200">{anime.title.english}</span>
          </li>
          <li className="flex flex-col gap-1 text-sm">
            <span className="text-zinc-500 font-medium">Native</span>
            <span className="text-zinc-200">{anime.title.native}</span>
          </li>
          {anime.synonyms.length > 0 && (
            <li className="flex flex-col gap-1 text-sm">
              <span className="text-zinc-500 font-medium">Synonyms</span>
              <span className="text-zinc-200 leading-relaxed">{anime.synonyms.join(', ')}</span>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
