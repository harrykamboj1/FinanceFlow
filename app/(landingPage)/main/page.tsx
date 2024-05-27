"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();
  return (
    <div className="">
      <div className="bg-blue-700 flex items-center justify-between px-5 py-5  shadow-sm">
        <div className="flex items-center justify-center">
          <Image src="/logo.svg" alt="Logo" height={10} width={40} />
          <p className="text-white font-semibold pl-2 text-2xl">FinanceFlow</p>
        </div>
        <div className="px-2 space-x-2">
          <Button
            variant="customColor"
            onClick={() => {
              router.push("/");
            }}
          >
            Dashboard
          </Button>
          <Button
            onClick={() => {
              router.push("/sign-in");
            }}
            variant="customColor"
          >
            Get Started
          </Button>
        </div>
      </div>
      {/* HERO SECTION */}
      <div>Hero Section</div>
    </div>
  );
};

export default LandingPage;
