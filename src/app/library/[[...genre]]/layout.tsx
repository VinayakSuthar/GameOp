import gameGenre from "@/constants/gameGenre";
import Link from "next/link";
import React, { Suspense } from "react";
import Loading from "./loading";
import { cn } from "@/utils";
import Image from "next/image";

interface LayoutProps {
  children: React.ReactNode;
  params: { genre?: string[] };
}

export default function Layout({ children, params }: LayoutProps) {
  const activeGenre = params.genre?.[0];

  return (
    <div className="w-full">
      <div className="flex justify-between overflow-x-scroll gap-x-4 items-center *:border *:rounded-md *:px-4 *:py-2 *:text-sm *:bg-white/10 *:flex-shrink-0 no-scrollbar">
        <Link
          href="/library"
          className={cn({ "border-blue-600": !activeGenre })}
        >
          All Games
        </Link>
        {gameGenre.map((genre) => (
          <Link
            key={genre.id}
            id={genre.id}
            href={`/library/${genre.id}`}
            className={cn("flex items-center gap-x-2", {
              "border-blue-600": genre.id === activeGenre,
            })}
          >
            <Image src={genre.image} alt={genre.name} width={20} height={20} />
            <span>{genre.name}</span>
          </Link>
        ))}
      </div>

      <Suspense fallback={<Loading />}>{children}</Suspense>
    </div>
  );
}
