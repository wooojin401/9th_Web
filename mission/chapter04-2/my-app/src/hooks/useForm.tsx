// src/hooks/useForm.ts
import { useState, useEffect } from "react";

interface FormValues {
  email: string;
  password: string;
}

export default function useForm(initialValues: FormValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isValid, setIsValid] = useState(false);

  const validate = (name: string, value: string) => {
    switch (name) {
      case "email":
        if (!/\S+@\S+\.\S+/.test(value)) return "유효하지 않은 이메일 형식입니다.";
        break;
      case "password":
        if (value.length < 6) return "비밀번호는 최소 6자 이상이어야 합니다.";
        break;
      default:
        return "";
    }
    return "";
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: validate(name, value) });
  };

  useEffect(() => {
    const valid =
      values.email &&
      values.password &&
      Object.values(errors).every((err) => !err);
    setIsValid(valid);
  }, [values, errors]);

  return { values, errors, handleChange, isValid };
}
