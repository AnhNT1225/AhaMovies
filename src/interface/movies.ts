import { ICollection } from "./collection";
import { IGeneralItem, IProductionCompany, IProductionCountry, ISpokenLanguage } from "./general";

export interface IMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}


export interface IMovieListResponse {
    page: number;
    results: IMovie[],
    total_pages: number;
    total_results: number;
    dates?: {
      maximum: string;
      minimun: string;
    }
}

export interface IMovieDetail {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: ICollection;
  budget: number;
  genres: IGenre[];
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: IProductionCompany[];
  production_countries: IProductionCountry[];
  release_date: string;
  revenue: string;
  runtime: number;
  spoken_languages: ISpokenLanguage[];
  status: string;
  tagline: string;
  title?: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IGenre {
  id: number;
  name: string;
}



