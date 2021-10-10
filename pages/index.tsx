import { useEffect, useState } from "react";
import SEO from "@components/SEO";
import axios from "@services/axiosConfig";
import { getAllPokemon, pokemonImageURL } from "@services/api";
import { pokemonListSingleItemType, pokemonListType } from "@lib/types/pokemon";
import PokemonCards from "@components/pokemonCards";

export default function Home() {
  const [allPokemon, setAllPokemon] = useState<pokemonListSingleItemType[]>([]);
  const [offset, setOffset] = useState(0);

  const fetchPokemon = async () => {
    try {
      const data: pokemonListType = (await axios.get(getAllPokemon(21, offset)))
        .data;
      const { results } = data;
      const d: pokemonListSingleItemType[] | any = results.map((i, index) => {
        const paddedId: string = String(index + 1 + allPokemon.length);
        const image: string = pokemonImageURL(paddedId);
        return { ...i, image: image };
      });
      setOffset(offset + 21);
      setAllPokemon([...allPokemon, ...d]);
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
        <h1 className="text-4xl text-center mt-4 mb-7">Pokemon Wiki</h1>
        <PokemonCards pokemons={allPokemon} />
        <div className="min-w-full flex justify-center items-center mt-8 mb-8">
          <button
            className="p-3 rounded-xl bg-blue-400 font-semibold text-white hover:border-blue-900"
            onClick={fetchPokemon}
          >
            Load more
          </button>
        </div>
      </main>
    </div>
  );
}
