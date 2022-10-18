import React from "react";
import HeroHome from "../components/Shared/Home/HeroHome";
import Intituciones from "../components/Shared/Home/Intituciones";
import BoliviaCumbre from "../components/Shared/Home/BoliviaCumbre";
import AcercaCumbre from "../components/Shared/Home/AcercaCumbre";

import SectionVideoSlider from "../components/Shared/Home/SectionVideoSlider";

const Home = () => {
  return (
    <>
      <HeroHome></HeroHome>

      <AcercaCumbre></AcercaCumbre>

      <BoliviaCumbre></BoliviaCumbre>

      <SectionVideoSlider></SectionVideoSlider>

      <Intituciones></Intituciones>
    </>
  );
};

export default Home;
