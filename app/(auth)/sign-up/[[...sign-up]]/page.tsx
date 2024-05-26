import { ClerkLoaded, ClerkLoading, SignUp } from "@clerk/nextjs";
import { Loader2 } from "lucide-react";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2">
      <div className="h-full lg:flex flex-col items-center justify-center px-4">
        <div className="text-center space-y-4 pt-16">
          <h1 className="font-bold text-3xl text-[#2E2A47]">Welcome Back</h1>
        </div>
        <p className="text-base text-[#7E8CA0]">
          Log in or Create account to get back to your dashboard
        </p>
        <div className="mt-8 flex justify-center items-center">
          <ClerkLoaded>
            <SignUp path="/sign-up" />
          </ClerkLoaded>
          <ClerkLoading>
            <Loader2 className="animate-spin text-muted-foreground" />
          </ClerkLoading>
        </div>
      </div>
      <div className="h-full hidden bg-blue-600 lg:flex items-center justify-center">
        <Image src={"/logo.svg"} alt="Logo" height={90} width={90} />
        <p className="pl-5 text-white text-4xl">FinanceFlow</p>
      </div>
    </div>
  );
}
