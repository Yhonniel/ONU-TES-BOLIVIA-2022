import React from "react";
import CallToActionImage from "../DialogosConsultas/CallToActionImage";
import "../index.css";

const HeroHome = () => {
  return (
    <section className='p-0 mb-0'>
      <div className='tiny-slider arrow-dark arrow-large arrow-transparent arrow-hover'>
        <div
          className='tiny-slider-inner h-400 h-lg-700'
          data-arrow='true'
          data-autoplay='true'
          data-items='1'
          data-dots='false'
        >
          {/* <!-- slide 1--> */}
          <div className='h-100 slider1'>
            <div className='container h-100'>
              <div className='row d-flex h-100'>
                <div className='col-lg-8 col-xl-6 me-auto slider-content justify-content-center align-self-center align-items-start text-start'>
                  <h3 className='animate__animated animate__fadeInUp animate__delay-1s display-5 fw-bold text-white'>
                    Bolivia en la Cumbre
                  </h3>

                  <h3 className='animate__animated animate__fadeInUp animate__delay-2s text-white display-7 mb-2 my-md-4'>
                    Hacia una educación intracultural, intercultural y
                    plurilingüe.
                  </h3>
                  <div className='animate__animated animate__fadeInUp animate__delay-3s mt-3 dealy-1500'>
                    <a href='/bolivia-en-la-cumbre' className='btn btn-grad'>
                      Más Información
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- slide 2--> */}
          <div className='h-100 slider3'>
            <div className='container h-100'>
              <div className='row d-flex h-100'>
                <div className='col-lg-8 col-xl-6 me-auto slider-content justify-content-center align-self-center align-items-start text-start'>
                  <h3 className='animate__animated animate__fadeInUp animate__delay-1s display-5 fw-bold text-white'>
                    Diálogos y Consultas Nacionales
                  </h3>
                  <div className='animate__animated animate__fadeInUp animate__delay-3s mt-3 dealy-1500'>
                    <a href='/dialogos-y-consultas' className='btn btn-grad'>
                      Más Información
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- slide 3--> */}
          <div className='h-100 slider2'>
            <div className='container h-100'>
              <div className='row d-flex h-100'>
                <div className='col-lg-8 col-xl-6 me-auto slider-content justify-content-center align-self-center align-items-start text-start'>
                  <h3 className='animate__animated animate__fadeInUp animate__delay-1s display-5 fw-bold text-white'>
                    La Cumbre sobre la Transformación de la Educación
                  </h3>
                  <div className='animate__animated animate__fadeInUp animate__delay-3s mt-3 dealy-1500'>
                    <a href='/sobre-la-cumbre' className='btn btn-grad'>
                      Más Información
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- slide 4--> */}
          <div className='h-100 slider4'>
            <div className='container h-100'>
              <div className='row d-flex h-100'>
                <div className='col-lg-8 col-xl-6 me-auto slider-content justify-content-center align-self-center align-items-start text-start'>
                  <h3 className='animate__animated animate__fadeInUp animate__delay-1s display-5 fw-bold text-white'>
                    Bolivia en la Cumbre
                  </h3>

                  <h3 className='animate__animated animate__fadeInUp animate__delay-2s text-white display-7 mb-2 my-md-4'>
                    Hacia una educación intracultural, intercultural y
                    plurilingüe.
                  </h3>
                  <div className='animate__animated animate__fadeInUp animate__delay-3s mt-3 dealy-1500'>
                    <a href='/bolivia-en-la-cumbre' className='btn btn-grad'>
                      Más Información
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- slide 5--> */}
          <div className='h-100 slider5'>
            <div className='container h-100'>
              <div className='row d-flex h-100'>
                <div className='col-lg-8 col-xl-6 me-auto slider-content justify-content-center align-self-center align-items-start text-start'>
                  <h3 className='animate__animated animate__fadeInUp animate__delay-1s display-5 fw-bold text-white'>
                    Diálogos y Consultas Nacionales
                  </h3>
                  <div className='animate__animated animate__fadeInUp animate__delay-3s mt-3 dealy-1500'>
                    <a href='/dialogos-y-consultas' className='btn btn-grad'>
                      Más Información
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        {/* <!-- slide 6--> */}
        <div className='h-100 slider6'>
            <div className='container h-100'>
              <div className='row d-flex h-100'>
                <div className='col-lg-8 col-xl-6 me-auto slider-content justify-content-center align-self-center align-items-start text-start'>
                  <h3 className='animate__animated animate__fadeInUp animate__delay-1s display-5 fw-bold text-white'>
                    La Cumbre sobre la Transformación de la Educación
                  </h3>
                  <div className='animate__animated animate__fadeInUp animate__delay-3s mt-3 dealy-1500'>
                    <a href='/sobre-la-cumbre' className='btn btn-grad'>
                      Más Información
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='position-absolute  start-0 w-100 d-md-block mb-n3'>
        <svg
          width='100%'
          height='150'
          viewBox='0 0 500 150'
          preserveAspectRatio='none'
        >
          <path d='M0,150 L0,40 Q250,150 500,40 L580,150 Z' fill='white' />
        </svg>
      </div>

      <CallToActionImage></CallToActionImage>
    </section>
  );
};

export default HeroHome;
