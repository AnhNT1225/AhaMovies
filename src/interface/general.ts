export interface IGeneralItem {
  adult?: boolean;
  backdrop_path: string;
  genre_ids?: number[];
  id?: number;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  first_air_date?: string;
  origin_country?: string[];
  name?: string;
  original_name?: string;
  vote_average?: number;
  vote_count?: number;
}

export interface IProductionCompany {
  name: string;
  id: number;
  logo_path: string;
  origin_country: string;
}

export interface IProductionCountry {
  iso_3166_1: string;
  name: string;
}

export interface ISpokenLanguage {
  iso_639_1: string;
  name: string;
  english_name?: string;
}
