import axios from "axios";
import React, { useEffect, useState } from "react";

const PokeInfor = ({ url }) => {
  const [pokeurl, setPokeUrl] = useState();
  useEffect(() => {
    axios.get(url).then((res) => setPokeUrl(res.data));
  }, []);

  return (
    <div className="showPokemon">
      <img src={pokeurl?.sprites.other.home.front_default} alt="pokemon" />
    </div>
  );
};

export default PokeInfor;
