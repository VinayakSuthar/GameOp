import { Game } from "@/types/games";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;

interface Response {
  games: Game[];
}

async function fetchGames(genre?: string) {
  const data: Response = await fetch(baseUrl).then((res) => res.json());
  let result: Game[] = [];

  if (genre) {
    result = data.games.filter((game) =>
      game.categories.en.find(
        (category) => category.toLowerCase() === genre.toLowerCase()
      )
    );
  }

  return result.length ? result : data.games;
}

export { fetchGames };
