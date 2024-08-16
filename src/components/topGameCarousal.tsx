"use client";
import { Game } from "@/types/games";
import {
  KeyboardDoubleArrowLeftRounded,
  KeyboardDoubleArrowRightRounded,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useEffect, useRef } from "react";
import GameCard from "./gameCard";

interface TopGamesCarousalProps {
  games: Game[];
}

export default function TopGameCarousal({ games }: TopGamesCarousalProps) {
  const carousalRef = useRef<HTMLDivElement>(null);

  function scrollLeft() {
    carousalRef.current?.scrollBy({
      left: -200,
      behavior: "smooth",
    });
  }

  function scrollRight() {
    carousalRef.current?.scrollBy({
      left: 200,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    if (!carousalRef.current) return;
    const { scrollWidth, clientWidth } = carousalRef.current;
    carousalRef.current?.scrollTo({
      left: (scrollWidth - clientWidth) / 2,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="flex items-center gap-4">
      <IconButton
        className="text-blue-500 hidden sm:inline-flex"
        onClick={scrollLeft}
      >
        <KeyboardDoubleArrowLeftRounded className="text-5xl" />
      </IconButton>
      <div
        ref={carousalRef}
        className="flex overflow-x-auto gap-x-8 py-10 snap-x"
      >
        {games.map((game) => (
          <GameCard key={game.code} game={game} />
        ))}
      </div>
      <IconButton
        className="text-blue-500 hidden sm:inline-flex"
        onClick={scrollRight}
      >
        <KeyboardDoubleArrowRightRounded className="text-5xl" />
      </IconButton>
    </div>
  );
}
