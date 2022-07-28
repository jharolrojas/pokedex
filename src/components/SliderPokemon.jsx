import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PokeInfor from "./PokeInfor";
import useGetData from "../customHooks/useGetData";

const SliderPokemon = () => {
  const { data } = useGetData();
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <div className="containerAllPokemon">
      <div className="containerSlick">
        <Slider {...settings}>
          {data?.map((poke) => (
            <div key={poke.url} >
              <PokeInfor url={poke.url} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderPokemon;
