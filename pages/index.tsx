import { useEffect, useState } from "react";
import SEO from "@components/SEO";
import axios from "@services/axiosConfig";
import { getAllPokemon, pokemonImageURL } from "@services/api";
import { pokemonListSingleItemType, pokemonListType } from "@lib/types/pokemon";
import PokemonCards from "@components/pokemonCards";
import { Spin } from "antd";
import Header from "@components/header";

export default function Home() {
  const [allPokemon, setAllPokemon] = useState<pokemonListSingleItemType[]>([]);
  const [offset, setOffset] = useState(0);
  const [loader, setLoader] = useState(false);

  const fetchPokemon = async () => {
    setLoader(true);
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
    } finally {
      setLoader(false);
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
        <Header />
        <Spin spinning={loader}>
          <PokemonCards pokemons={allPokemon} />
          <div className="min-w-full flex justify-center items-center mt-8 mb-8">
            <button
              className="transform transition duration-300 p-3 mb-8 rounded-xl bg-blue-400 font-semibold text-white hover:bg-blue-600"
              onClick={fetchPokemon}
            >
              Load more
            </button>
          </div>
        </Spin>
      </main>
    </div>
  );
}
