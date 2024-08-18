import { fetchGames } from "@/api/games";
import Image from "next/image";

function roundToDecimal(num: number) {
  return Number(num / 1000).toFixed(1);
}

export default async function UpcomingAdventures() {
  const data = await fetchGames("adventure");
  const threeGames = data.slice(0, 3);

  return (
    <div className="mb-10">
      <h2 className="font-bold text-2xl sm:text-3xl border-b-2 border-blue-600 inline-block mb-10">
        Most Played Adventures
      </h2>

      <div className="flex gap-x-7 pb-3 sm:pb-0 sm:gap-x-14 overflow-x-scroll sm:overflow-x-hidden no-scrollbar">
        {threeGames.map((game) => (
          <div
            key={game.code}
            className="basis-1/2 flex-grow-0 flex-shrink-0 sm:flex-1 max-w-[380px]"
          >
            <div className="relative aspect-square mb-2 sm:mb-3 rounded-md overflow-hidden">
              <Image src={game.assets.square} fill alt={game.name.en} />
            </div>

            <div className="flex flex-col lg:flex-row lg:items-center justify-between px-1 lg:px-3">
              <div>
                <h3 className="font-bold sm:text-lg md:text-xl sm:mb-1">
                  {game.name.en}
                </h3>
                <p className="text-gray-400 text-sm mb-1 sm:mb-2">
                  {roundToDecimal(game.gamePlays)}k Played
                </p>
              </div>
              <a
                href={game.url}
                className="border-blue-500 text-white capitalize rounded-md bg-white/10 border text-sm py-1 sm:px-5 sm:py-2 text-center"
              >
                Play Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
