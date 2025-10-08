import { useNavigate } from "react-router-dom"

const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col gap-5 justify-center items-center h-dvh">
            <h1 className="text-3xl text-pink-500 font-bold"> 해당 페이지를 찾지 못했습니다 </h1>
            <button onClick={ () => navigate('/') } className="bg-pink-300 text-white w-[150px] h-[50px] rounded-xl font-bold hover:bg-pink-500">
                홈으로 이동하기 
            </button>
        </div>
    )
}

export default ErrorPage
