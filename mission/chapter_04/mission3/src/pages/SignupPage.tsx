import { z } from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { postSignup } from "../apis/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const schema = z
  .object({
    email: z.string().email({ message: "올바른 이메일 형식이 아닙니다." }),
    password: z
      .string()
      .min(8, { message: "비밀번호는 8자 이상이어야 합니다." })
      .max(20, { message: "비밀번호는 20자 이하여야 합니다." }),
    passwordCheck: z
      .string()
      .min(8, { message: "비밀번호는 8자 이상이어야 합니다." })
      .max(20, { message: "비밀번호는 20자 이하여야 합니다." }),
    name: z.string().min(1, { message: "이름을 입력해주세요." }),
  })
  .refine((data) => data.password === data.passwordCheck, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["passwordCheck"],
  });

type FormFileds = z.infer<typeof schema>;

const SignupPage = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    getValues,
    formState: { errors, isSubmitting, isValid },
  } = useForm<FormFileds>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      passwordCheck: "",
    },
    resolver: zodResolver(schema),
    mode: "onBlur",
  });

  const stepFields: { [key: number]: Array<keyof FormFileds> } = {
    1: ["email"],
    2: ["password", "passwordCheck"],
    3: ["name"],
  };

  const goToNextStep = async () => {
    // 현재 단계의 필드만 유효성 검사 실행

    const fieldsToValidate = stepFields[step];
    const isStepValid = await trigger(fieldsToValidate);

    if (isStepValid) {
      setStep(step + 1); // 다음 단계로 이동
    }
  };

  const onSubmit: SubmitHandler<FormFileds> = async (data) => {
    const { passwordCheck, ...rest } = data;
    try {
      const response = await postSignup(rest);
      // 회원가입 성공 후 로직 추가: 홈 화면으로 이동
      if (response.status) {
        alert("회원가입이 성공적으로 완료되었습니다.");
        navigate("/");
      } else {
        alert(response.message || "회원가입 실패");
      }
    } catch (error: any) {
      alert(error.message || "서버 오류가 발생했습니다.");
    }
  };

  // 2단계 버튼 활성화 조건: 비밀번호 필드의 에러가 없고, 두 값이 일치하며 비어있지 않을 때
  const isPasswordStepValid =
    !errors.password &&
    !errors.passwordCheck &&
    getValues("password").length > 0 &&
    getValues("passwordCheck").length > 0 &&
    getValues("password") === getValues("passwordCheck");

  return (
    <div className="flex flex-col items-center justify-center h-full gap-4">
      {/* form 태그로 감싸고 onSubmit 핸들러 연결 */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-3">
        {/* 헤더 영역: 뒤로가기 버튼과 제목 (UI 변경 최소화) */}
        <div className="relative flex justify-center items-center mb-4">
          {step > 1 && ( // 첫 단계가 아닐 때만 뒤로가기 버튼 표시
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="absolute left-0 text-gray-600 cursor-pointer hover:text-gray-900 font-bold text-2xl"
            >
              &lt;
            </button>
          )}
          <h2 className="text-xl font-bold">회원가입 ({step}/3)</h2>
        </div>

        {/* 상단 이메일 정보 표시 */}
        {step > 1 && (
          <div className="bg-gray-100 p-2 rounded text-sm text-center">
            이메일: **{getValues("email")}**
          </div>
        )}

        {/* --- 1단계: 이메일 입력 및 다음 버튼 --- */}
        {step === 1 && (
          <>
            <input
              {...register("email")}
              name="email"
              className={`border border-[#ccc] w-[300px] p-[10px] focus:border-[#807bff] rounded-sm 
                        ${
                          errors?.email
                            ? "border-red-500 bg-red-200"
                            : "border-gray-300"
                        }`}
              type={"email"}
              placeholder={"이메일을 입력해주세요"}
            />
            {errors.email && (
              <div className={"text-red-500 text-sm"}>
                {errors.email.message}
              </div>
            )}

            <button
              type="button" // 제출이 아니므로 type="button" 사용
              onClick={goToNextStep}
              // 활성화 조건: 이메일 유효성 검사 통과 및 값이 있을 때
              disabled={!!errors.email || !getValues("email")}
              className="w-full bg-pink-600 text-white py-3 rounded-md text-lg fond-medium hover:bg-pink-700 transition-colors cursor-pointer disabled:bg-gray-300 mt-2"
            >
              다음
            </button>
          </>
        )}

        {/* --- 2단계: 비밀번호 설정 및 다음 버튼 --- */}
        {step === 2 && (
          <>
            {/* 비밀번호 입력 */}
            <div className="relative">
              <input
                {...register("password")}
                name="password"
                className={`border border-[#ccc] w-[300px] p-[10px] focus:border-[#807bff] rounded-sm 
                            ${
                              errors?.password
                                ? "border-red-500 bg-red-200"
                                : "border-gray-300"
                            }`}
                type={showPassword ? "text" : "password"} // 가시성 토글
                placeholder={"비밀번호를 입력해주세요"}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 text-lg"
              >
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>
            {errors.password && (
              <div className={"text-red-500 text-sm"}>
                {errors.password.message}
              </div>
            )}

            {/* 비밀번호 확인 */}
            <input
              {...register("passwordCheck")}
              name="passwordCheck"
              className={`border border-[#ccc] w-[300px] p-[10px] focus:border-[#807bff] rounded-sm 
                        ${
                          errors?.passwordCheck
                            ? "border-red-500 bg-red-200"
                            : "border-gray-300"
                        }`}
              type={"password"}
              placeholder={"비밀번호 확인"}
            />
            {errors.passwordCheck && (
              <div className={"text-red-500 text-sm"}>
                {errors.passwordCheck.message}
              </div>
            )}

            <button
              type="button"
              onClick={goToNextStep}
              // 활성화 조건: 2단계 필드가 모두 유효하고 일치할 때만
              disabled={!isPasswordStepValid || isSubmitting}
              className="w-full bg-pink-600 text-white py-3 rounded-md text-lg fond-medium hover:bg-pink-700 transition-colors cursor-pointer disabled:bg-gray-300 mt-2"
            >
              다음
            </button>
          </>
        )}

        {/* --- 3단계: 닉네임 입력 및 회원가입 완료 버튼 --- */}
        {step === 3 && (
          <>
            <input
              {...register("name")}
              name="name"
              className={`border border-[#ccc] w-[300px] p-[10px] focus:border-[#807bff] rounded-sm 
                        ${
                          errors?.name
                            ? "border-red-500 bg-red-200"
                            : "border-gray-300"
                        }`}
              type={"text"} // type="name" 대신 "text" 사용
              placeholder={"이름(닉네임)을 입력해주세요"}
            />
            {errors.name && (
              <div className="text-red-500 text-sm">{errors.name.message}</div>
            )}

            {/* 프로필 이미지 UI (선택) */}
            <div className="mt-4 p-4 border border-dashed border-gray-400 text-center text-gray-500 rounded-md">
              📸 프로필 이미지 (선택)
            </div>

            <button
              disabled={!!errors.name || !getValues("name") || isSubmitting}
              type="submit"
              // handleSubmit(onSubmit)이 form에 연결되어 있으므로 onClick은 생략해도 됩니다.
              // 만약 form 태그를 사용하지 않는다면 onClick={handleSubmit(onSubmit)}을 사용합니다.
              className="w-full bg-pink-600 text-white py-3 rounded-md text-lg fond-medium hover:bg-pink-700 transition-colors cursor-pointer disabled:bg-gray-300 mt-2"
            >
              회원가입 완료
            </button>
          </>
        )}
      </form>
    </div>
  );
};

export default SignupPage;
