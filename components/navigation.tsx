"use client";

import { NavButton } from "@/components/nav-button";
import { useMedia } from "react-use";
import { Button } from "./ui/button";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu } from "lucide-react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const routes = [
  {
    href: "/",
    label: "Overview",
  },
  {
    href: "/transactions",
    label: "Transactions",
  },
  {
    href: "/accounts",
    label: "Accounts",
  },
  {
    href: "/categories",
    label: "Categories",
  },
  // {
  //   href: "/settings",
  //   label: "Settings",
  // },
];

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const router = useRouter();
  const isMobile = useMedia("(max-width:1024px)", false);
  const pathName = usePathname();

  const onClick = (href: string) => {
    router.push(href);
    setIsDrawerOpen(false);
  };
  if (isMobile) {
    return (
      <Sheet open={isDrawerOpen} onOpenChange={setIsDrawerOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => (
              <Button
                className="w-full justify-start"
                key={route.href}
                variant={route.label === pathName ? "secondary" : "ghost"}
                onClick={() => onClick(route.href)}
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }

  return (
    <nav className="hidden lg:flex items-center gap-x-2 overflow-x-auto">
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          isActive={pathName === route.href}
        />
      ))}
    </nav>
  );
};

export default Navigation;
