export const getAllPokemon = (limit: number, offset: number) =>
  `pokemon?limit=${limit}&offset=${offset}`;
export const pokemonImageURL = (id: string) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

export default { getAllPokemon };
