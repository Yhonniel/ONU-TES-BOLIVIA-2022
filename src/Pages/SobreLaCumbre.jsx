import React from "react";

const SobreLaCumbre = () => {
  return (
    <>
      <div class='left bg-grad pattern-overlay-4'>
        <div class='container'>
          <div class='row all-text-white'>
            <div class='col-md-12 align-self-center position-relative'>
              <h1 class='fw-bold display-1 mb-2 mb-md-n4 mt-9'>
                Sobre La Cumbre
              </h1>
            </div>
          </div>
        </div>
      </div>
      <section class='pb-3'>
        <div class='container'>
          <div class='row'>
            {/* <!-- column 1 --> */}
            <div class='col-md-4'>
              {/* <!-- title --> */}

              <h2 class='h1'>
                Cumbre de las Naciones Unidas para la Transformación de la
                Educación
              </h2>
              <p>
                La Cumbre cuenta con 5 Vías de Acción que están centradas en
                áreas específicas que necesitan atención, las cuales son
                fundamentales para transformar la educación. Mediante las vías
                de acción se tratará de movilizar nuevos compromisos, destacando
                las intervenciones políticas que funcionan y aprovechando las
                iniciativas y asociaciones existentes.
              </p>
              {/* <!-- service item --> */}
              <div class='bg-light p-4 p-lg-5 '>
                <span class='display-5 icon-primary'>
                  <i class='ti-ruler-pencil'></i>
                </span>
                <h5>Escuelas inclusivas, equitativas, seguras y saludables</h5>
                <p class='mb-0'>
                  La educación está en crisis. Los altos índices de pobreza,
                  exclusión y desigualdad de género siguen impidiendo el
                  aprendizaje de millones de personas. Además, la COVID-19 puso
                  de manifiesto las desigualdades en el acceso y la calidad de
                  la educación.
                </p>
              </div>
            </div>

            {/* <!-- column 2 --> */}
            <div class='col-md-4 mt-5'>
              {/* <!-- service item --> */}
              <div class='bg-light p-4 p-lg-5 mb-5'>
                <span class='display-5 icon-primary'>
                  <i class='ti-pencil-alt'></i>
                </span>
                <h5>
                  Aprendizaje y competencias para la vida, el trabajo y el
                  desarrollo sostenible
                </h5>
                <p class='mb-0'>
                  Existe una crisis en el aprendizaje de destrezas básicas,
                  alfabetización y habilidades numéricas entre los jóvenes. En
                  2020 más de 770 millones de personas siguen careciendo de
                  aptitudes de alfabetización básica, de las cuales dos tercios
                  son mujeres.
                </p>
              </div>
              {/* <!-- service item --> */}
              <div class='bg-light p-4 p-lg-5 mb-5'>
                <span class='display-5 icon-primary'>
                  <i class='ti-image'></i>
                </span>
                <h5>Docentes, enseñanza y profesión docente</h5>
                <p class='mb-0'>
                  Los profesores son esenciales para lograr los resultados de
                  aprendizaje, el ODS 4 y la transformación de la educación. Sin
                  embargo, tanto los profesores como el resto del personal
                  educativo se enfrentan a cuatro grandes retos.
                </p>
              </div>
            </div>

            {/* <!-- column 3 --> */}
            <div class='col-md-4'>
              {/* <!-- service item --> */}
              <div class='bg-grad all-text-white p-4 p-lg-5 mb-5'>
                <span class='display-5'>
                  <i class='ti-world icon-white'></i>
                </span>
                <h5>Aprendizaje y transformación digital</h5>
                <p class='mb-0'>
                  La crisis de COVID-19 impulsó innovaciones sin precedentes en
                  la enseñanza a distancia mediante el aprovechamiento de las
                  tecnologías digitales.Estas desigualdades en el acceso
                  implicaron la exclusión de las oportunidades de aprendizaje de
                  algunos grupos, como las mujeres jóvenes y las niñas.
                </p>
              </div>
              {/* <!-- service item --> */}
              <div class='bg-light p-4 p-lg-5 mb-5'>
                <span class='display-5 icon-primary'>
                  <i class='ti-wallet'></i>
                </span>
                <h5>Financiación de la educación</h5>
                <p class='mb-0'>
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
        <div class='row'>
          <div class='col-12 col-lg-8 mx-auto text-center mt-5'>
            <h6>
              Conoce cómo La Cumbre ofrece una oportunidad única para elevar la
              educación a la cima de la agenda política mundial y movilizar la
              acción, la aspiración, la solidaridad y las soluciones necesarias
              para recuperar las pérdidas de aprendizaje.
            </h6>
            <a
              target={"_blank"}
              class='btn btn-grad'
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
