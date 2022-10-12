import React from "react";

const SectionAccordion = () => {
  return (
    <div>
      <div className='mb-5'>
        <div className='accordion' id='accordionExample'>
          <div className='accordion-item'>
            <p className='accordion-header' id='headingOne'>
              <button
                className='accordion-button'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseOne'
                aria-expanded='true'
                aria-controls='collapseOne'
              >
                <h2>Diálogo de Expertas y Expertos</h2>
              </button>
            </p>
            <div
              id='collapseOne'
              className='accordion-collapse collapse show'
              aria-labelledby='headingOne'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p>
                  Este diálogo se llevó a cabo el 3 de junio de 2022, en formato
                  virtual, fue inaugurado y presentado por Gabriel Muyuy
                  (Secretario Técnico Fondo para el Desarrollo de los Pueblos
                  Indígenas de América Latina y el Caribe), Susana Sottoli
                  (Coordinadora Residente Sistema de Naciones Unidas en
                  Bolivia), Pelagio Condori Yana (Viceministro de
                  Descolonización y Despatriarcalización), Bartolomé Puma
                  Velásquez (Viceministro de Educación Regular), Emb. Diego Pary
                  Rodríguez (Representante del Estado Plurinacional de Bolivia
                  ante las Naciones Unidas) y Freddy Mamani Machaca
                  (Viceministro de Relaciones Exteriores).
                </p>
                <ul className='list-group list-group-borderless'>
                  <li className='list-group-item'>
                    <i className='fa fa-link fa-fw text-info'></i>{" "}
                    <a
                      href='https://drive.google.com/file/d/1vtWMmImwKqjF-1Kpm_skhJ7WY1wE0_zI/view?usp=sharing'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Accede al Resumen de este diálogo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <p className='accordion-header' id='headingTwo'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseTwo'
                aria-expanded='false'
                aria-controls='collapseTwo'
              >
                <h2>Diálogo de las Naciones y Pueblos Indígenas</h2>
              </button>
            </p>
            <div
              id='collapseTwo'
              className='accordion-collapse collapse'
              aria-labelledby='headingTwo'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p>
                  Este diálogo fue realizado el día viernes 14 de junio de 2022,
                  participaron en la inauguración Gabriel Muyuy (Secretario
                  Técnico Fondo para el Desarrollo de los Pueblos Indígenas de
                  América Latina y el Caribe), Susana Sottoli (Coordinadora
                  Residente Sistema de Naciones Unidas en Bolivia), Freddy
                  Mamani Machaca (Viceministro de Relaciones Exteriores),Olmer
                  Torrejon Alcoba (Director General de Relaciones
                  Multilaterales). Representantes de diversas naciones y pueblos
                  indígenas de toda Bolivia dieron vida a este diálogo con
                  importantes aportes.
                </p>
                <ul className='list-group list-group-borderless'>
                  <li className='list-group-item'>
                    <i className='fa fa-link fa-fw text-info'></i>{" "}
                    <a
                      href='https://drive.google.com/file/d/19LB_0FpqTfCMyAwjZuZhCOHDZa5fpXeE/view?usp=sharing'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Accede al Resumen de este diálogo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <p className='accordion-header' id='headingThree'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseThree'
                aria-expanded='false'
                aria-controls='collapseThree'
              >
                <h2>Diálogo sobre la Vía de Acción 4</h2>
              </button>
            </p>
            <div
              id='collapseThree'
              className='accordion-collapse collapse'
              aria-labelledby='headingThree'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p>
                  Este diálogo virtual se llevó a cabo el día lunes 18 de julio
                  de 2022, Alvaro Zapata (Coordinador de la Universidad Indígena
                  del Fondo para el Desarrollo de los Pueblos Indígenas de
                  América Latina y el Caribe- FILAC), Rafael Ramírez
                  (Representante de UNICEF Bolivia), Vladimir Terán (Director
                  General Ejecutivo de AGETIC) y.Bartolomé Puma Velásquez
                  (Viceministro de Educación Regular del Ministerio de
                  Educación) fueron los encargados de dar la bienvenida y dar
                  por inaugurada esta sesión.
                </p>
                <ul className='list-group list-group-borderless'>
                  <li className='list-group-item'>
                    <i className='fa fa-link fa-fw text-info'></i>{" "}
                    <a
                      href='https://drive.google.com/file/d/1XEHw-8cTNqWO2JA0BIkJkLM9GBiIw7Cx/view?usp=sharing'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Accede al Resumen de este diálogo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <p className='accordion-header' id='headingFour'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFour'
                aria-expanded='false'
                aria-controls='collapseFour'
              >
                <h2>Diálogo sobre la Vía de Acción 5</h2>
              </button>
            </p>
            <div
              id='collapseFour'
              className='accordion-collapse collapse'
              aria-labelledby='headingFour'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p>
                  Este diálogo se llevó a cabo el día 20 de julio de 2022, las
                  palabras de bienvenida y de inauguración estuvieron a cargo de
                  Álvaro Zapata (Coordinador Universidad Indígena Intercultural
                  del Fondo para el Desarrollo de los Pueblos Indígenas de
                  América Latina y el Caribe), Luciana Mermet (Representante
                  Residente del PNUD en Bolivia) y Olmer Torrejón Alcoba
                  (Director General de Relaciones Multilaterales). Participaron
                  además representantes de Organismos Internacionales de
                  financiamiento y representantes del Ministerio de Economía y
                  del Ministerio de Planificación del Desarrollo.
                </p>
                <ul className='list-group list-group-borderless'>
                  <li className='list-group-item'>
                    <i className='fa fa-link fa-fw text-info'></i>{" "}
                    <a
                      href='https://drive.google.com/file/d/1wjIU-O0gRIjRQI6g5IF8C4f7MDY74ZeG/view?usp=sharing'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Accede al Resumen de este diálogo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <p className='accordion-header' id='headingFive'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseFive'
                aria-expanded='false'
                aria-controls='collapseFive'
              >
                <h2> Diálogo con el Pacto de Unidad</h2>
              </button>
            </p>
            <div
              id='collapseFive'
              className='accordion-collapse collapse'
              aria-labelledby='headingFive'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p>
                  En fecha 22 de julio de 2022, en la Cancillería de Bolivia, se
                  llevó a cabo el diálogo con el Pacto de la Unidad, donde
                  estuvieron presentes representantes de las organizaciones
                  sociales del Pacto de Unidad, quienes abordaron las 5 Vías de
                  Acción y generaron interesantes propuestas junto a
                  representantes del Instituto Plurinacional de Estudio de
                  Lenguas y Cultura.
                </p>
                <ul className='list-group list-group-borderless'>
                  <li className='list-group-item'>
                    <i className='fa fa-link fa-fw text-info'></i>{" "}
                    <a
                      href='https://drive.google.com/file/d/1IEUI56lMieShxQESXj7MFk1O6O7s5spD/view?usp=sharing'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Accede al Resumen de este diálogo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <p className='accordion-header' id='headingSix'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseSix'
                aria-expanded='false'
                aria-controls='collapseSix'
              >
                <h2> Diálogo con organizaciones de la juventud </h2>
              </button>
            </p>
            <div
              id='collapseSix'
              className='accordion-collapse collapse'
              aria-labelledby='headingSix'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p>
                  El 27 de julio de 2022, en instalaciones del Ministerio de
                  Justicia, se llevó a cabo este diálogo con representantes de
                  distintas organizaciones de la juventud a través del Consejo
                  Plurinacional de la Juventud. En el evento estuvieron
                  presentes Freddy Mamani (Vicecanciller del Estado), Kelly
                  Aruquipa (Directora Plurinacional de la Juventud) y Rafael
                  Ramirez (Representante de UNICEF Bolivia), en el evento se
                  abordaron las 5 vías de acción en diferentes mesas de trabajo.
                </p>
                <ul className='list-group list-group-borderless'>
                  <li className='list-group-item'>
                    <i className='fa fa-link fa-fw text-info'></i>{" "}
                    <a
                      href='https://drive.google.com/file/d/1gf_eTgvkrkwUMc1YZc1W_AHvmrQ0ucj0/view?usp=sharing'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Accede al Resumen de este diálogo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className='accordion-item'>
            <p className='accordion-header' id='headingSeven'>
              <button
                className='accordion-button collapsed'
                type='button'
                data-bs-toggle='collapse'
                data-bs-target='#collapseSeven'
                aria-expanded='false'
                aria-controls='collapseSeven'
              >
                <h2> Consulta de U-Report </h2>
              </button>
            </p>
            <div
              id='collapseSeven'
              className='accordion-collapse collapse'
              aria-labelledby='headingSeven'
              data-bs-parent='#accordionExample'
            >
              <div className='accordion-body'>
                <p>
                  La consulta se realizó a 1.148 adolescentes y jóvenes
                  estudiantes entre 14 a 28 años durante del 1 al 8 de junio de
                  2022. De ellos el 66% fueron mujeres. El grupo etario con
                  mayor participación fueron los y las estudiantes de 15 a 19
                  años (51%), seguidos de los de 14 años (29%). Participaron de
                  los nueve departamentos del país, con mayor preponderancia de
                  Potosí y Santa Cruz; seguidos de La Paz, Oruro y Cochabamba,
                  tanto de áreas urbanas como rurales.
                </p>
                <ul className='list-group list-group-borderless'>
                  <li className='list-group-item'>
                    <i className='fa fa-link fa-fw text-info'></i>{" "}
                    <a
                      href='https://drive.google.com/file/d/1EdENLh15Z8dShsLOdStxFYIe10qjsJgs/view?usp=sharing'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Accede al Resumen de la Consulta de U-Report
                    </a>
                  </li>
                  <li className='list-group-item'>
                    <i className='fa fa-link fa-fw text-info'></i>{" "}
                    <a
                      href='https://drive.google.com/file/d/1AHKU9SBH1he7baVcFZmuAbdPUMu8VtHC/view?usp=sharing'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Accede al Informe completa de la Consulta de U-Report
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionAccordion;
