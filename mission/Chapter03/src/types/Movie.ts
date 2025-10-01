export type Movie = {
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
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type MovieRes = {
    page: number;
    results: Movie[];
    total_pages: number;
    total_results: number;
};

export type TMDBGenre = {
    id: number;
    name: string;
}

export type TMDBCollection = {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
}

export type TMDBProductionCompany = {
    id: number;
    name: string;
    logo_path: string | null;
    origin_country: string;
}

export type TMDBProductionCountry = {
    iso_3166_1: string;
    name: string;
}

export type TMDBSpokenLanguage = {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export type MovieDetails = {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: TMDBCollection | null;
    budget: number;
    genres: TMDBGenre[];
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    production_companies: TMDBProductionCompany[];
    production_countries: TMDBProductionCountry[];
    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages: TMDBSpokenLanguage[];
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

export type Credits = {
    id: number;            
    cast: TMDBCast[];
    crew: TMDBCrew[];
}

export type TMDBCast = {
    adult: boolean;       
    gender: number | null;
    id: number;           
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;  
    profile_path: string | null;
    cast_id: number;       
    character: string;
    credit_id: string;
    order: number;        
}

export type TMDBCrew = {
    adult: boolean;       
    gender: number | null; 
    id: number;          
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;   
    profile_path: string | null;
    credit_id: string;
    department: string;
    job: string;
}