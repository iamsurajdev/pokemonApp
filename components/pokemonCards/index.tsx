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
    setModalInfo(details);
    setModal(true);
  };

  const closeModalHelper = () => {
    setModal(false);
    setModalInfo(null);
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
      <Modal title="" visible={modal} onCancel={closeModalHelper} footer={null}>
        <img
          className=" max-h-52 m-auto w-full"
          src={modalInfo?.imageUrl}
          alt={modalInfo?.name}
        />
        <p>
          {" "}
          <span className="font-bold">Name :</span> {modalInfo?.name}
        </p>
        <p>
          {" "}
          <span className="font-bold">Type : </span> {modalInfo?.type}
        </p>
        <p>
          {" "}
          <span className="font-bold">Base experience :</span>{" "}
          {modalInfo?.baseExperience}
        </p>
        <p>
          {" "}
          <span className="font-bold">Height : </span> {modalInfo?.height}
        </p>
        <p>
          {" "}
          <span className="font-bold">Weight : </span>
          {modalInfo?.weight}
        </p>
      </Modal>
    </>
  );
};

export default PokemonCards;
