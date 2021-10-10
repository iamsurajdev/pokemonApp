import { useEffect, useState } from "react";
import SEO from "@components/SEO";
import axios from "@services/axiosConfig";
import { getAllPokemon } from "@services/api";

type fetchedData = {
  results: resultsType;
  count: number;
};

type resultsType = [
  {
    name: string;
    url: string;
    data?: any;
  }
];

export default function Home() {
  const [allPokemon, setAllPokemon] = useState<resultsType[] | any>();

  const fetchPokemon = async () => {
    try {
      const data: fetchedData = (await axios.get(getAllPokemon(10))).data;
      const { results } = data;
      const d: resultsType[] | any = await Promise.all(
        results.map(async (i) => {
          const res = await axios.get(i.url);
          console.log(res);

          return { ...i, data: res?.data };
        })
      );
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
            allPokemon?.map((pokemon: resultsType | any) => (
              <div key={pokemon?.data?.id}>
                <p>name : {pokemon.name}</p>
                <img
                  src={pokemon.data.sprites.other.dream_world.front_default}
                  alt={pokemon.name}
                />
              </div>
            ))}
        </div>
      </main>
    </div>
  );
}
