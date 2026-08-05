export interface AnimeData {
  id: number;
  title: {
    romaji: string;
    english: string;
    native: string;
  };
  coverImage: {
    extraLarge: string;
    large: string;
    color: string;
  };
  bannerImage: string;
  startDate: { year: number; month: number; day: number };
  endDate: { year: number; month: number; day: number };
  description: string;
  season: string;
  seasonYear: number;
  type: string;
  format: string;
  status: string;
  episodes: number;
  duration: number;
  genres: string[];
  synonyms: string[];
  source: string;
  meanScore: number;
  popularity: number;
  studios: {
    edges: {
      isMain: boolean;
      node: {
        id: number;
        name: string;
      };
    }[];
  };
  characters: {
    edges: {
      role: string;
      node: {
        id: number;
        name: {
          userPreferred: string;
        };
        image: {
          large: string;
        };
      };
    }[];
  };
  streamingEpisodes: {
    title: string;
    thumbnail: string;
    url: string;
    site: string;
  }[];
  recommendations: {
    edges: {
      node: {
        mediaRecommendation: {
          id: number;
          title: {
            userPreferred: string;
          };
          coverImage: {
            large: string;
          };
        } | null;
      };
    }[];
  };
}
