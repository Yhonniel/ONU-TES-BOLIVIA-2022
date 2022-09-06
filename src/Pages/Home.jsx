import React from "react";
import HeroHome from "../components/Shared/HeroHome";
import NotiHome from "../components/Shared/NotiHome";
import SectionDialogos from "../components/Shared/SectionDialogos";
import Sectiona from "../components/Shared/BoliviaCumbre";
import Intituciones from "../components/Shared/Intituciones";
import BoliviaCumbre from "../components/Shared/BoliviaCumbre";
import AcercaCumbre from "../components/Shared/AcercaCumbre";

const Home = () => {
  return (
    <>
      <HeroHome></HeroHome>
      <AcercaCumbre></AcercaCumbre>
      <BoliviaCumbre></BoliviaCumbre>

      <NotiHome></NotiHome>

      <Intituciones></Intituciones>
    </>
  );
};

export default Home;
