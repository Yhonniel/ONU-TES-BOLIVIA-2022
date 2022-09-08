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
      <section className='pb-3'>
        <div className='container'>
          <div className='row'>
            {/* <!-- column 1 --> */}
            <div className='col-md-4'>
              {/* <!-- title --> */}

              <h2 className='h1'>
                Cumbre de las Naciones Unidas para la Transformación de la
                Educación
              </h2>
              <p>
                La Cumbre cuenta con 5 Vías de Acción que están centradas en
                áreas específicas que necesitan atención, las cuales son
                fundamentales para transformar la educación. Las vías de acción
                se guían por la Agenda 2030 y sus objetivos y metas relacionados
                con la educación, concretamente el Objetivo de Desarrollo
                Sostenible 4 (ODS 4): garantizar una educación inclusiva,
                equitativa y de calidad y promover oportunidades de aprendizaje
                durante toda la vida para todos.
              </p>
              {/* <!-- service item --> */}
              <div className='bg-light p-4 p-lg-5 '>
                <span className='display-5 icon-primary'>
                  <i className='ti-ruler-pencil'></i>
                </span>
                <h5>
                  {" "}
                  1. Escuelas inclusivas, equitativas, seguras y saludables
                </h5>
                <p className='mb-0'>
                  La educación está en crisis. Los altos índices de pobreza,
                  exclusión y desigualdad de género siguen impidiendo el
                  aprendizaje de millones de personas. Además, la COVID-19 puso
                  de manifiesto las desigualdades en el acceso y la calidad de
                  la educación.
                </p>
              </div>
            </div>

            {/* <!-- column 2 --> */}
            <div className='col-md-4 mt-5'>
              {/* <!-- service item --> */}
              <div className='bg-light p-4 p-lg-5 mb-5'>
                <span className='display-5'>
                  <i className='ti-pencil-alt'></i>
                </span>
                <h5>
                  2. Aprendizaje y competencias para la vida, el trabajo y el
                  desarrollo sostenible
                </h5>
                <p className='mb-0'>
                  Existe una crisis en el aprendizaje de destrezas básicas,
                  alfabetización y habilidades numéricas entre los jóvenes. En
                  2020 más de 770 millones de personas siguen careciendo de
                  aptitudes de alfabetización básica, de las cuales dos tercios
                  son mujeres.
                </p>
              </div>
              {/* <!-- service item --> */}
              <div className='bg-light p-4 p-lg-5 mb-5'>
                <span className='display-5 text-warning'>
                  <i className='ti-image'></i>
                </span>
                <h5>3. Docentes, enseñanza y profesión docente</h5>
                <p className='mb-0'>
                  Los profesores son esenciales para lograr los resultados de
                  aprendizaje, el ODS 4 y la transformación de la educación. Sin
                  embargo, tanto los profesores como el resto del personal
                  educativo se enfrentan a cuatro grandes retos.
                </p>
              </div>
            </div>

            {/* <!-- column 3 --> */}
            <div className='col-md-4'>
              {/* <!-- service item --> */}
              <div className='bg-light p-4 p-lg-5 mb-5'>
                <span className='display-5 text-info'>
                  <i className='ti-world icon-primary'></i>
                </span>
                <h5>4. Aprendizaje y transformación digital</h5>
                <p className='mb-0'>
                  La crisis de COVID-19 impulsó innovaciones sin precedentes en
                  la enseñanza a distancia mediante el aprovechamiento de las
                  tecnologías digitales.Estas desigualdades en el acceso
                  implicaron la exclusión de las oportunidades de aprendizaje de
                  algunos grupos, como las mujeres jóvenes y las niñas.
                </p>
              </div>
              {/* <!-- service item --> */}
              <div className='bg-light p-4 p-lg-5 mb-5'>
                <span className='display-5 text-primary'>
                  <i className='ti-wallet'></i>
                </span>
                <h5>5. Financiación de la educación</h5>
                <p className='mb-0'>
                  Aunque el gasto mundial en educación ha crecido en general,
                  este no ha resultado fructífero debido al elevado crecimiento
                  de la población, los costes desorbitados de la gestión de la
                  educación durante la pandemia de COVID-19 y el desvío de la
                  ayuda a otras emergencias, lo que ha dejado un enorme déficit
                  financiero mundial en esta materia educativa.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-lg-8 mx-auto text-center mt-5'>
            <h6>
              Conoce cómo La Cumbre ofrece una oportunidad única para elevar la
              educación a la cima de la agenda política mundial y movilizar la
              acción, la aspiración, la solidaridad y las soluciones necesarias
              para recuperar las pérdidas de aprendizaje.
            </h6>
            <a
              target={"_blank"}
              className='btn btn-grad'
              href='https://www.un.org/es/transforming-education-summit'
            >
              Vámos
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default SobreLaCumbre;
