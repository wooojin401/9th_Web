// src/pages/SignupPage.tsx
import { useState } from "react";
import SignupEmail from "../components/signup/SignupEmail";
import SignupPassword from "../components/signup/SignupPassword";
import SignupProfile from "../components/signup/SignupProfile";
import "../styles/SignupPage.css";

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  return (
    <div className="signup-container">
      {step === 1 && <SignupEmail onNext={nextStep} setEmail={setEmail} />}
      {step === 2 && (
        <SignupPassword
          email={email}
          onNext={nextStep}
          onPrev={prevStep}
          setPassword={setPassword}
        />
      )}
      {step === 3 && (
        <SignupProfile email={email} password={password} onPrev={prevStep} />
      )}
    </div>
  );
}
