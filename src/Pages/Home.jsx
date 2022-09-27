import React from "react";
import HeroHome from "../components/Shared/HeroHome";
import NotiHome from "../components/Shared/NotiHome";
import Intituciones from "../components/Shared/Intituciones";
import BoliviaCumbre from "../components/Shared/BoliviaCumbre";
import AcercaCumbre from "../components/Shared/AcercaCumbre";
import InfografiaSlider2 from "../components/Shared/InfografiaSlider2";

const Home = () => {
  return (
    <>
      <HeroHome></HeroHome>
      <AcercaCumbre></AcercaCumbre>
      <BoliviaCumbre></BoliviaCumbre>

      <InfografiaSlider2></InfografiaSlider2>
      <NotiHome></NotiHome>

      <Intituciones></Intituciones>
    </>
  );
};

export default Home;
