import { Game } from "@/types/games";

import React from "react";
import TopGameCarousal from "./topGameCarousal";

const baseUrl = process.env.BASE_URL as string;

interface Response {
  games: Game[];
}

export default async function TopPickups() {
  const data: Response = await fetch(baseUrl).then((res) => res.json());
  const elevenGames = data.games.slice(0, 11);

  return (
    <div>
      <h2 className="font-bold text-2xl sm:text-3xl border-b-2 border-blue-600 inline-block sm:mb-10">
        Top Pickups Showcase
      </h2>
      <TopGameCarousal games={elevenGames} />
    </div>
  );
}
