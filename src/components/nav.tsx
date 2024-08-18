import { MenuRounded, Search } from "@mui/icons-material";
import { IconButton, TextField } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="flex items-center gap-x-2 sm:gap-x-5 w-full py-5 sm:py-10 text-sm">
      <Link href="/" className="logo">
        Gamezop
      </Link>
      <div className="flex-1 flex justify-end sm:justify-center">
        <div className="relative w-3/4 lg:w-2/3 hidden sm:block">
          <Search className="absolute text-xl top-1/2 left-[20px] -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search"
            className="rounded-lg pl-[60px] pr-5 py-3 bg-white/10 w-full"
          />
        </div>
        <IconButton className="flex sm:hidden">
          <Search className="text-white" />
        </IconButton>
      </div>
      <Link href="/library">Library</Link>
      <Link href="/profile">Profile</Link>
    </nav>
  );
}
