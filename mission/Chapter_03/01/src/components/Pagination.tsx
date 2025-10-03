type PaginationProps = {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  };
  
  const Pagination = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
    return (
      <div className="flex items-center justify-center gap-4 my-6">
        {/* 이전 버튼 */}
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={`w-10 h-10 rounded-lg flex items-center justify-center 
            ${currentPage === 1 ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-300 text-white hover:bg-blue-400"}`}
        >
          &lt;
        </button>
  
        {/* 현재 페이지 */}
        <span className="text-lg font-medium">{currentPage} 페이지</span>
  
        {/* 다음 버튼 */}
        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={`w-10 h-10 rounded-lg flex items-center justify-center 
            ${currentPage === totalPages ? "bg-gray-300 text-gray-500 cursor-not-allowed" : "bg-blue-300 text-white hover:bg-blue-400"}`}
        >
          &gt;
        </button>
      </div>
    );
  };
  
  export default Pagination;

  