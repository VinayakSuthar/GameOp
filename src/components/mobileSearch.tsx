"use client";

import { Search } from "@mui/icons-material";
import React, { useRef, useState } from "react";
import SearchBar from "./searchBar";
import OutsideClick from "./outsideClick";

export default function MobileSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function openSearch() {
    setIsOpen(true);
    setTimeout(() => inputRef.current?.focus(), 0);
  }

  function closeSearch() {
    setIsOpen(false);
  }

  return (
    <div>
      <button className="flex sm:hidden p-1" onClick={openSearch}>
        <Search className="text-white" />
      </button>
      {isOpen && (
        <div className="fixed left-0 top-0 z-40 h-full w-full px-5 bg-black/80 backdrop-blur-lg">
          <OutsideClick onOutsideClick={closeSearch}>
            <SearchBar className="w-full mt-[75px]" autofocus />
          </OutsideClick>
        </div>
      )}
    </div>
  );
}
