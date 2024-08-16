export interface Root {
  games: Game[];
}

export interface Game {
  code: string;
  url: string;
  name: Name;
  isPortrait: boolean;
  description: Description;
  gamePreviews: GamePreviews;
  assets: Assets;
  categories: Categories;
  tags: Tags;
  width: number;
  height: number;
  colorMuted: string;
  colorVibrant: string;
  privateAllowed: boolean;
  rating: number;
  numberOfRatings: number;
  gamePlays: number;
  hasIntegratedAds: boolean;
}

export interface Name {
  en: string;
}

export interface Description {
  en: string;
}

export interface GamePreviews {
  en: string;
}

export interface Assets {
  cover: string;
  brick: string;
  thumb: string;
  wall: string;
  square: string;
  screens: string[];
  coverTiny: string;
  brickTiny: string;
}

export interface Categories {
  en: string[];
}

export interface Tags {
  en: string[];
}
