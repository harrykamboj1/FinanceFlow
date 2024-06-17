"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const LandingPage = () => {
  const router = useRouter();
  return (
    <div className="">
      <div className="bg-gradient-to-b from-blue-700 to-blue-500 flex items-center justify-between px-5 py-5  shadow-sm fixed w-full">
        <div className="flex items-center justify-center">
          <Image src="/logo.svg" alt="Logo" height={10} width={40} />
          <p className="text-white font-semibold pl-2 text-2xl">FinanceFlow</p>
        </div>
        <div className="px-2 space-x-2">
          <Button
            className="hover:bg-white/90"
            variant="customColor"
            onClick={() => {
              router.push("/");
            }}
          >
            Dashboard
          </Button>
        </div>
      </div>
      {/* HERO SECTION */}
      <section className="bg-gray-50 flex items-center justify-center flex-col">
        <div className=" flex-1 smx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-xl text-center">
            <h1 className="text-3xl font-extrabold sm:text-5xl">
              Manage Your Expense{" "}
              <strong className="font-extrabold text-4xl pt-2 text-blue-700 sm:block">
                Control Your Money{" "}
              </strong>
            </h1>

            <p className="mt-4 sm:text-xl/relaxed">
              FinanceFlow is your ultimate tool for effortless financial
              management. Designed to simplify tracking your expenses and
              managing your budget.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                className="block w-full rounded bg-gradient-to-b from-blue-700 to-blue-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-800 focus:outline-none focus:ring  sm:w-auto"
                href="/"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-2 flex items-center justify-center flex-col">
          <Image
            src={"/dashboard.png"}
            height={500}
            width={1000}
            alt="dashboard"
            className="rounded-xl border-2"
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
