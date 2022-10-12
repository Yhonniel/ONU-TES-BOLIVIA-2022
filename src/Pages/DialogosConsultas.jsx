import React from "react";
import SectionNoticias from "../components/Shared/DialogosConsultas/SectionNoticias";
import HeroPage from "../components/Shared/DialogosConsultas/HeroPage";
import BodyPage1 from "../components/Shared/DialogosConsultas/BodyPage1";
import CallToActionImage from "../components/Shared/DialogosConsultas/CallToActionImage";

const DialogosConsultas = () => {
  return (
    <>
      <HeroPage></HeroPage>
      <CallToActionImage></CallToActionImage>
      <BodyPage1></BodyPage1>
      <SectionNoticias></SectionNoticias>
    </>
  );
};

export default DialogosConsultas;
