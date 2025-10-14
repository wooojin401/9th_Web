// src/components/signup/SignupPassword.tsx
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const passwordSchema = z
  .object({
    password: z.string().min(8, "비밀번호는 8자 이상이어야 합니다."),
    confirm: z.string(),
  })
  .refine((data) => data.password === data.confirm, {
    message: "비밀번호가 일치하지 않습니다.",
    path: ["confirm"],
  });

export default function SignupPassword({
  email,
  onNext,
  onPrev,
  setPassword,
}: {
  email: string;
  onNext: () => void;
  onPrev: () => void;
  setPassword: (password: string) => void;
}) {
  const [show, setShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<{ password: string; confirm: string }>({
    resolver: zodResolver(passwordSchema),
    mode: "onChange",
  });

  const onSubmit = (data: { password: string; confirm: string }) => {
    setPassword(data.password);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
      <button onClick={onPrev} className="back-btn">←</button>
      <h2>회원가입</h2>
      <p>{email}</p>

      <div className="password-field">
        <input
          {...register("password")}
          type={show ? "text" : "password"}
          placeholder="비밀번호를 입력해주세요!"
          className="input"
        />
        <button type="button" onClick={() => setShow(!show)}>
          {show ? "볼래" : "말래"}
        </button>
      </div>
      {errors.password && <p className="error">{errors.password.message}</p>}

      <input
        {...register("confirm")}
        type="password"
        placeholder="비밀번호를 다시 입력해주세요!"
        className="input"
      />
      {errors.confirm && <p className="error">{errors.confirm.message}</p>}

      <button type="submit" disabled={!isValid} className="next-btn">
        다음
      </button>
    </form>
  );
}
