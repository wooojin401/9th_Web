// src/pages/LoginPage.tsx
import { useNavigate } from "react-router-dom";
import useForms from "../hooks/useForms";
import { validateSignIn, type UserSignInformation } from "../utils/validate";

export default function LoginPage() {
  const nav = useNavigate();

  const { values, errors, touched, getInputProps } = useForms<UserSignInformation>({
    initialValue: { email: "", password: "" },
    validate: validateSignIn,
  });

  const hasError = Object.values(errors).some((e) => e);
  const isEmpty = Object.values(values).some((v) => v === "");
  const canSubmit = !hasError && !isEmpty;

  return (
    <div className="min-h-screen bg-black text-white flex items-start justify-center">
      <div className="w-full max-w-sm mx-auto mt-16 px-4">
        <div className="flex items-center gap-3 mb-6">
          <button
            type="button"
            onClick={() => nav(-1)}
            className="rounded px-2 py-1 hover:bg-zinc-800"
            aria-label="뒤로가기"
          >
            &lt;
          </button>
          <h1 className="text-xl font-semibold">로그인</h1>
        </div>

        <div className="rounded-xl border border-zinc-700/70 bg-zinc-900/40 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          <button
            type="button"
            className="w-full border border-zinc-600 rounded-lg py-2 flex items-center justify-center gap-2 hover:bg-zinc-800/40 transition"
          >
            <img
              src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
              alt=""
              className="h-5"
            />
            구글 로그인
          </button>

          <div className="flex items-center gap-3 my-4">
            <span className="flex-1 h-px bg-zinc-700" />
            <span className="text-zinc-400 text-sm">OR</span>
            <span className="flex-1 h-px bg-zinc-700" />
          </div>

          <input
            {...getInputProps("email")}
            type="email"
            placeholder="이메일"
            className={`w-full bg-transparent border rounded-lg px-3 py-2 outline-none
            ${errors.email && touched.email ? "border-red-500" : "border-zinc-600 focus:border-zinc-300"}`}
            autoComplete="email"
          />
          {errors.email && touched.email && (
            <p className="mt-2 text-sm text-red-500">{errors.email}</p>
          )}

          <input
            {...getInputProps("password")}
            type="password"
            placeholder="비밀번호"
            className={`mt-4 w-full bg-transparent border rounded-lg px-3 py-2 outline-none
            ${errors.password && touched.password ? "border-red-500" : "border-zinc-600 focus:border-zinc-300"}`}
            autoComplete="current-password"
          />
          {errors.password && touched.password && (
            <p className="mt-2 text-sm text-red-500">{errors.password}</p>
          )}

          <button
            type="button"
            disabled={!canSubmit}
            className="mt-4 w-full rounded-lg py-2 bg-zinc-700 hover:bg-zinc-600 transition
                       disabled:bg-zinc-800 disabled:text-zinc-400"
          >
            로그인
          </button>
        </div>
      </div>
    </div>
  );
}
