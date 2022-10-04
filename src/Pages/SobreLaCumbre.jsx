import React from "react";

const SobreLaCumbre = () => {
  return (
    <>
      <div className='left bg-grad pattern-overlay-4'>
        <div className='container'>
          <div className='row all-text-white'>
            <div className='col-md-12 align-self-center position-relative'>
              <h1 className='fw-bold display-1 mb-2 mb-md-n4 mt-9'>
                Sobre La Cumbre
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section className='blog-page'>
        <div className='container'>
          <div className='col-md-8 mx-auto'>
            {/* <!-- Post item  with image--> */}
            <div className='post-item'>
              <div className='post-item-wrap'>
                <div className='post-image'>
                  <a href='/images/cumbre/8.png'>
                    {" "}
                    <img src='/images/cumbre/8.png' alt='' />{" "}
                  </a>
                </div>
                <div className='post-item-desc'>
                  <h2 className='mt-3'> Acerca de la Pre-Cumbre</h2>
                  <p>
                    Del 28 al 30 de junio de 2022 tuvo lugar en París la
                    Precumbre de la Cumbre sobre la Transformación de la
                    Educación. El 28 de junio se celebró un Día del Compromiso
                    Mundial, donde se organizaron reuniones técnicas sobre las
                    vías de acción temáticas y compromisos con las principales
                    partes interesadas. La sesión de alto nivel, que contó con
                    participación ministerial y de distintas partes interesadas,
                    los días 29 y 30 de junio de 2022.
                  </p>
                  <p>
                    El objetivo general de esta Precumbre fue aprovechar los
                    debates en curso sobre la transformación de la educación,
                    elaborar un contenido inicial, construir una visión
                    compartida y proponer acciones para la Cumbre, de forma que
                    se genere un mayor impulso durante los preparativos de la
                    cita que tendrá lugar en septiembre. En particular, la
                    Precumbre de la Cumbre brindó un foro integrador y abierto
                    para:
                  </p>
                  <div>
                    <ul className='list-group list-group-borderless list-group-icon-primary-bg'>
                      <li className='list-group-item'>
                        <i className='fa fa-check'></i> Que los países que hayan
                        avanzado en sus consultas nacionales presenten los
                        resultados preliminares de estas y expongan los
                        elementos clave de su compromiso para transformar la
                        educación, con el fin de inspirar a otros países para
                        que presenten compromisos y medidas audaces en la Cumbre
                        de septiembre.
                      </li>
                      <li className='list-group-item'>
                        <i className='fa fa-check'></i> Que cada vía temática de
                        acción presente las iniciativas más destacadas
                        planteadas en los documentos de debate iniciales y
                        explore las posibles coaliciones y asociaciones para
                        ampliar el alcance de éstas durante el periodo previo a
                        la Precumbre.
                      </li>
                      <li className='list-group-item'>
                        <i className='fa fa-check'></i> Crear impulso y marcar
                        un hito clave hacia un movimiento mundial por la
                        educación, donde se muestre a los países pioneros y los
                        líderes en educación, se ofrezca una plataforma para que
                        niños, jóvenes, estudiantes, padres y profesores
                        expongan sus opiniones y hagan oír su voz y se permita
                        que las partes interesadas se reúnan y unan sus fuerzas
                        para transformar la educación.
                      </li>
                    </ul>
                    <div className='mt-5'>
                      <ul className='list-group list-group-borderless'>
                        <li className='list-group-item'>
                          <a
                            target={"_blank"}
                            href='https://transformingeducationsummit.sdg4education2030.org/TESPreSummitProgramme'
                          >
                            <i className='fa fa-link fa-fw text-info'></i> Mira
                            el programa y todos los eventos de la Pre-Cumbre
                          </a>
                        </li>
                        <li className='list-group-item'>
                          <a
                            target={"_blank"}
                            href='https://www.un.org/es/transforming-education-summit/pre-summit'
                          >
                            <i className='fa fa-link fa-fw text-info'></i> Más
                            información sobre la Pre-Cumbre
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className='post-item-desc'>
                  <h2>
                    {" "}
                    Cumbre de las Naciones Unidas sobre la Transformación de la
                    Educación
                  </h2>
                  <p>
                    El Secretario General de las Naciones Unidas convocó a una
                    Cumbre para la Transformación de la Educación, durante la
                    77ª Asamblea General de la ONU, que se llevará a cabo el 19
                    de septiembre de 2022 en Nueva York.
                  </p>
                  <p>
                    El objetivo de esta Cumbre es movilizar la ambición
                    política, la acción, las soluciones y la solidaridad para
                    transformar la educación: hacer un balance de los esfuerzos
                    para recuperar las pérdidas de aprendizaje relacionadas con
                    la pandemia; reimaginar los sistemas educativos para el
                    mundo de hoy y de mañana; y revitalizar los esfuerzos
                    nacionales y mundiales para alcanzar el ODS-4.
                  </p>
                </div>
                <div className='post-item-desc'>
                  <h2> La Vías de acción de la Cumbre</h2>
                  <p>
                    La Cumbre cuenta con 5 Vías de Acción que están centradas en
                    áreas específicas que necesitan atención, las cuales son
                    fundamentales para transformar la educación. Las vías de
                    acción se guían por la Agenda 2030 y sus objetivos y metas
                    relacionados con la educación, concretamente el Objetivo de
                    Desarrollo Sostenible 4.
                  </p>

                  {/* <!-- accordion default --> */}
                  <div>
                    <div className='accordion' id='accordionExample'>
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingOne'>
                          <button
                            className='accordion-button'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseOne'
                            aria-expanded='true'
                            aria-controls='collapseOne'
                          >
                            1. Escuelas inclusivas, equitativas, seguras y
                            saludables
                          </button>
                        </h2>
                        <div
                          id='collapseOne'
                          className='accordion-collapse collapse show'
                          aria-labelledby='headingOne'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            <p>
                              La educación está en crisis. Los altos índices de
                              pobreza, exclusión y desigualdad de género siguen
                              impidiendo el aprendizaje de millones de personas.
                              Además, la COVID-19 puso de manifiesto las
                              desigualdades en el acceso y la calidad de la
                              educación.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingTwo'>
                          <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseTwo'
                            aria-expanded='false'
                            aria-controls='collapseTwo'
                          >
                            2. Aprendizaje y competencias para la vida, el
                            trabajo y el desarrollo sostenible
                          </button>
                        </h2>
                        <div
                          id='collapseTwo'
                          className='accordion-collapse collapse'
                          aria-labelledby='headingTwo'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            <p>
                              Existe una crisis en el aprendizaje de destrezas
                              básicas, alfabetización y habilidades numéricas
                              entre los jóvenes. En 2020 más de 770 millones de
                              personas siguen careciendo de aptitudes de
                              alfabetización básica, de las cuales dos tercios
                              son mujeres.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingThree'>
                          <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseThree'
                            aria-expanded='false'
                            aria-controls='collapseThree'
                          >
                            3. Docentes, enseñanza y profesión docente
                          </button>
                        </h2>
                        <div
                          id='collapseThree'
                          className='accordion-collapse collapse'
                          aria-labelledby='headingThree'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            <p>
                              Los profesores son esenciales para lograr los
                              resultados de aprendizaje, el ODS 4 y la
                              transformación de la educación. Sin embargo, tanto
                              los profesores como el resto del personal
                              educativo se enfrentan a cuatro grandes retos.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingFour'>
                          <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseFour'
                            aria-expanded='false'
                            aria-controls='collapseFour'
                          >
                            4. Aprendizaje y transformación digital
                          </button>
                        </h2>
                        <div
                          id='collapseFour'
                          className='accordion-collapse collapse'
                          aria-labelledby='headingFour'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            <p>
                              La crisis de COVID-19 impulsó innovaciones sin
                              precedentes en la enseñanza a distancia mediante
                              el aprovechamiento de las tecnologías
                              digitales.Estas desigualdades en el acceso
                              implicaron la exclusión de las oportunidades de
                              aprendizaje de algunos grupos, como las mujeres
                              jóvenes y las niñas.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className='accordion-item'>
                        <h2 className='accordion-header' id='headingFive'>
                          <button
                            className='accordion-button collapsed'
                            type='button'
                            data-bs-toggle='collapse'
                            data-bs-target='#collapseFive'
                            aria-expanded='false'
                            aria-controls='collapseFive'
                          >
                            5. Financiación de la educación
                          </button>
                        </h2>
                        <div
                          id='collapseFive'
                          className='accordion-collapse collapse'
                          aria-labelledby='headingFive'
                          data-bs-parent='#accordionExample'
                        >
                          <div className='accordion-body'>
                            <p>
                              Aunque el gasto mundial en educación ha crecido en
                              general, este no ha resultado fructífero debido al
                              elevado crecimiento de la población, los costes
                              desorbitados de la gestión de la educación durante
                              la pandemia de COVID-19 y el desvío de la ayuda a
                              otras emergencias, lo que ha dejado un enorme
                              déficit financiero mundial en esta materia
                              educativa.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='post-item-desc'>
                  <div className='post-item-wrap'>
                    <div className='post-item-desc'>
                      <h2 className='mt-3'>
                        {" "}
                        El Objetivo de Desarrollo Sostenible 4
                      </h2>
                      <div className='col-md-6 mb-4'>
                        <blockquote
                          className='blockquote primary-line'
                          cite='#'
                        >
                          <h5 className='mb-2 '>
                            Garantizar una educación inclusiva, equitativa y de
                            calidad y promover oportunidades de aprendizaje
                            durante toda la vida para todos.
                          </h5>
                        </blockquote>
                      </div>
                      <p>
                        La consecución de una educación de calidad es la base
                        para mejorar la vida de las personas y el desarrollo
                        sostenible. Se han producido importantes avances con
                        relación a la mejora en el acceso a la educación a todos
                        los niveles y el incremento en las tasas de
                        escolarización en las escuelas, sobre todo en el caso de
                        las mujeres y las niñas. Se ha incrementado en gran
                        medida el nivel mínimo de alfabetización, si bien es
                        necesario redoblar los esfuerzos para conseguir mayores
                        avances en la consecución de los objetivos de la
                        educación universal. Por ejemplo, se ha conseguido la
                        igualdad entre niñas y niños en la educación primaria en
                        el mundo, pero pocos países han conseguido ese objetivo
                        a todos los niveles educativos.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SobreLaCumbre;
