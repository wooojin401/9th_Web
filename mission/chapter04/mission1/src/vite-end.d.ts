interface ImportMetaEnv{
    readonly VITE_TMDB_KEY:string;
}

interface ImportMeta{
    readonly env:VITE_TMDB_KEY;
}

interface ImportMetaEnv {
    readonly VITE_TMDB_TOKEN: string;
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }