import { pokemonListSingleItemType } from "@lib/types/pokemon";
import PokemonCard from "./pokemonCard";

const PokemonCards: React.FC<{ pokemons: pokemonListSingleItemType[] }> = ({
  pokemons,
}) => {
  console.log("props : ", pokemons);

  return (
    <div className="flex justify-center flex-wrap items-center w-full">
      {pokemons &&
        pokemons?.map((pokemon: pokemonListSingleItemType, index) => (
          <PokemonCard pokemon={pokemon} key={index} />
        ))}
    </div>
  );
};

export default PokemonCards;
