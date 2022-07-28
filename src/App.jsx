import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import useGetData from "./customHooks/useGetData";
import{Login,Home,PokemonDetail,ProtectedRoutes} from './components/index'

function App() {
  const { dataAll, filterPokemon, filterPoke, filterType, allPokemons } =
    useGetData();

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
