import { Search } from "@mui/icons-material";
import Link from "next/link";
import React from "react";
import SearchBar from "./searchBar";
import MobileSearch from "./mobileSearch";

export default function Nav() {
  return (
    <nav className="flex items-center gap-x-2 sm:gap-x-5 w-full py-5 sm:py-10 text-sm">
      <Link href="/" className="logo">
        GameOp
      </Link>
      <div className="flex-1 flex justify-end sm:justify-center">
        <SearchBar className="w-3/4 lg:w-2/3 hidden sm:block" />
        <MobileSearch />
      </div>
      <Link href="/library">Library</Link>
      <Link href="/profile">Profile</Link>
    </nav>
  );
}
