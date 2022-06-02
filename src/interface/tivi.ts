export interface ITivi{
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    first_air_date: string;
    origin_country: string[];
    original_language: string;
    overview: string;
    popularity: number;
    poster_path: string;
    name:string;
    original_name: string;
    vote_average: number;
    vote_count: number;
}

export interface ITiviListResponse {
    page: number;
    results: ITivi[],
    total_pages: number;
    total_results: number;
    dates?: {
      maximum: string;
      minimun: string;
    }
}