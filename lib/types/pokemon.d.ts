export type pokemonListType = {
  results: pokemonListSingleItemType[];
  count: number;
};

export type pokemonListSingleItemType = {
  name: string;
  url: string;
  image: string;
};
