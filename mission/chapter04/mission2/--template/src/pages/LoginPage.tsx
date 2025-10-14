import { postSignin } from "../apis/auth";
import { LOCAL_STORAGE_KEY } from "../constans/key";
import useForm from "../hooks/useForm";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { validateSignin, type UserSignInformation } from "../utils/validate";

const LoginPage = () => {
    const {}=useLocalStorage(LOCAL_STORAGE_KEY.accessToken)
  const { values, errors, touched, getInputProps } = useForm<UserSignInformation>({
    initialValue: { email: "", password: "" },
    validate: validateSignin,
  });

  const handleSubmit = async () => {
    console.log(values);
    
    try{
        const response=await postSignin(values);
        localStorage.setItem("accessToken",response.data.accessToken);
    }catch(error){
        alert(error?.message);
    }
  };
  const isDisabled:boolean=
  Object.values(errors||{}).some((error:string)=>error.length>0)|| //오류가있으면 true
  Object.values(values).some((value:string)=>value===""); //입력값이 비어있으면 true
  
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <div className="flex flex-col gap-3">
        <input
          {...getInputProps("email")}
          type="email"
          className={`border border-[#ccc] w-[300px] p-[10px] focus:border-[#807bff] rounded-sm ${
            errors?.email && touched?.email ? "border-red-500 bg-red-200" : "border-gray-300"
          }`}
          placeholder="이메일"
        />
        {errors?.email && touched?.email && (
          <div className="text-red-500 text-sm">{errors.email}</div>
        )}

        <input
          {...getInputProps("password")}
          
          type="password"
          className={`border border-[#ccc] w-[300px] p-[10px] focus:border-[#807bff] rounded-sm ${
            errors?.password && touched?.password ? "border-red-500 bg-red-200" : "border-gray-300"
          }`}
          placeholder="비밀번호"
        />
        {errors?.password && touched?.password && (
          <div className="text-red-500 text-sm">{errors.password}</div>
          )}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isDisabled}
          className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition-colors cursor-pointer disabled:bg-gray-300"
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
