import React from "react";
import HeroHome from "../components/Shared/HeroHome";
import Intituciones from "../components/Shared/Intituciones";
import BoliviaCumbre from "../components/Shared/BoliviaCumbre";
import AcercaCumbre from "../components/Shared/AcercaCumbre";
import InfografiaSlider2 from "../components/Shared/InfografiaSlider2";
import CallToActionImage from "../components/Shared/DialogosConsultas/CallToActionImage";

const Home = () => {
  return (
    <>
      <HeroHome></HeroHome>
      <CallToActionImage></CallToActionImage>
      <AcercaCumbre></AcercaCumbre>
      <BoliviaCumbre></BoliviaCumbre>

      <InfografiaSlider2></InfografiaSlider2>

      <Intituciones></Intituciones>
    </>
  );
};

export default Home;
