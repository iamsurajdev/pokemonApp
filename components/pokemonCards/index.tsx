import { pokemonListSingleItemType } from "@lib/types/pokemon";
import { Modal } from "antd";
import { useState } from "react";
import PokemonCard from "./pokemonCard";

const PokemonCards: React.FC<{ pokemons: pokemonListSingleItemType[] }> = ({
  pokemons,
}) => {
  const [modal, setModal] = useState(false);

  const openModalHelper = () => {
    setModal(true);
  };

  const closeModalHelper = () => {
    setModal(false);
  };

  return (
    <>
      <div className="flex justify-center flex-wrap items-center w-full">
        {pokemons &&
          pokemons?.map((pokemon: pokemonListSingleItemType, index) => (
            <PokemonCard
              pokemon={pokemon}
              openModal={openModalHelper}
              key={index}
            />
          ))}
      </div>
      <Modal
        title="Basic Modal"
        visible={modal}
        onOk={closeModalHelper}
        onCancel={closeModalHelper}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </>
  );
};

export default PokemonCards;
