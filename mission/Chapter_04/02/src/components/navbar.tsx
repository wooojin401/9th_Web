import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-zinc-900 text-white px-6 py-4 shadow-md flex justify-between items-center">
      <p className="text-pink-500 text-xl ">돌려돌려LP판</p>
      <div className="flex space-x-6">
        <button onClick={()=>navigate("/login")} className="border bg-black rounded-sm pl-2 pr-2 p-1s border-black cursor-pointer hover:scale-105 text-sm">로그인</button>
        <button onClick={()=>navigate("/signup")} className="border bg-pink-500 border-pink-500 rounded-sm pl-2 pr-2 p-1 cursor-pointer hover:scale-105 text-sm">회원가입</button>
      </div>
    </nav>  
  );
};

export default Navbar;