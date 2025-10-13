import { postSignin } from "../apis/auth";
import { LOCAL_STORAGE_KEY } from "../constants/key";
import useForm from "../hooks/useForm";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { type UserSigninInformatin, validateSignin } from "../utils/validate";
import MovePage from "./MovePage";

const LoginPage = () => {
  const { setItem } = useLocalStorage(LOCAL_STORAGE_KEY.accessToken);
  const { values, error, touch, getInputProps } = useForm<UserSigninInformatin>(
    {
      initialValue: { email: "", password: "" },
      validate: validateSignin,
    }
  );

  const handleSubmit = async () => {
    try {
      const response = await postSignin(values);
      setItem(response.data.accessToken);
    } catch (error: any) {
      alert(error?.message);
    }
  };

  const isDisabled =
    Object.values(error || {}).some((error) => error.length > 0) ||
    Object.values(values).some((values) => values === "");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <div className="flex flex-col gap-3">
        <div className="flex items-center mb-5">
          <div>
            <MovePage />
          </div>

          <div className="flex-1 text-center font-semibold text-xl text-white">
            로그인
          </div>

          <div className="flex-none w-6"></div>
        </div>

        <input
          {...getInputProps("email")}
          className={`border border-[#ccc] w-[300px] p-2 rounded-sm focus:border-[#807bff]
            ${
              error?.email && touch?.email
                ? "border-red-500 bg-red-200"
                : "border-gray-300"
            }`}
          type={"email"}
          placeholder="이메일"
        />

        {error?.email && touch?.email && (
          <div className="text-red-500 text-sm">{error.email}</div>
        )}

        <input
          {...getInputProps("password")}
          className={`border border-[#ccc] w-[300px] p-2 rounded-sm focus:border-[#807bff]
            ${
              error?.password && touch?.password
                ? "border-red-500 bg-red-200"
                : "border-gray-300"
            }`}
          type={"password"}
          placeholder="비밀번호"
        />

        {error?.password && touch?.password && (
          <div className="text-red-500 text-sm">{error.password}</div>
        )}
        <button
          type={"button"}
          onClick={handleSubmit}
          disabled={isDisabled}
          className="w-full bg-blue-600 text-white py-3 
          rounded-md text-lg font-medium transition-colors hover:bg-blue-700 cursor-pointer
          disabled:bg-gray-300"
        >
          로그인
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
