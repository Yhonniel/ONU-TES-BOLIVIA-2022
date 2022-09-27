import React from "react";
import "../Shared/index.css";

const HeroHome = () => {
  return (
    <section className='p-0 mb-0'>
      <div className='tiny-slider arrow-dark arrow-large arrow-transparent arrow-hover'>
        <div
          className='tiny-slider-inner h-400 h-lg-700'
          data-arrow='false'
          data-autoplay='false'
          data-items='1'
          data-dots='false'
        >
          {/* <!-- slide 1--> */}
          <div className='h-100 slider1'>
            <div className='container h-100'>
              <div className='row d-flex h-100'>
                <div className='col-lg-8 col-xl-6 me-auto slider-content justify-content-center align-self-center align-items-start text-start'>
                  <h2 className='animate__animated animate__fadeInUp animate__delay-1s display-2 fw-bold text-white'>
                    Bolivia en la Cumbre
                  </h2>

                  <h3 className='animate__animated animate__fadeInUp animate__delay-2s text-white display-7 mb-2 my-md-4'>
                    Educación inclusiva, equitativa y de calidad.
                  </h3>
                  <div className='animate__animated animate__fadeInUp animate__delay-3s mt-3 dealy-1500'>
                    <a href='/bolivia-en-la-cumbre' className='btn btn-grad'>
                      Ver más
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- slide 2--> */}
          <div className='h-100 slider2'>
            <div className='container h-100'>
              <div className='row d-flex h-100'>
                <div className='col-lg-8 col-xl-6 me-auto slider-content justify-content-center align-self-center align-items-start text-start'>
                  <h2 className='animate__animated animate__fadeInUp animate__delay-1s display-2 fw-bold text-white'>
                    Somos la Cumbre
                  </h2>
                  <div className='animate__animated animate__fadeInUp animate__delay-3s mt-3 dealy-1500'>
                    <a href='/sobre-la-cumbre' className='btn btn-grad'>
                      Información
                    </a>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- slide 3--> */}
          <div className='h-100 slider3'>
            <div className='container h-100'>
              <div className='row d-flex h-100'>
                <div className='col-lg-8 col-xl-6 me-auto slider-content justify-content-center align-self-center align-items-start text-start'>
                  <h2 className='animate__animated animate__fadeInUp animate__delay-1s display-2 fw-bold text-white'>
                    Estamos aquí
                  </h2>
                  <div className='animate__animated animate__fadeInUp animate__delay-3s mt-3 dealy-1500'>
                    <a href='/dialogos-y-consultas' className='btn btn-grad'>
                      Ver más
                    </a>{" "}
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

export default HeroHome;
