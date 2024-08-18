import { fetchGames } from "@/api/games";
import GameCard from "@/components/gameCard";
import gameGenre from "@/constants/gameGenre";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import Loading from "./loading";

interface PageProps {
  params: { genre?: string[] };
}

export default async function Page({ params }: PageProps) {
  const activeGenre = params.genre?.[0];

  const games = await fetchGames(activeGenre);

  return (
    <div className="w-full">
      <div className="all-games">
        {games.map((game) => (
          <GameCard key={game.code} game={game} />
        ))}
      </div>
    </div>
  );
}
