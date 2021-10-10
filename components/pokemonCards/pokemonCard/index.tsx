import { pokemonListSingleItemType } from "@lib/types/pokemon";
import styles from "./style.module.css";

const PokemonCard: React.FC<{
  pokemon: pokemonListSingleItemType;
}> = ({ pokemon }) => {
  return (
    <div className={styles.cardContainer}>
      <p className="font-bold h-8 text-center capitalize">{pokemon.name}</p>
      <img
        className=" max-h-52 m-auto w-full"
        src={pokemon.image}
        alt={pokemon.name}
      />
    </div>
  );
};

export default PokemonCard;
