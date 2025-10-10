export interface MovieDetails {
    id: number;
    title: string;
    overview: string;
    poster_path: string | null;
    backdrop_path: string | null;
    release_date: string;
    runtime: number | null;
    vote_average: number;
    genres: { id: number; name: string }[];
  }
  
  export interface Credits {
    id: number;
    cast: Array<{
      id: number;
      name: string;
      character?: string;
      profile_path: string | null;
    }>;
    crew: Array<{
      id: number;
      name: string;
      job?: string;
      department?: string;
      profile_path: string | null;
    }>;
  }
  