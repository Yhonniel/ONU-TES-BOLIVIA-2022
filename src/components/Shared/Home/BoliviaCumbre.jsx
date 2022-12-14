import React from "react";

const BoliviaCumbre = () => {
  return (
    <section className='py-0' id='participacion'>
      <div className='container mt-5'>
        <div className='row justify-content-between align-items-center'>
          {/* <!-- left --> */}
          <div className='col-md-6'>
            <div className='row mt-4 mt-md-0'>
              <div className='col-5 offset-1 px-2 mb-3 align-self-end'>
                <img
                  className='rounded aos'
                  data-aos='fade-up'
                  data-aos-delay='200'
                  data-aos-duration='1000'
                  data-aos-easing='ease-in-out'
                  src='/images/cumbre/5.jpg'
                  alt=''
                />
              </div>
              <div className='col-6 px-2 mb-3'>
                <img
                  className='rounded aos'
                  data-aos='fade-right'
                  data-aos-delay='200'
                  data-aos-duration='1000'
                  src='/images/cumbre/6.jpeg'
                  alt=''
                />
              </div>
              <div className='col-7 px-2 mb-3'>
                <div
                  className='rounded aos bg-grad p-2 p-sm-3 p-lg-4 p-xl-5 all-text-white'
                  data-aos='fade-left'
                  data-aos-delay='300'
                  data-aos-duration='1500'
                >
                  <h4>Bolivia</h4>
                  <h3 className='fw-bold'>Transformando la educación</h3>
                </div>
              </div>
              <div className='col-5 align-self-start ps-2 mb-3'>
                <img
                  className='rounded aos'
                  data-aos='fade-down'
                  data-aos-delay='300'
                  data-aos-duration='1500'
                  src='/images/cumbre/7.jpeg'
                  alt=''
                />
              </div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div className='col-md-6 ps-lg-5'>
            <h3>
              Bolivia presente en la Cumbre <br /> sobre la Transformación de la
              Educación
            </h3>
            <p className='mb-0'>
              El Estado Plurinacional de Bolivia desde el año 2006 inició la
              revolución educativa que permitió construir un sistema educativo
              inclusivo y pertinente, plasmando las aspiraciones de los
              movimientos sociales, pueblos indígenas, maestras, maestros,
              padres y madres de familia, de la comunidad educativa en general.
              Los fundamentos de la Revolución Educativa se encuentran plasmados
              en la Constitución Política del Estado y la Ley N° 070 de 20 de
              diciembre de 2010, de la Educación “Avelino Siñani – Elizardo
              Pérez” que define que “toda persona tiene derecho a recibir
              educación en todos los niveles de manera universal, productiva,
              gratuita, integral e intercultural, sin discriminación”.
            </p>

            <div className='mt-4'>
              <div>
                {/* <!-- Button trigger modal --> */}
                <button
                  type='button'
                  className='btn btn-grad'
                  data-bs-toggle='modal'
                  data-bs-target='#boliviaCumbre'
                >
                  Más información
                </button>

                {/* <!-- Modal --> */}
                <div
                  className='modal fade'
                  id='boliviaCumbre'
                  tabindex='-1'
                  aria-labelledby='boliviaCumbre'
                  aria-hidden='true'
                >
                  <div className='modal-dialog modal-dialog-centered'>
                    <div className='modal-content'>
                      <div className='modal-header'>
                        <h5 className='modal-title' id='exampleModalLabel1'>
                          Bolivia en la Cumbre
                        </h5>
                        <button
                          type='button'
                          className='btn-close'
                          data-bs-dismiss='modal'
                          aria-label='Close'
                        ></button>
                      </div>
                      <div className='modal-body'>
                        Durante su intervención, el jefe de la cartera de
                        Educación boliviano reafirmó el compromiso del
                        presidente constitucional de Bolivia, Luis Arce
                        Catacora, de garantizar el derecho a la educación para
                        todas y todos los bolivianos. Asimismo, ratificó que las
                        acciones en temas educativos continúan en la presente
                        gestión, y adelantó que el Gobierno nacional proyecta
                        llegar al 2025 con una educación de calidad,
                        participativa, en igualdad de condiciones, erradicando
                        la violencia para todas y todos los bolivianos.
                        {/* <div className='col-md-6 mb-4 mt-4'>
                          <ul className='list-group list-group-borderless'>
                            <li className='list-group-item'>
                              <a
                                target={"_blank"}
                                href='https://www.youtube.com/watch?v=XcVG7SGiWW8'
                              >
                                <i className='fa fa-link fa-fw text-info'></i>
                                Participación del Ministro de Educación, Edgar
                                Pary Chambi en la Pre-Cumbre 29 de junio de 2022
                                - Sede de la UNESCO - París, Francia
                              </a>
                            </li>
                            <li className='list-group-item'>
                              <a
                                target={"_blank"}
                                href='https://drive.google.com/file/d/16dOfsFGBIQGM7izK_pi51SwOonYicVGt/view?usp=sharing'
                              >
                                <i className='fa fa-link fa-fw text-info'></i>
                                PreCumbre sobre la Transformación de la
                                Educación
                              </a>
                            </li>
                          </ul>
                        </div> */}
                        {/* <div>
                          <p>
                            <a
                              target={"_blank"}
                              href='https://transformingeducationsummit.sdg4education2030.org/BoliviaNationalConsultationReport'
                            >
                              Accede al Informe Preliminar del Estado
                              Plurinacional de Bolivia sobre las Consultas y
                              Diálogos Nacionales presentado para la Pre-Cumbre.
                            </a>
                          </p>
                        </div> */}
                      </div>
                      <div className='modal-footer'>
                        <button type='button' className='btn'>
                          <a
                            className='btn btn-grad'
                            href='/bolivia-en-la-cumbre'
                          >
                            Ir a la sección
                          </a>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoliviaCumbre;
