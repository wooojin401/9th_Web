import { useState } from "react";

export const usePagination = (initialPage = 1) =>{
    const [page,setPage] = useState(initialPage);

    const goToPage = (pageNum: number) =>{
        if(pageNum < 1) return;
        setPage(pageNum);
    };

    const nextPage = () => setPage((prev) => prev + 1);
    const prevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

    return {page,goToPage,nextPage,prevPage};
}