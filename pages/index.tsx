import { useEffect, useState } from "react";
import SEO from "@components/SEO";
import axios from "@services/axiosConfig";
import { getAllPokemon } from "@services/api";

type fetchedData = {
  results: resultsType[];
  count: number;
};

type resultsType = {
  name: string;
  url: string;
  image: string;
};

export default function Home() {
  const [allPokemon, setAllPokemon] = useState<resultsType[]>();

  const fetchPokemon = async () => {
    try {
      const data: fetchedData = (await axios.get(getAllPokemon(10))).data;
      const { results } = data;
      const d: resultsType[] | any = results.map((i, index) => {
        const paddedId: string = String(index + 1);
        // const image: string = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
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
            allPokemon?.map((pokemon: resultsType, index) => (
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
