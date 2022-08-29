import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ url }) => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);
  const type = data.types?.[0]?.type?.name;

  const click = (id) => {
    navigate(`/Pokemon/${id}`);
  };
  const typePokemonBackground = type == "bug"
  ? "bug"
  : type == "dark"
  ? "dark"
  : type == "dragon"
  ? "dragon"
  : type == "electric"
  ? "electric"
  : type == "fairy"
  ? "fairy"
  : type == "fighting"
  ? "fighting"
  : type == "fire"
  ? "fire"
  : type == "flying"
  ? "flying"
  : type == "ghost"
  ? "ghost"
  : type == "grass"
  ? "grass"
  : type == "ground"
  ? "ground"
  : type == "ice"
  ? "ice"
  : type == "normal"
  ? "normal"
  : type == "poison"
  ? "poison"
  : type == "psychic"
  ? "psychic"
  : type == "rock"
  ? "rock"
  : type == "steel"
  ? "steel"
  : "water";

  return (
    <div onClick={() => click(data.id)} className="containerCardAll">
      <div
        className={`namePokemon chilWelcome ${typePokemonBackground}`}
      >
        <h2 className="chilWelcome">{data.name}</h2>
      </div>
      <div
        className={`card ${typePokemonBackground}`}
      >
        <div className="containerInfo">
          <p className="green">
            <b>Hp:</b> {data.stats?.[0].base_stat}
          </p>
          <p className="red">
            <b>Attack:</b> {data.stats?.[1].base_stat}
          </p>
          <p className="silver">
            <b>Defense:</b> {data.stats?.[2].base_stat}
          </p>
          <p className="yellow">
            <b>Speed:</b> {data.stats?.[3].base_stat}
          </p>
          <p>
            <b>Types:</b> {data.types?.[0]?.type?.name}{" "}
            {data.types?.[1]?.type?.name}
          </p>
        </div>

        <img src={data.sprites?.other.home.front_default} alt="" />
      </div>
    </div>
  );
};

export default PokemonCard;
