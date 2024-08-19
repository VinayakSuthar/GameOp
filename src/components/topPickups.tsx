import { Game } from "@/types/games";

import React from "react";
import Carousal from "./carousal";
import GameCard from "./gameCard";
import { fetchGames } from "@/api/games";

export default async function TopPickups() {
  const games = await fetchGames();
  const elevenGames = games.slice(0, 11);

  return (
    <div className="mb-5 sm:mb-10">
      <h2 className="font-bold text-2xl sm:text-3xl border-b-2 border-blue-600 inline-block mb-5 sm:mb-10">
        Top Pickups Showcase
      </h2>
      <Carousal>
        {elevenGames.map((game) => (
          <GameCard key={game.code} game={game} />
        ))}
      </Carousal>
    </div>
  );
}
