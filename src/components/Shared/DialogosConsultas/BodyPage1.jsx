import React from "react";
import DialogosDetalles from "./DialogosDetalles";
import SectionAccordion from "./SectionAccordion";

const BodyPage1 = () => {
  return (
    <section className='blog-page py-0 mt-5'>
      <div className='container'>
        <div className='col-md-8 mx-auto'>
          {/* <!-- Post item  with image--> */}
          <div className='post-item'>
            <div className='post-item-wrap'>
              <div className='post-image tiny-slider testi-full dots-dark'>
                <div
                  className='tiny-slider-inner'
                  data-arrow='false'
                  data-items='1'
                  data-autoplay='3800'
                >
                  <div className='item'>
                    <div className='testimonials-wrap'>
                      <img src='/images/dialogos/1.png' alt='img' />{" "}
                    </div>
                  </div>
                  <div className='item'>
                    <div className='testimonials-wrap'>
                      <img src='/images/dialogos/2.png' alt='img' />{" "}
                    </div>
                  </div>
                  <div className='item'>
                    <div className='testimonials-wrap'>
                      <img src='/images/dialogos/3.png' alt='img' />{" "}
                    </div>
                  </div>
                </div>
              </div>
              <div className='post-item-desc'>
                <p className='mt-3'>
                  El 6 de mayo de 2022, el viceministro de Relaciones
                  Exteriores, Freddy Mamani Machaca, fue designado autoridad
                  nacional convocante para llevar a cabo los diálogos y
                  consultas nacionales para preparar la posición del Estado
                  Plurinacional de Bolivia ante la Cumbre para la Transformación
                  de la Educación.
                </p>
                <p>
                  Es así, que gracias al liderazgo del Ministerio de Relaciones
                  Exteriores y el Ministerio de Educación y con la asistencia
                  técnica del Sistema de las Naciones Unidas en Bolivia (SNU)
                  bajo la coordinación de la Oficina de la Coordinadora
                  Residente (OCR) y las Agencias especializadas como son: la
                  Organización de las Naciones Unidas para la Cultura, las
                  Ciencias y la Educación en Quito-Ecuador (UNCESCO), el Fondo
                  de las Naciones Unidas para la Infancia (UNICEF) y el Programa
                  de Naciones Unidas para el Desarrollo (PNUD), además de la
                  colaboración del Fondo para el Desarrollo de los Pueblos
                  Indígenas de América Latina y El Caribe (FILAC) y el
                  Ministerio de Culturas, Descolonización y
                  Despatriarcalización; se organizaron una serie de <br />
                  <strong> 9 diálogos nacionales y temáticos</strong> con la
                  participación de más de <strong>2.500 personas </strong> en
                  una mezcla de consultas virtuales y presenciales y utilizando
                  herramientas como <strong> U-Report.</strong>
                </p>
                <p>
                  Estas discusiones con niños, jóvenes, padres, profesionales de
                  la educación, expertos y otros actores de diversos sectores
                  han proporcionado insumos para elaborar la posición nacional
                  del Estado Plurinacional de Bolivia ante la Cumbre.
                </p>
              </div>
            </div>
          </div>
        </div>

        <DialogosDetalles></DialogosDetalles>
        
      </div>
    </section>
  );
};

export default BodyPage1;
