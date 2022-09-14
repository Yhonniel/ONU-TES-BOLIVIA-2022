import React from "react";
import HeroHome from "../components/Shared/HeroHome";
import NotiHome from "../components/Shared/NotiHome";
import SectionDialogos from "../components/Shared/SectionDialogos";
import Sectiona from "../components/Shared/BoliviaCumbre";
import Intituciones from "../components/Shared/Intituciones";
import BoliviaCumbre from "../components/Shared/BoliviaCumbre";
import AcercaCumbre from "../components/Shared/AcercaCumbre";
import InfografiaSlider1 from "../components/Shared/InfografiaSlider1";

const Home = () => {
  return (
    <>
      <HeroHome></HeroHome>
      <AcercaCumbre></AcercaCumbre>
      <BoliviaCumbre></BoliviaCumbre>

      <InfografiaSlider1></InfografiaSlider1>

      <Intituciones></Intituciones>
    </>
  );
};

export default Home;
