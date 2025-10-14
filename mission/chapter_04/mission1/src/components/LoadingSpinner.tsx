import type { ReactElement } from "react";

export const LoadingSpinner = (): ReactElement => {
  return (
    <div
      className="size-12 animate-spin rounded-full border-6 border-t-transparent border-[#ea99e1]"
      role="status"
    >
      <span className="sr-only">로딩중...</span>
    </div>
  );
};
