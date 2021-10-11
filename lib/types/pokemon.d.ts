export type pokemonListType = {
  results: pokemonListSingleItemType[];
  count: number;
};

export type pokemonListSingleItemType = {
  name: string;
  url: string;
  image: string;
};

export type pokemonDetails = {
  height: number;
  weight: number;
  type: string;
  name: string;
  baseExperience: number;
  topMoves: string[];
};
