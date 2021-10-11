import { pokemonTypesCheck } from "@lib/helpers/pokemonTypesChecker";
import axios from "@lib/services/axiosConfig";
import { pokemonDetails, pokemonListSingleItemType } from "@lib/types/pokemon";
import { useEffect, useState } from "react";
import styles from "./style.module.css";

const PokemonCard: React.FC<{
  pokemon: pokemonListSingleItemType;
}> = ({ pokemon }) => {
  const [details, setDetails] = useState<pokemonDetails>();

  const fetchPokemonDetails = async () => {
    try {
      const response: pokemonDetails = (
        await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
      ).data;

      const finalData: pokemonDetails = {
        height: response.height,
        weight: response.weight,
        types: response.types,
      };

      setDetails(finalData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPokemonDetails();
  }, []);

  return (
    <div
      className={styles.cardContainer}
      style={{
        backgroundColor: pokemonTypesCheck[details?.types[0].type.name]?.color,
      }}
    >
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
