export interface Character {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Chapter {
  id: string;
  title: string;
  number: number;
  publishedAt: string;
  wordCount: number;
}

export interface FanfictionData {
  id: string;
  title: string;
  author: string;
  coverImage: string;
  bannerImage: string;
  description: string;
  status: string;
  publishedDate: string;
  updatedDate: string;
  rating: string;
  fandoms: string[];
  tags: string[];
  wordCount: number;
  chapters: Chapter[];
  characters: Character[];
  themeColor: string;
  kudos: number;
  bookmarks: number;
  hits: number;
}
