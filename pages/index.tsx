import { useEffect, useState } from "react";
import SEO from "@components/SEO";
import axios from "@services/axiosConfig";
import { getAllPokemon } from "@services/api";
import { pokemonListSingleItemType, pokemonListType } from "@lib/types/pokemon";

export default function Home() {
  const [allPokemon, setAllPokemon] = useState<pokemonListSingleItemType[]>();

  const fetchPokemon = async () => {
    try {
      const data: pokemonListType = (await axios.get(getAllPokemon(10))).data;
      const { results } = data;
      const d: pokemonListSingleItemType[] | any = results.map((i, index) => {
        const paddedId: string = String(index + 1);
        const image: string = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${paddedId}.svg`;
        return { ...i, image: image };
      });

      console.log(d);
      setAllPokemon(d);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  return (
    <div className="">
      <SEO
        title={"Pokemon App"}
        description={"App for information about Pokemon"}
      />
      <main>
        <h1>Pokemon</h1>
        <div>
          {allPokemon &&
            allPokemon?.map((pokemon: pokemonListSingleItemType, index) => (
              <div key={index}>
                <p>name : {pokemon.name}</p>
                <img src={pokemon.image} alt={pokemon.name} />
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
