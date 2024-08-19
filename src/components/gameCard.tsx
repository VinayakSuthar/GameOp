import { Game } from "@/types/games";
import React from "react";
import ImageWithFallback from "./imageWithFallback";
import { cn } from "@/utils";

interface GameCardProps {
  game: Game;
  className?: string;
}

export default function GameCard({ game, className }: GameCardProps) {
  return (
    <div
      key={game.code}
      className={cn(
        "relative overflow-hidden rounded-lg hover:scale-110 transition aspect-[4/5]",
        className
      )}
    >
      <ImageWithFallback src={game.assets.cover} fill alt={game.name.en} />
      <div className="absolute bottom-0 h-2/3 p-2 flex items-center justify-end py-3 gap-y-1 flex-col w-full bg-gradient-to-t from-black/85 via-black/60 to-black/0">
        <h3
          className="font-medium truncate w-full text-center"
          title={game.name.en}
        >
          {game.name.en}
        </h3>
        <a
          className="border-white border bg-black/50 rounded-md capitalize text-white text-sm px-4 py-1"
          href={game.url}
          target="_blank"
        >
          Play Now
        </a>
      </div>
    </div>
  );
}
