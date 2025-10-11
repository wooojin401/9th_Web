export default function LoadingSpinner() {
    return (
      <div role="status" aria-live="polite" aria-busy="true">
        <div
          className="w-12 h-12 animate-spin rounded-full border-[6px] border-t-transparent border-gray-300"
        />
        <span className="sr-only">로딩 중 ...</span>
      </div>
    );
  }