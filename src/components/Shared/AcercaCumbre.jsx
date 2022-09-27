import React from "react";
import { Link } from "react-router-dom";

const AcercaCumbre = () => {
  return (
    <section id='sobreLaCumbre'>
      <div className='container h-100'>
        <div className='row'>
          <div className='col-md-12 col-lg-6 align-self-center '>
            <div className='title text-start'>
              <h3>
                Transformar la educación, <br /> construir nuestro futuro
              </h3>
              <p className='mb-0'>
                La Cumbre sobre la Transformación de la Educación se convoca en
                respuesta a una crisis mundial de la educación en materia de
                igualdad, inclusión, calidad y pertinencia. Esta crisis, a
                menudo lenta e invisible, está teniendo un efecto devastador en
                el futuro de los niños, las niñas y jóvenes de todo el mundo. La
                Cumbre ofrece una oportunidad única para elevar la educación a
                la cima de la agenda política mundial y movilizar la acción, la
                aspiración, la solidaridad y las soluciones necesarias para
                recuperar las pérdidas de aprendizaje relacionadas con la
                pandemia y sembrar las semillas de transformación de la
                educación en un mundo de rápida evolución.
              </p>
              <div className='mt-4'>
                <div>
                  {/* <!-- Button trigger modal --> */}
                  <a
                    href='https://www.un.org/es/transforming-education-summit'
                    className='btn btn-grad'
                    target='_blank'
                  >
                    Más Información
                  </a>
                  {/* <button
                    type='button'
                    className='btn btn-grad'
                    data-bs-toggle='modal'
                    data-bs-target='#precumbre'
                  >
                    Más info
                  </button> */}

                  {/* <!-- Modal --> */}
                  <div
                    className='modal fade'
                    id='precumbre'
                    tabindex='-1'
                    aria-labelledby='precumbre'
                    aria-hidden='true'
                  >
                    <div className='modal-dialog modal-dialog-centered'>
                      <div className='modal-content'>
                        <div className='modal-header'>
                          <h5 className='modal-title' id='exampleModalLabel1'>
                            Acerca de la Precumbre
                          </h5>
                          <button
                            type='button'
                            className='btn-close'
                            data-bs-dismiss='modal'
                            aria-label='Close'
                          ></button>
                        </div>
                        <div className='modal-body'>
                          El objetivo general de esta Precumbre fue aprovechar
                          los debates en curso sobre la transformación de la
                          educación, elaborar un contenido inicial, construir
                          una visión compartida y proponer acciones para la
                          Cumbre, de forma que se genere un mayor impulso
                          durante los preparativos de la cita que tendrá lugar
                          en septiembre.
                          <div className='col-md-6 mb-4 mt-4'>
                            <ul className='list-group list-group-borderless'>
                              <li className='list-group-item'>
                                <a
                                  target={"_blank"}
                                  href='https://transformingeducationsummit.sdg4education2030.org/TESPreSummitProgramme'
                                >
                                  <i className='fa fa-link fa-fw text-info'></i>
                                  Mira el programa detallado y revisa todas los
                                  eventos de la Pre-Cumbre.
                                </a>
                              </li>
                              <li className='list-group-item'>
                                <a
                                  target={"_blank"}
                                  href='https://www.un.org/es/transforming-education-summit/pre-summit'
                                >
                                  <i className='fa fa-link fa-fw text-info'></i>
                                  Más información sobre la Pre-Cumbre.
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <div className='modal-footer'>
                          <button type='button' className='btn'>
                            <a className='btn btn-grad' href='/sobre-la-cumbre'>
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
          <div className='col-md-10 col-lg-6 mx-md-auto align-self-center position-relative'>
            <img
              className='rounded'
              src='images/Antonioguterres.jpeg'
              alt='img'
            />
            <div className='position-absolute start-0 bottom-0 ms-4 ms-md-n2 mb-3'>
              <a
                className='btn btn-grad'
                data-glightbox
                href='https://www.youtube.com/watch?v=J_wmZVM42bc'
              >
                {" "}
                <i className='fa fa-play text-white'></i>Mira el Video{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaCumbre;
