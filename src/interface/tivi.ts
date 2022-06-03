import {
  IGeneralItem,
  IProductionCompany,
  IProductionCountry,
  ISpokenLanguage,
} from "./general";
import { IGenre } from "./movies";

export interface ITivi {
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  first_air_date: string;
  origin_country: string[];
  original_language: string;
  overview: string;
  popularity: number;
  poster_path: string;
  name?: string;
  original_name: string;
  vote_average: number;
  vote_count: number;
}

export interface ITiviListResponse {
  page: number;
  results: ITivi[];
  total_pages: number;
  total_results: number;
  dates?: {
    maximum: string;
    minimun: string;
  };
}

export interface ITiviDetail {
  backdrop_path: string;
  createdBy: {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string;
  };
  episode_run_time: number[];
  first_air_date: string;
  genres: IGenre[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    air_date: string;
    episode_number: number;
    id: number;
    name: string;
    overview: string;
    production_code: string;
    season_number: number;
    still_path: string;
    vote_average: number;
    vote_count: number;
  };
  name: string;
  next_episode_to_air: null;
  networks: {
    name: string;
    id: number;
    logo_path: string;
    origin_country: string;
  };
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  seasons: ISeason[];
  spoken_languages: ISpokenLanguage[];
  status: string;
  tagline: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export interface ISeason {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}
