import { FanfictionData } from "./types";

export const fanfictionData: FanfictionData = {
  id: "1",
  title: "Echoes of the Forgotten",
  author: "StillDoll",
  coverImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=600&auto=format&fit=crop", 
  bannerImage: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?q=80&w=2000&auto=format&fit=crop",
  description: "<p>In a world where memories can be extracted and sold, Elara discovers a hidden archive of forgotten truths. As she delves deeper, she realizes some memories were erased for a reason.</p><p>A tale of mystery, magic, and the price of knowing too much.</p>",
  status: "Ongoing",
  publishedDate: "2024-01-15",
  updatedDate: "2024-05-20",
  rating: "Mature",
  fandoms: ["Original Work", "Fantasy AU"],
  tags: ["Mystery", "Magic", "Slow Burn", "Angst with a Happy Ending"],
  wordCount: 85420,
  themeColor: "#8b5cf6",
  kudos: 12450,
  bookmarks: 3200,
  hits: 45600,
  chapters: [
    { id: "c1", number: 1, title: "The Memory Broker", publishedAt: "2024-01-15", wordCount: 4200 },
    { id: "c2", number: 2, title: "Fading Echoes", publishedAt: "2024-02-01", wordCount: 5100 },
    { id: "c3", number: 3, title: "The Archive", publishedAt: "2024-02-15", wordCount: 4800 },
    { id: "c4", number: 4, title: "Shadows in the Glass", publishedAt: "2024-03-05", wordCount: 6200 },
    { id: "c5", number: 5, title: "Unlocking the Past", publishedAt: "2024-04-10", wordCount: 5500 },
    { id: "c6", number: 6, title: "The Price of Truth", publishedAt: "2024-05-20", wordCount: 7100 },
  ],
  characters: [
    {
      id: "char1",
      name: "Elara Vance",
      role: "Protagonist",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "char2",
      name: "Kaelen Thorne",
      role: "Main Character",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "char3",
      name: "Sylas",
      role: "Antagonist",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    },
    {
      id: "char4",
      name: "Lyra",
      role: "Supporting",
      image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=400&auto=format&fit=crop",
    }
  ]
};
