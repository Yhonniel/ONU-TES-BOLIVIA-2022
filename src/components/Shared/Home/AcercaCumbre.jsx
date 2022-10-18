import React from "react";

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
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-10 col-lg-6 mx-md-auto align-self-center position-relative'>
            <img
              className='rounded'
              src='images/cumbre/ministro.jpg'
              alt='img'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AcercaCumbre;
