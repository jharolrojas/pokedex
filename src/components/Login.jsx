import React, { useState } from "react";
import pokedex from "../assets/pokedexx.png";
import pokebola from "../assets/pl.png";
import SliderPokemon from "./SliderPokemon";
import { SaveUserName } from "../store/slices/userName.slice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import pikachu from "../assets/pika.png";

const Login = () => {
  const [userName, setUserName] = useState("");
  const dispath = useDispatch();
  const navigate = useNavigate();

  const ReadyPokedex = (e) => {
    e.preventDefault();
    dispath(SaveUserName(userName));
    navigate("/Home");
  };

  return (
    <div>
      <div className="containerTitlePodekex">
        <figure>
          <img className="pokedex" src={pokedex} alt="ash" />
          <div className="pokebola App-logo">
            <img src={pokebola} alt="pokebola" />
          </div>
        </figure>
      </div>
      <div className="containerFormUserName">
        <form onSubmit={ReadyPokedex}>
          <div className="inputName">
            <input
              type={"text"}
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              placeholder="Enter your name to access the pokedex"
            />
            <button className="buttonLogin">
              <i className="fas fa-paper-plane"></i>
            </button>
          </div>
        </form>
      </div>
      <div className="sliderShow">
        <SliderPokemon />
      </div>
      <div className="pikachu">
        <img src={pikachu} alt="" />
      </div>
    </div>
  );
};

export default Login;
