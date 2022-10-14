import React from "react";
import HeroHome from "../components/Shared/Home/HeroHome";
import Intituciones from "../components/Shared/Home/Intituciones";
import BoliviaCumbre from "../components/Shared/Home/BoliviaCumbre";
import AcercaCumbre from "../components/Shared/Home/AcercaCumbre";
import InfografiaSlider2 from "../components/Shared/Home/InfografiaSlider2";

const Home = () => {
  return (
    <>
      <HeroHome></HeroHome>

      <AcercaCumbre></AcercaCumbre>
      <BoliviaCumbre></BoliviaCumbre>

      <InfografiaSlider2></InfografiaSlider2>

      <Intituciones></Intituciones>
    </>
  );
};

export default Home;
