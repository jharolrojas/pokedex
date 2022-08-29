import axios from "axios";
import React, { useEffect, useState } from "react";

const Select = ({ filterType, allPokemons }) => {
  const [types, SetTypes] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/type/")
      .then((res) => SetTypes(res.data.results));
  }, []);

  const filterTypePokemon = (e) => {
    if (e.target.value == "All") {
      allPokemons();
      console.log("select");
    } else {
      filterType(e.target.value);
    }
  };

  return (
    <select className="select" onChange={filterTypePokemon}>
      <option value="All">All Pokemones</option>
      {types.map((type) => (
        <option value={type.url} key={type.url}>
          {type.name}
        </option>
      ))}
    </select>
  );
};

export default Select;
