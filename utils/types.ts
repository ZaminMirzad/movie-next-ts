// A Movie Types
export interface IMovie {
  id: number;
  name: string;
  title: string;
  imdb_id: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  first_air_date: string;
  original_language: string;
  original_title: string;
  original_name: string;
  release_date: string;
  vote_average: number;
  media_type: string;
  vote_count: number;
  homepage: string;
  runtime: number;
  status: string;
  tagline: string;
  budget: number;
  genres: IGenre[];
  production_companies: ICompany[];
  production_countries: ICountry[];
  spoken_languages: ILanguage[];
  videos: {
    results: IVideo[];
  };
  belongs_to_collection: {};
}
export interface ILanguage {
  iso_639_1: string;
  name: string;
}
export interface ICountry {
  iso_3166_1: number;
  name: string;
}
export interface IGenre {
  id: number;
  name: string;
}
export interface ICompany {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}
export interface IVideo {
  id: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  type: string;
}

// Casts & Crews Types
export interface ICrew {
  id: number;
  job: string;
  name: string;
  gender: string;
  cast_id: number;
  character: string;
  credit_id: string;
  department: string;
  profile_path: string;
  original_name: string;
  known_for_department: string;
}
export interface ICast {
  id: number;
  name: string;
  order: number;
  gender: string;
  cast_id: number;
  credit_id: string;
  character: string;
  profile_path: string;
  original_name: string;
  known_for_department: string;
}

// A TV-Show Types
export interface ITv {
  id: number;
  name: string;
  title: string;
  imdb_id: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  first_air_date: string;
  original_language: string;
  original_title: string;
  original_name: string;
  release_date: string;
  vote_average: number;
  media_type: string;
  vote_count: number;
  homepage: string;
  runtime: number;
  tagline: string;
  status: string;
  budget: number;
  type: string;
  genres: IGenre[];
  videos: {
    results: IVideo[];
  };
  created_by: ICreatedBy[];
  episode_run_time: [number];
  in_production: boolean;
  languages: ILanguage[];
  last_air_date: string;
  last_episode_to_air: IEpisode;
  next_episode_to_air: IEpisode;
  networks: INetwork[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: [string];
  production_companies: ICompany[];
  production_countries: ICountry[];
  seasons: ISeason[];
}
export interface ISeason {
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  air_date: string;
  episode_count: number;
  spoken_languages: ILanguage[];
}
export interface ICreatedBy {
  id: number;
  name: string;
  gender: number;
  credit_id: string;
  profile_path: string;
}
export interface IEpisode {
  id: number;
  name: string;
  overview: string;
  production_code: string;
  season_number: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
}
export interface INetwork {
  id: number;
  name: string;
  logo_path: string;
  origin_country: string;
}

// Person Type
export interface IPerson {
  id: number;
  name: string;
  gender: number;
  imdb_id: string;
  birthday: string;
  deathday: string;
  homepage: string;
  biography: string;
  popularity: number;
  media_type: string;
  profile_path: string;
  place_of_birth: string;
  also_known_as: [string];
  known_for_department: string;
}
