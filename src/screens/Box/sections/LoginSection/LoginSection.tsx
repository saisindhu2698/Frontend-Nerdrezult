import { EyeIcon } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Checkbox } from "../../../../components/ui/checkbox";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";

interface LoginSectionProps {
  onSignUp: () => void;
  onLogin: () => void;
}

export const LoginSection = ({ onSignUp, onLogin }: LoginSectionProps): JSX.Element => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="w-full max-w-[476px] bg-white">
      <Card className="w-full h-full bg-[#f8f7ff] border-0 rounded-none">
        <CardContent className="p-4 md:p-6 flex flex-col items-center">
          <div className="w-full flex flex-col items-center mt-10 md:mt-20 mb-8 md:mb-16">
            <h1 className="font-black text-4xl md:text-5xl [font-family:'Inter',Helvetica] [background:linear-gradient(90deg,rgba(42,34,56,1)_100%,rgba(67,24,209,1)_0%)] [-webkit-background-clip:text] bg-clip-text text-transparent leading-[72px]">
              NERDREZULT
            </h1>
            <p className="font-normal text-base md:text-lg text-black text-center [font-family:'Inter',Helvetica] leading-[27px] mt-4 md:mt-6">
              Your gateway to technical excellence
            </p>
          </div>

          <form onSubmit={handleSubmit} className="w-full flex flex-col items-start">
            <h2 className="[font-family:'Inter',Helvetica] font-bold text-[#2a2238] text-2xl md:text-[32px] leading-[48px]">
              Welcome back
            </h2>

            <p className="[font-family:'Inter',Helvetica] font-normal text-black text-base leading-6 mt-6 md:mt-8 mb-8 md:mb-10">
              Please enter your details to sign in to your account
            </p>

            <div className="w-full space-y-4 md:space-y-6">
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="[font-family:'Inter',Helvetica] font-medium text-[#2a2238] text-sm leading-[21px]"
                >
                  Email address
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-[50px] bg-white [font-family:'Inter',Helvetica] font-normal text-[#999999] text-base leading-normal"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label
                  htmlFor="password"
                  className="[font-family:'Inter',Helvetica] font-medium text-[#2a2238] text-sm leading-[21px]"
                >
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="h-[50px] bg-white [font-family:'Inter',Helvetica] font-normal text-[#999999] text-base leading-normal"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute w-5 h-5 top-1/2 right-3 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                  >
                    <EyeIcon />
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full h-12 bg-[#4318d1] hover:bg-[#3a14b8] [font-family:'Inter',Helvetica] font-medium text-white text-base">
                Sign in
              </Button>

              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="remember"
                    className="rounded-sm border-[#666666]"
                  />
                  <Label
                    htmlFor="remember"
                    className="[font-family:'Inter',Helvetica] font-normal text-[#2a2238] text-sm leading-[21px]"
                  >
                    Remember me
                  </Label>
                </div>
                <button
                  type="button"
                  className="[font-family:'Inter',Helvetica] font-normal text-[#4318d1] text-sm leading-[21px]"
                >
                  Forgot password?
                </button>
              </div>

              <div className="text-center mt-4">
                <span className="[font-family:'Inter',Helvetica] font-normal text-[#2a2238] text-sm">
                  Don't have an account?{" "}
                </span>
                <button
                  type="button"
                  onClick={onSignUp}
                  className="[font-family:'Inter',Helvetica] font-normal text-[#4318d1] text-sm"
                >
                  Sign up
                </button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};