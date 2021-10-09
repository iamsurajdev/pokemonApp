import { useEffect } from "react";
import SEO from "@components/SEO";
import axios from "@services/axiosConfig";
import { getAllPokemon } from "@services/api";

export default function Home() {
  const fetchPokemon = async () => {
    const data = (await axios.get(getAllPokemon(20))).data;
    console.log(data);
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
      </main>
    </div>
  );
}
