import { EyeIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";

interface SignupSectionProps {
  onSignIn: () => void;
  onSignUp: () => void;
}

export const SignupSection = ({ onSignIn, onSignUp }: SignupSectionProps): JSX.Element => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    password: false,
    confirmPassword: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password === formData.confirmPassword) {
      onSignUp();
    }
  };

  const togglePasswordVisibility = (field: "password" | "confirmPassword") => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  return (
    <Card className="w-full max-w-[476px] min-h-screen md:min-h-0 bg-white">
      <CardContent className="relative w-full h-full p-4 md:p-8 bg-[#f8f7ff]">
        <form onSubmit={handleSubmit} className="flex flex-col h-full">
          {/* Logo and tagline */}
          <div className="text-center mt-4 md:mt-[23px]">
            <h1 className="[font-family:'Inter',Helvetica] font-black text-4xl md:text-5xl leading-[72px] [background:linear-gradient(90deg,rgba(42,34,56,1)_100%,rgba(67,24,209,1)_0%)] [-webkit-background-clip:text] bg-clip-text [-webkit-text-fill-color:transparent] [text-fill-color:transparent] text-transparent">
              NERDREZULT
            </h1>
            <p className="[font-family:'Inter',Helvetica] font-normal text-black text-base md:text-lg text-center tracking-[0] leading-[27px] mt-4 md:mt-6">
              Your gateway to technical excellence
            </p>
          </div>

          {/* Form heading */}
          <div className="mt-8 md:mt-[47px]">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#2a2238] text-2xl md:text-[32px] tracking-[0] leading-[48px]">
              Create your account
            </h2>
            <p className="[font-family:'Inter',Helvetica] font-normal text-black text-base tracking-[0] leading-6 mt-4 md:mt-8">
              Please enter your details to create your account
            </p>
          </div>

          {/* Form fields */}
          <div className="mt-8 space-y-6 md:space-y-[53px]">
            {[
              { id: "fullName", label: "Full Name", type: "text" },
              { id: "email", label: "Email address", type: "email" },
              { id: "password", label: "Password", type: "password" },
              { id: "confirmPassword", label: "Confirm Password", type: "password" },
            ].map((field) => (
              <div key={field.id} className="space-y-2">
                <label
                  htmlFor={field.id}
                  className="block [font-family:'Inter',Helvetica] font-medium text-[#2a2238] text-sm tracking-[0] leading-[21px]"
                >
                  {field.label}
                </label>
                <div className="relative">
                  <Input
                    id={field.id}
                    name={field.id}
                    type={
                      field.type === "password"
                        ? showPassword[field.id as "password" | "confirmPassword"]
                          ? "text"
                          : "password"
                        : field.type
                    }
                    value={formData[field.id as keyof typeof formData]}
                    onChange={handleChange}
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                    className="w-full h-[50px] bg-white rounded-lg [font-family:'Inter',Helvetica] font-normal text-[#999999] text-base"
                    required
                  />
                  {field.type === "password" && (
                    <button
                      type="button"
                      onClick={() => togglePasswordVisibility(field.id as "password" | "confirmPassword")}
                      className="absolute w-5 h-5 top-[15px] right-[16px] text-gray-500"
                    >
                      <EyeIcon />
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Create account button */}
          <Button
            type="submit"
            className="w-full h-12 mt-8 md:mt-[53px] bg-[#4318d1] rounded-lg text-white [font-family:'Inter',Helvetica] font-medium text-base"
          >
            Create
          </Button>

          {/* Sign in link */}
          <div className="flex justify-center mt-8 md:mt-[60px]">
            <span className="[font-family:'Inter',Helvetica] font-normal text-[#2a2238] text-sm text-center tracking-[0] leading-[21px]">
              Already have an account?
            </span>
            <button
              type="button"
              onClick={onSignIn}
              className="[font-family:'Inter',Helvetica] font-normal text-[#4318d1] text-sm text-center tracking-[0] leading-[21px] ml-2"
            >
              Sign in
            </button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};