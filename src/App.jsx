import { useState } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import useGetData from "./customHooks/useGetData";
import Home from "./components/Home";
import PokemonDetail from "./components/PokemonDetail";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {
  const { dataAll, filterPokemon, filterPoke, filterType, allPokemons } =
    useGetData();
  {
    /* <div className="ExitandGoback">
        <i  style={{fontSize:"5em"}} class="fas fa-arrow-alt-left"></i>
        <i class="fad fa-arrow-circle-left"></i>
        <i class="far fa-arrow-circle-left"></i>
        <i class="fal fa-arrow-alt-left"></i>
        <i  style={{fontSize:"5em"}} class="fal fa-door-open"></i>
        </div> */
  }
  return (
    <HashRouter>
      <div className="App"></div>

      <Routes>
        <Route path="/" element={<Login />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/Home" element={ <Home dataAll={dataAll} filterType={filterType} allPokemons={allPokemons}/>}/>
          <Route path="/Pokemon/:search" element={<PokemonDetail filterPokemon={filterPokemon} filterPoke={filterPoke}  /> }/>
        </Route>
        
      </Routes>
   

    </HashRouter>
  );
}

export default App;
