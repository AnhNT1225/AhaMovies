export interface ICredit {
  cast: ICast[];
  crew: ICrew[];
  id: number;
}

export interface ICast {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  character: string;
  credit_id: string;
  order: number;
  profile_path: string;
  cast_id: number;
}

export interface ICrew {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
  credit_id: string;
  department: string;
  job: string;
}
