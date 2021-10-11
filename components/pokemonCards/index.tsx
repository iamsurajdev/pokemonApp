import { pokemonTypesCheck } from "@lib/helpers/pokemonTypesChecker";
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
        <div className="w-full flex justify-around items-center flex-wrap mt-7">
          <p>
            <span className="font-bold">Name :</span> {modalInfo?.name}
          </p>
          <p>
            <span className="font-bold">Type : </span> {modalInfo?.type} &nbsp;
            {pokemonTypesCheck[modalInfo?.type]?.icon}
          </p>
        </div>
        <div className="w-full flex justify-around items-center flex-wrap mt-5">
          <p>
            <span className="font-bold">Base experience : </span>
            {modalInfo?.baseExperience}
          </p>
          <p>
            <span className="font-bold">Height : </span> {modalInfo?.height}
          </p>
          <p>
            <span className="font-bold">Weight : </span>
            {modalInfo?.weight}
          </p>
        </div>
        <div
          className="border-2 border-solid rounded-md mt-3"
          style={{ borderColor: pokemonTypesCheck[modalInfo?.type]?.color }}
        >
          <p className="text-xl font-semibold ml-4">Top Moves</p>
          <div className="w-full flex justify-around items-center flex-wrap mb-2">
            {modalInfo?.topMoves.map((item, index) => (
              <span
                key={index}
                className="p-2 mt-2 capitalize rounded-md"
                style={{
                  backgroundColor: pokemonTypesCheck[modalInfo?.type]?.color,
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default PokemonCards;
