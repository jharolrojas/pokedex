import React, { useState } from "react";
import { useSelector } from "react-redux/es/exports";
import ListHome from "./ListHome";
import pokedex from "../assets/pokedexx.png";
import pokebola from "../assets/pl.png";

import Select from "./Select";
import { useNavigate } from "react-router-dom";

const Home = ({ dataAll, filterType, allPokemons }) => {
  const userName = useSelector((state) => state.userNameslice);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  

  const [page, setPage] = useState(1);
  const lastIndex = page * 5;
  const firstIndex = lastIndex - 5;
  const paginacion = dataAll.slice(firstIndex, lastIndex);
  const lastPage = Math.ceil(dataAll.length / 5);

  const numbers = []; // [1, 2, 3, 4]
  for (let i = 1; i <= lastPage; i++) {
    numbers.push(i);
  }

  return (
    <div >
      <div className="header">
      <div className="containerTitlePodekex">
        <figure>
          <img className="pokedex" src={pokedex} alt="ash" />
          <div className="pokebola App-logo">
            <img src={pokebola} alt="pokebola" />
          </div>
        </figure>
      </div>
      </div>
      <div className="search">
        <form onSubmit={() => navigate(`/Home/Pokemon/${search}`)}>
          <label>busca tu pokemon</label>
          <div className="inputName">
            <input list="pokemons"
              type={"text"}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Enter your name to access the pokedex"
              className="input"
            />
            <button className="button">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
          <datalist id="pokemons">
            {dataAll?.map(element =>(
              <option>{element.name}</option>
            ))}
          </datalist>
        </form>
      </div>
      <div className="welcome">
        <div className="chilWelcome">
          <h1>Welcome to Pokedex</h1>
          <p> In hour good <b>{userName}</b> , Ready?</p>
          
        </div>
        <Select filterType={filterType} allPokemons={allPokemons}/>
      </div>

      <div className="containerListPokemon">
        {paginacion?.map((pokemon) => (
          <ListHome
            url={pokemon.url ? pokemon.url : pokemon.pokemon.url}
            key={pokemon.url ? pokemon.url : pokemon.pokemon.url}
          />
        ))}
      </div>
      <div className="pagination">
        <button  className="burronPagination" onClick={() => setPage(page - 1)} disabled={page === 1}>
          Prev page
        </button >
        {numbers.map((number) => (
          <button className="buttonNumbersPagination" onClick={() => setPage(number)}>{number}</button>
        ))}
        <button className="burronPagination" onClick={() => setPage(page + 1)} disabled={page === lastPage}>
          Next Page
        </button>
      </div>
    </div>
  );
};

export default Home;

