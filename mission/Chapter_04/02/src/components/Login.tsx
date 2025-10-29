import { useNavigate } from "react-router-dom"
import { useLogin } from "../hooks/useLogin";

const Login = () => { 
    const navigate = useNavigate()
    const {
        email,
        password,
        emailError,
        passwordError,
        handleEmailChange,
        handlePasswordChange,
        isValid,
      } = useLogin();

      const handleSubmit = () => {
        if (isValid) {
          alert("로그인 성공");
        }
      };

      
    return (
        <div className="text-white px-6 py-4 shadow-md  items-center gap-4 flex flex-col">
            <div className="flex items-center justify-between w-full max-w-xs mb-6">
                <button onClick={() => navigate(-1)}className="text-2xl cursor-pointer">&lt;</button>  
                <h1 className="text-lg font-semibold">로그인</h1>
                <div className="w-6" /> 
            </div>

             <button className="w-full max-w-xs border border-white rounded-xl py-3 flex items-center justify-center gap-2 hover:scale-105 transition-transform duration-200 cursor-pointer">
                <img src="https://www.svgrepo.com/show/355037/google.svg" alt="Google" className="w-5 h-5" />
                <span>구글 로그인</span>
            </button>

            <div className="flex items-center w-full max-w-xs my-5">
                <div className="flex-1 h-px bg-white/40"></div>
                <span className="px-3 text-sm text-gray-300">OR</span>
                <div className="flex-1 h-px bg-white/40"></div>
            </div>

             <div className="flex flex-col gap-3 w-full max-w-xs">
                <input
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="이메일을 입력해주세요!"
                    className={`p-3 rounded-xl border ${
                        emailError ? "border-red-500" : "border-white/40"
                      } bg-zinc-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 ${
                        emailError ? "focus:ring-red-500" : "focus:ring-white/60"
                      }`}
                />
                 {emailError && (
                        <p className="text-red-500 text-xs mt-1 ml-1">
                        {emailError}
                        </p>
                    )}
              
                <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="비밀번호를 입력해주세요!"
                className={`p-3 rounded-xl border ${
                    passwordError ? "border-red-500" : "border-white/40"
                  } bg-zinc-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 ${
                    passwordError ? "focus:ring-red-500" : "focus:ring-white/60"
                  }`}
                />
                 {passwordError && (
                    <p className="text-red-500 text-xs mt-1 ml-1">{passwordError}</p>
                )}
                <button  
                onClick={handleSubmit} 
                disabled={!isValid} 
                className={`py-3 rounded-xl mt-2 transition-colors cursor-pointer w-full ${
                    isValid
                      ? "bg-pink-500 hover:bg-pink-600 text-white"
                      : "bg-gray-500 cursor-not-allowed text-gray-300"
                  }`}
                >
                로그인
                </button>
            </div>
        </div>
    )
}
export default Login