// src/components/signup/SignupEmail.tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const emailSchema = z.object({
  email: z.string().email("올바른 이메일 형식을 입력해주세요."),
});

export default function SignupEmail({
  onNext,
  setEmail,
}: {
  onNext: () => void;
  setEmail: (email: string) => void;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<{ email: string }>({
    resolver: zodResolver(emailSchema),
    mode: "onChange",
  });

  const onSubmit = (data: { email: string }) => {
    setEmail(data.email);
    onNext();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
      <h2>회원가입</h2>
      <input
        {...register("email")}
        placeholder="이메일을 입력해주세요!"
        className="input"
      />
      {errors.email && <p className="error">{errors.email.message}</p>}
      <button type="submit" disabled={!isValid} className="next-btn">
        다음
      </button>
    </form>
  );
}
