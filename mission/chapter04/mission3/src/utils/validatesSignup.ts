export type SignupValues = {
    email: string;
    password: string;
    confirm: string;
    nickname: string;
  };
  
  export type SignupStep = 1 | 2 | 3;
  
  export function makeSignupValidator(step: SignupStep) {
    return (values: SignupValues): Record<keyof SignupValues, string> => {
      const errors: Record<keyof SignupValues, string> = {
        email: "",
        password: "",
        confirm: "",
        nickname: "",
      };
  
      const email = (values.email ?? "").trim();
      const pw = values.password ?? "";
      const cf = values.confirm ?? "";
      const nick = (values.nickname ?? "").trim();
  
      if (step === 1) {
        const emailOk =
          /^[0-9a-zA-Z]([._-]?[0-9a-zA-Z])*@[0-9a-zA-Z]([._-]?[0-9a-zA-Z])*\.[a-zA-Z]{2,}$/i.test(
            email
          );
        if (!emailOk) errors.email = "올바른 이메일 형식을 입력해주세요.";
      }
  
      if (step === 2) {
        if (pw.length < 6) errors.password = "비밀번호는 6자 이상이어야 합니다.";
        if (!errors.password && cf !== pw) errors.confirm = "비밀번호가 일치하지 않습니다.";
      }
  
      if (step === 3) {
        if (!nick) errors.nickname = "닉네임을 입력해주세요.";
        else if (nick.length > 20) errors.nickname = "닉네임은 20자 이하로 입력해주세요.";
      }
  
      return errors;
    };
  }
  