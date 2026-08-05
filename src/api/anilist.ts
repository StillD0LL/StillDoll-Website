import { AnimeData } from "../types";

const query = `
query ($id: Int) {
  Media (id: $id, type: ANIME) {
    id
    title {
      romaji
      english
      native
    }
    coverImage {
      extraLarge
      large
      color
    }
    bannerImage
    startDate { year month day }
    endDate { year month day }
    description
    season
    seasonYear
    type
    format
    status(version: 2)
    episodes
    duration
    genres
    synonyms
    source
    meanScore
    popularity
    studios(isMain: true) {
      edges {
        isMain
        node {
          id
          name
        }
      }
    }
    characters(page: 1, perPage: 12, sort: [ROLE, RELEVANCE, ID]) {
      edges {
        role
        node {
          id
          name {
            userPreferred
          }
          image {
            large
          }
        }
      }
    }
    streamingEpisodes {
      title
      thumbnail
      url
      site
    }
    recommendations(page: 1, perPage: 7, sort: [RATING_DESC, ID]) {
      edges {
        node {
          mediaRecommendation {
            id
            title {
              userPreferred
            }
            coverImage {
              large
            }
          }
        }
      }
    }
  }
}
`;

export async function fetchAnimeData(id: number): Promise<AnimeData> {
  const response = await fetch("https://graphql.anilist.co", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      query,
      variables: { id },
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch anime data");
  }

  const json = await response.json();
  return json.data.Media;
}
