import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <nav className="flex items-center gap-x-5 w-full py-10 text-sm">
      <Link href="/" className="logo">
        Gamezop
      </Link>
      <div className="flex-1 flex justify-center">
        <input
          type="text"
          placeholder="Search"
          className="rounded-lg px-5 py-3 bg-white/10 w-3/4 lg:w-2/3"
        />
      </div>
      <div className="flex gap-x-7">
        <Link href="/library">Library</Link>
        <Link href="/community">Community</Link>
        <Link href="/profile">Profile</Link>
      </div>
    </nav>
  );
}
