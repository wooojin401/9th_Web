interface MovePageProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function MovePage({ page, setPage }: MovePageProps) {
  return (
    <div className="flex items-center justify-center gap-10 mt-5">
      <button
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page === 1}
        className="px-4 py-2 rounded-full bg-black/20 text-white hover:bg-black/40 font-semibold shadow-md transition-all duration-200
        cursor-pointer disabled:cursor-not-allowed"
      >
        {"<"}
      </button>

      <span className="text-white">{page} 페이지</span>

      <button
        onClick={() => setPage((prev) => prev + 1)}
        className="px-4 py-2 rounded-full bg-black/20 text-white hover:bg-black/40 font-semibold shadow-md transition-all duration-200
        cursor-pointer"
      >
        {">"}
      </button>
    </div>
  );
}
