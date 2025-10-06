//기존 영화 목록 관련 타입
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
};

export type MovieResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

//영화 상세 페이지 미션을 위한 타입

//배우 및 제작진 공통 타입

export interface CastMember {
  id: number;
  name: string;
  // 배우의 역할
  character?: string;
  // 제작진의 역할 (Director, Writer 등)
  job?: string;
  profile_path: string | null;
}

//영화 상세정보타입
export interface MovieDetails {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  vote_average: number;
  // 상세 정보에만 있는 필드
  runtime: number | null;
  poster_path: string | null;
  backdrop_path: string | null;
  genres: { id: number; name: string }[]; // 장르 객체 배열
}

//영화 크레딧(출연진/제작진) 타입
export interface Credits {
  id: number;
  cast: CastMember[]; // 배우 목록
  crew: CastMember[]; // 제작진 목록
}
