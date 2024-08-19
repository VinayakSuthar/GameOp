"use client";
import Link from "next/link";
import React from "react";
import SearchBar from "./searchBar";
import MobileSearch from "./mobileSearch";
import { usePathname } from "next/navigation";
import { cn } from "@/utils";

const navLinks = [
  { href: "/library", text: "Library" },
  { href: "#", text: "Profile" },
];

export default function Nav() {
  const path = usePathname();

  return (
    <nav className="flex items-center gap-x-2 sm:gap-x-5 w-full py-5 sm:py-10 text-sm">
      <Link href="/" className="logo">
        GameOp
      </Link>
      <div className="flex-1 flex justify-end sm:justify-center">
        <SearchBar className="w-3/4 lg:w-2/3 hidden sm:block" />
        <MobileSearch />
      </div>

      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className={cn({
            "border-b-2 border-blue-500": path === link.href,
          })}
        >
          {link.text}
        </Link>
      ))}
    </nav>
  );
}
