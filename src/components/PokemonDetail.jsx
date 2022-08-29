import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { SaveUserName } from "../store/slices/userName.slice";

const PokemonDetail = ({ filterPokemon, filterPoke }) => {
  const { search } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    filterPokemon(search);
  }, [search]);

  const exit = (isValue) => {
    if (isValue) {
      navigate(-1);
    } else {
      dispatch(SaveUserName(""));
    }
  };
  const type = filterPoke.types?.[0]?.type?.name;

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
    <div className="backgroundDetail">
      <div className="ExitandGoback">
        <i
          onClick={() => exit(true)}
          style={{ fontSize: "2em" }}
          class="fas fa-arrow-circle-left"
        ></i>
        <i
          onClick={() => exit(false)}
          style={{ fontSize: "2em" }}
          class="fas fa-sign-out-alt"
        ></i>
      </div>
      <div className="c-Container">
        <div className="pokemonDetail">
          <div className="containerImg">
            <img
              className= {`chilWelcome ${typePokemonBackground}` }
              src={filterPoke.sprites?.other.home.front_default}
              alt="pokemon"
            />

            <h1
              className={`chilWelcome   ${typePokemonBackground}`}
            >
              <div className="chilWelcome">{filterPoke.name}</div>
            </h1>
          </div>
          <div
            className={` infoPrimary  chilWelcome  ${typePokemonBackground}`}
          >
            <div className="infoPrimaryChil">
              <b>Weight:</b>
              {filterPoke.weight}
            </div>
            <div className="infoPrimaryChil">
              {" "}
              <b>#</b>
              {filterPoke.id}
            </div>
            <div className="infoPrimaryChil">
              <b>Height:</b>
              {filterPoke.height}
            </div>
          </div>
        </div>

        <div className="containerPokemonInfo">
          <div className="PokemonInfo">
            <div className="startAndEx">
              <div class="progress-bar green stripes shine">
                <div className="titleinfo">Hp:</div>
                <div className="containerBar">
                  <span
                    style={{ width: `${filterPoke.stats?.[0].base_stat}%` }}
                  >
                    <b>{filterPoke.stats?.[0].base_stat}/150</b>
                  </span>
                </div>
              </div>

              <div class="progress-bar red stripes shine">
                <div className="titleinfo">Attack:</div>
                <div className="containerBar">
                  <span
                    style={{ width: `${filterPoke.stats?.[1].base_stat}%` }}
                  >
                    <b>{filterPoke.stats?.[1].base_stat}/150</b>
                  </span>
                </div>
              </div>

              <div class="progress-bar silver stripes shine">
                <div className="titleinfo">Defense:</div>
                <div className="containerBar">
                  <span
                    style={{ width: `${filterPoke.stats?.[2].base_stat}%` }}
                  >
                   <b> {filterPoke.stats?.[2].base_stat}/150</b>
                  </span>
                </div>
              </div>

              <div class="progress-bar yellow stripes shine">
                <div className="titleinfo">Speed:</div>
                <div className="containerBar">
                  <span
                    style={{ width: `${filterPoke.stats?.[3].base_stat}%` }}
                  >
                   <b>{filterPoke.stats?.[3].base_stat}/150</b> 
                  </span>
                </div>
              </div>
            </div>
            <div
              className={`infoEx   chilWelcome  ${typePokemonBackground}`}
            >
              <div className="chilWelcome">
                {" "}
                <b>Types:</b> {filterPoke.types?.[0]?.type?.name}{" "}
                {filterPoke.types?.[1]?.type?.name}
              </div>
              <div className="chilWelcome">
                <b>Abilities:</b>
                {filterPoke.abilities?.map((element) => (
                  <>{element.ability.name} </>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div
          className={` containerSkill chilWelcome  ${typePokemonBackground}`}
        >
          <h2 className=" chilWelcome"> Start Moves </h2>
          <div className="pokemonSkill">
            {filterPoke.moves?.map((element) => (
              <div className="skillName">{element.move.name}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetail;
