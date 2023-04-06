import React from "react";
import HeroHome from "../components/Shared/Home/HeroHome";
import Intituciones from "../components/Shared/Home/Intituciones";
import BoliviaCumbre from "../components/Shared/Home/BoliviaCumbre";
import AcercaCumbre from "../components/Shared/Home/AcercaCumbre";

import SectionVideoSlider from "../components/Shared/Home/SectionVideoSlider";
import Timeline from "../components/Shared/Home/Timeline";
import ViasDeAccion from "../components/Shared/Home/ViasDeAccion";

const Home = () => {
  return (
    <>
      <HeroHome></HeroHome>

      <AcercaCumbre></AcercaCumbre>

      <BoliviaCumbre></BoliviaCumbre>

      <ViasDeAccion></ViasDeAccion>

      <SectionVideoSlider></SectionVideoSlider>

      <Timeline></Timeline>

      <Intituciones></Intituciones>
      
    </>
  );
};

export default Home;
