import useForm from "../hooks/useForm.ts";
import { type UserSigninformation, validateSignin } from "../utils/validate.ts";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();

  const { getInputProps, errors, touched, values } =
    useForm<UserSigninformation>({
      initialValue: {
        email: "",
        password: "",
      },
      validate: validateSignin
    });

  const handleSubmit = () => {
    console.log(values);
  };

  const isDisabled =
    Object.values(errors || {}).some((error) => error.length > 0) ||
    Object.values(values).some((value) => value === "");

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      <div className="flex items-center justify-center w-[300px] gap-3">
        <button
          onClick={handleGoBack}
          className="text-2xl text-white hover:text-gray-400 transition"
        >
          ←
        </button>
        <h2 className="text-xl font-semibold text-white">로그인</h2>
      </div>
      
      <div className="flex flex-col gap-3">
        <input
          {...getInputProps("email")}
          name="email"
          className={`border border-[#ccc] w-[300px] p-[10px] focus:border-[#807bff] rounded-sm 
          ${errors?.email && touched?.email ? "border-red-500 bg-red-200" : "border-gray-300"}`}
          type={"email"}
          placeholder={"이메일"}
        />
        {errors?.email && touched?.email && (
          <div className="text-red-500 text-sm">{errors.email}</div>
        )}
        <input
          {...getInputProps("password")}
          name="password"
          className={`border border-[#ccc] w-[300px] p-[10px] focus:border-[#807bff] rounded-sm 
          ${ errors?.password && touched?.password ? "border-red-500 bg-red-200" : "border-gray-300" }`}
          type={"password"}
          placeholder={"비밀번호"}
        />
        {errors?.password && touched?.password && (
          <div className="text-red-500 text-sm">{errors.password}</div>
        )}

        <button
          type="button"
          onClick={handleSubmit}
          disabled={isDisabled}
          className="w-full bg-blue-600 text-white py-3 rounded-md text-lg fond-medium hover:bg-blue-700 transition-colors cursor-pointer disabled:bg-gray-300"
        >
          로그인
        </button>
        
      </div>
    </div>
  );
};

export default LoginPage;