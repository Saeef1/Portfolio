"use client";
import Buttons from "./Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const routes = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Skills",
    path: "/#skills",
  },
  {
    name: "Projects",
    path: "/#projects",
  },
  {
    name: "Contact",
    path: "/#contact",
  },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="font-bold ml-4 text-xl">
            Muhammad Saeef
          </Link>
        </div>

        {/* Mobile menu button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-5 w-5" />
        </Button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center mr-4 gap-6">
          {routes.map((route) => (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === route.path
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {route.name}
            </Link>
          ))}
          <Buttons white href="" className="text-black rounded-full bg-white">
            Resume
          </Buttons>
        </nav>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-background border-b border-border md:hidden">
            <nav className="container py-4 flex flex-col gap-2">
              {routes.map((route) => (
                <Link
                  key={route.path}
                  href={route.path}
                  className={cn(
                    "px-4 py-2 text-sm font-medium transition-colors hover:text-primary",
                    pathname === route.path
                      ? "text-foreground"
                      : "text-muted-foreground"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {route.name}
                </Link>
              ))}
              <Button variant="default" size="sm" className="mx-4 mt-2">
                Resume
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}