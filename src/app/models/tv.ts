import { Genre } from './movie';

export interface tv {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  number_of_episodes: number;
  production_companies: prodCompany[];
  name: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  revenue: number;
  episode_run_time: number;
  status: string;
  genres: Genre[];
}
export interface prodCompany {
  name: string;
}
export interface tvDto {
  page: number;
  results: tv[];
  total_results: number;
  total_pages: number;
}
export interface TvVideos {
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
}
export interface TvVideoDto {
  results: TvVideos[];
  id: number;
}
export interface TvImages {
  backdrops: {
    file_path: string;
    height: number;
    vote_average: number;
    vote_count: number;
    width: number;
  }[];
}
export interface TvCredits {
  cast: {
    name: string;
    profile_path: string;
  }[];
}
