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
                >
                  <a href="/bolivia-en-la-cumbre" className="text-white">Más información</a>

                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoliviaCumbre;
