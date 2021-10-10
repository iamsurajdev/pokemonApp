import { pokemonListSingleItemType } from "@lib/types/pokemon";
import PokemonCard from "./pokemoncard";

const PokemonCards: React.FC<{ pokemons: pokemonListSingleItemType[] }> = ({
  pokemons,
}) => {
  console.log("props : ", pokemons);

  return (
    <div>
      {pokemons &&
        pokemons?.map((pokemon: pokemonListSingleItemType, index) => (
          <div key={index}>
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
    </div>
  );
};

export default PokemonCards;
