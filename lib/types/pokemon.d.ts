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
  types: pokemonType[];
};

export type pokemonType = {
  slot: number;
  type: {
    name: string;
    url: string;
  };
};
