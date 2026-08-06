import React from 'react';
import { FanfictionData } from '../types';

interface SidebarProps {
  data: FanfictionData;
}

export function Sidebar({ data }: SidebarProps) {
  const details = [
    { label: 'Status', value: data.status },
    { label: 'Rating', value: data.rating },
    { label: 'Published', value: data.publishedDate },
    { label: 'Updated', value: data.updatedDate },
    { label: 'Chapters', value: data.chapters.length },
    { label: 'Word Count', value: data.wordCount.toLocaleString() },
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
        <h3 className="text-white font-semibold mb-4 text-lg">Fandoms</h3>
        <div className="flex flex-wrap gap-2">
          {data.fandoms.map((fandom, idx) => (
            <span key={idx} className="text-sm px-2 py-1 bg-white/5 rounded-md text-zinc-300 border border-white/10 hover:border-violet-500/50 cursor-pointer transition-colors">
              {fandom}
            </span>
          ))}
        </div>
      </div>
      
      <div className="bg-zinc-900/50 border border-white/5 rounded-xl p-5 backdrop-blur-sm">
        <h3 className="text-white font-semibold mb-4 text-lg">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {data.tags.map((tag, idx) => (
            <span key={idx} className="text-sm text-violet-400 hover:text-violet-300 cursor-pointer transition-colors underline decoration-violet-500/30 underline-offset-2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
