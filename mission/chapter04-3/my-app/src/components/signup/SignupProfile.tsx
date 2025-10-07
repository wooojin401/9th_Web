// src/components/signup/SignupProfile.tsx
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const profileSchema = z.object({
  nickname: z.string().min(2, "닉네임은 2자 이상이어야 합니다."),
});

export default function SignupProfile({
  email,
  password,
  onPrev,
}: {
  email: string;
  password: string;
  onPrev: () => void;
}) {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<{ nickname: string }>({
    resolver: zodResolver(profileSchema),
    mode: "onChange",
  });

  const onSubmit = (data: { nickname: string }) => {
    console.log("회원가입 완료", { email, password, nickname: data.nickname });
    // 실제 API 연결 → 토큰 로컬스토리지 저장
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="signup-form">
      <button onClick={onPrev} className="back-btn">←</button>
      <h2>회원가입</h2>

      <div className="profile-circle" />
      <input
        {...register("nickname")}
        placeholder="닉네임을 입력해주세요!"
        className="input"
      />
      {errors.nickname && <p className="error">{errors.nickname.message}</p>}

      <button type="submit" disabled={!isValid} className="next-btn">
        회원가입 완료
      </button>
    </form>
  );
}
