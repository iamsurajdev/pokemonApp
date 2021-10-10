export const getAllPokemon = (limit: number) => `pokemon?limit=${limit}`;
export const pokemonImageURL = (id: string) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;

export default { getAllPokemon };
