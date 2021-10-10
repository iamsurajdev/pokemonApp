import { pokemonListSingleItemType } from "@lib/types/pokemon";

const PokemonCard: React.FC<{ pokemon: pokemonListSingleItemType }> = ({
  pokemon,
}) => {
  return (
    <>
      <p>
        name ={">"} {pokemon.name}
      </p>
      <img src={pokemon.image} alt={pokemon.name} />
    </>
  );
};

export default PokemonCard;
