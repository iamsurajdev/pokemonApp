import { pokemonDetails, pokemonListSingleItemType } from "@lib/types/pokemon";
import { Modal } from "antd";
import { useState } from "react";
import PokemonCard from "./pokemonCard";

const PokemonCards: React.FC<{ pokemons: pokemonListSingleItemType[] }> = ({
  pokemons,
}) => {
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState<pokemonDetails>();

  const openModalHelper = (details: pokemonDetails) => {
    console.log("details : ", details);
    setModalInfo(details);

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
        title={modalInfo?.name}
        visible={modal}
        onCancel={closeModalHelper}
        footer={null}
      >
        <p>{modalInfo?.baseExperience}</p>
        <p>{modalInfo?.type}</p>
        <p>{modalInfo?.height}</p>
        <p>{modalInfo?.weight}</p>
      </Modal>
    </>
  );
};

export default PokemonCards;
