export const Spinner = () => {
    return (
        <div className="size-12 animate-spin rounded-full border-5 border-t-transparent border-pink-500" role = "status">
            <span className="sr-only"> 로딩 중... </span>
        </div>
    )
}