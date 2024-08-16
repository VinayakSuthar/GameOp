import { Game } from "@/types/games";
import { Button } from "@mui/material";
import React from "react";
import ImageWithFallback from "./imageWithFallback";

interface GameCardProps {
  game: Game;
}

export default function GameCard({ game }: GameCardProps) {
  return (
    <div
      key={game.code}
      className="flex-shrink-0 flex-grow-0 relative overflow-hidden rounded-lg snap-center hover:scale-110 transition"
    >
      <ImageWithFallback
        src={game.assets.cover}
        width={180}
        height={200}
        alt={game.name.en}
        className="h-[unset] aspect-[4/5]"
      />
      <div className="absolute bottom-0 h-2/3 flex items-center justify-end py-3 gap-y-1 flex-col w-full bg-gradient-to-t from-black/85 via-black/60 to-black/0">
        <h3 className="font-medium">{game.name.en}</h3>
        <Button
          className="border-white bg-black/50 rounded-md capitalize text-white text-sm"
          variant="outlined"
          href={game.url}
          target="_blank"
        >
          Play Now
        </Button>
      </div>
    </div>
  );
}
