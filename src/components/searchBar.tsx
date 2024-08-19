"use client";

import { fetchGames } from "@/api/games";
import { Game } from "@/types/games";
import { cn } from "@/utils";
import debounce from "@/utils/debounce";
import {
  AutorenewRounded,
  Clear,
  Search,
  StarRounded,
} from "@mui/icons-material";
import Image from "next/image";
import React, { useState } from "react";

interface SearchBarProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  autofocus?: boolean;
}

export default function SearchBar({
  className,
  onClick,
  autofocus = false,
}: SearchBarProps) {
  const [searchString, setSearchString] = useState("");
  const [searchResults, setSearchResults] = useState<Game[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  async function findGames(searchString: string) {
    const games = await fetchGames();
    let filteredGames: Game[] = [];
    if (searchString.length > 0) {
      filteredGames = games.filter((game) =>
        game.name.en.toLowerCase().includes(searchString.toLowerCase())
      );
    }
    setIsLoading(false);
    setSearchResults(filteredGames);
  }

  const debouncedFindGames = debounce(findGames, 500);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setSearchString(value);
    setIsLoading(true);
    debouncedFindGames(value);
  }

  function clearSearch() {
    setSearchString("");
    setSearchResults([]);
  }

  return (
    <div className={cn("relative", className)} onClick={onClick}>
      <div className="relative">
        <Search className="absolute text-xl top-1/2 left-[20px] -translate-y-1/2" />
        <input
          type="text"
          value={searchString}
          onChange={handleChange}
          placeholder="Search"
          autoFocus={autofocus}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="rounded-lg px-[60px] pr-5 py-3 bg-white/10 w-full"
        />
        <button
          className="absolute right-[20px] top-1/2 -translate-y-1/2"
          onClick={clearSearch}
        >
          <Clear />
        </button>
      </div>
      {searchString.length > 0 && isFocused && (
        <div className="absolute top-full mt-2 h-[400px] overflow-y-scroll w-full bg-black/70 backdrop-blur-md rounded-md z-20">
          <SearchResult result={searchResults} isLoading={isLoading} />
        </div>
      )}
    </div>
  );
}

function SearchResult({
  result,
  isLoading,
}: {
  result: Game[];
  isLoading: boolean;
}) {
  if (isLoading) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <AutorenewRounded className="text-[40px] animate-spin" />
      </div>
    );
  }
  if (result.length === 0) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p className="text-white text-lg">No results found</p>
      </div>
    );
  }

  return (
    <div>
      {result.map((game) => (
        <div
          key={game.code}
          className="flex items-center gap-x-4 p-3 border-b border-white/10"
        >
          <Image
            src={game.assets.square}
            alt={game.name.en}
            className="rounded-md"
            width={50}
            height={50}
          />
          <a href={game.url} target="_blank" className="flex-1">
            <p className="text-sm font-bold">{game.name.en}</p>
            <p className="text-xs">in {game.categories.en.join(", ")}</p>
          </a>
          <div className="flex items-center basis-[55px] flex-shrink-0">
            <StarRounded className="text-yellow-400" />
            {game.rating}
          </div>
        </div>
      ))}
    </div>
  );
}
