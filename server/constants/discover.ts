import { ANIME_KEYWORD_ID } from '@server/api/themoviedb/constants';
import type DiscoverSlider from '@server/entity/DiscoverSlider';
import type { DiscoverMediaSettings } from '@server/lib/settings';

export enum DiscoverSliderType {
  RECENTLY_ADDED = 1,
  RECENT_REQUESTS,
  PLEX_WATCHLIST,
  TRENDING,
  POPULAR_MOVIES,
  MOVIE_GENRES,
  UPCOMING_MOVIES,
  STUDIOS,
  POPULAR_TV,
  TV_GENRES,
  UPCOMING_TV,
  NETWORKS,
  TMDB_MOVIE_KEYWORD,
  TMDB_MOVIE_GENRE,
  TMDB_TV_KEYWORD,
  TMDB_TV_GENRE,
  TMDB_SEARCH,
  TMDB_STUDIO,
  TMDB_NETWORK,
  TMDB_MOVIE_STREAMING_SERVICES,
  TMDB_TV_STREAMING_SERVICES,
  POPULAR_ANIME_SERIES,
  POPULAR_ANIME_MOVIES,
  UPCOMING_ANIME_SERIES,
  UPCOMING_ANIME_MOVIES,
}

export const isDiscoverSliderVisible = (
  slider: Partial<DiscoverSlider>,
  mediaTypes: DiscoverMediaSettings
): boolean => {
  switch (slider.type) {
    case DiscoverSliderType.POPULAR_ANIME_SERIES:
    case DiscoverSliderType.POPULAR_ANIME_MOVIES:
    case DiscoverSliderType.UPCOMING_ANIME_SERIES:
    case DiscoverSliderType.UPCOMING_ANIME_MOVIES:
      return mediaTypes.anime;
    case DiscoverSliderType.POPULAR_MOVIES:
    case DiscoverSliderType.MOVIE_GENRES:
    case DiscoverSliderType.UPCOMING_MOVIES:
    case DiscoverSliderType.STUDIOS:
    case DiscoverSliderType.TMDB_MOVIE_GENRE:
    case DiscoverSliderType.TMDB_STUDIO:
    case DiscoverSliderType.TMDB_MOVIE_STREAMING_SERVICES:
      return mediaTypes.movie;
    case DiscoverSliderType.POPULAR_TV:
    case DiscoverSliderType.TV_GENRES:
    case DiscoverSliderType.UPCOMING_TV:
    case DiscoverSliderType.NETWORKS:
    case DiscoverSliderType.TMDB_TV_GENRE:
    case DiscoverSliderType.TMDB_NETWORK:
    case DiscoverSliderType.TMDB_TV_STREAMING_SERVICES:
      return mediaTypes.tv;
    case DiscoverSliderType.TMDB_MOVIE_KEYWORD:
      return Boolean(
        mediaTypes.movie ||
        (mediaTypes.anime &&
          slider.data?.split(',').includes(ANIME_KEYWORD_ID.toString()))
      );
    case DiscoverSliderType.TMDB_TV_KEYWORD:
      return Boolean(
        mediaTypes.tv ||
        (mediaTypes.anime &&
          slider.data?.split(',').includes(ANIME_KEYWORD_ID.toString()))
      );
    default:
      return mediaTypes.movie || mediaTypes.tv;
  }
};

export const defaultSliders: Partial<DiscoverSlider>[] = [
  {
    type: DiscoverSliderType.RECENTLY_ADDED,
    enabled: true,
    isBuiltIn: true,
    order: 0,
  },
  {
    type: DiscoverSliderType.RECENT_REQUESTS,
    enabled: true,
    isBuiltIn: true,
    order: 1,
  },
  {
    type: DiscoverSliderType.PLEX_WATCHLIST,
    enabled: true,
    isBuiltIn: true,
    order: 2,
  },
  {
    type: DiscoverSliderType.TRENDING,
    enabled: true,
    isBuiltIn: true,
    order: 3,
  },
  {
    type: DiscoverSliderType.POPULAR_MOVIES,
    enabled: true,
    isBuiltIn: true,
    order: 4,
  },
  {
    type: DiscoverSliderType.MOVIE_GENRES,
    enabled: true,
    isBuiltIn: true,
    order: 5,
  },
  {
    type: DiscoverSliderType.UPCOMING_MOVIES,
    enabled: true,
    isBuiltIn: true,
    order: 6,
  },
  {
    type: DiscoverSliderType.STUDIOS,
    enabled: true,
    isBuiltIn: true,
    order: 7,
  },
  {
    type: DiscoverSliderType.POPULAR_TV,
    enabled: true,
    isBuiltIn: true,
    order: 8,
  },
  {
    type: DiscoverSliderType.TV_GENRES,
    enabled: true,
    isBuiltIn: true,
    order: 9,
  },
  {
    type: DiscoverSliderType.UPCOMING_TV,
    enabled: true,
    isBuiltIn: true,
    order: 10,
  },
  {
    type: DiscoverSliderType.NETWORKS,
    enabled: true,
    isBuiltIn: true,
    order: 11,
  },
  {
    type: DiscoverSliderType.POPULAR_ANIME_SERIES,
    enabled: true,
    isBuiltIn: true,
    order: 12,
  },
  {
    type: DiscoverSliderType.POPULAR_ANIME_MOVIES,
    enabled: true,
    isBuiltIn: true,
    order: 13,
  },
  {
    type: DiscoverSliderType.UPCOMING_ANIME_SERIES,
    enabled: true,
    isBuiltIn: true,
    order: 14,
  },
  {
    type: DiscoverSliderType.UPCOMING_ANIME_MOVIES,
    enabled: true,
    isBuiltIn: true,
    order: 15,
  },
];
