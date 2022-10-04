import React from "react";
import "../Shared/index.css";

const InfografiaSlider2 = () => {
  return (
    <>
      <section className='mb-5 py-0 mt-5'>
        <div className='container'>
          <div className='row testimonials'>
            {/* <!--testimonials left--> */}
            <div className='col-lg-6 col-md-12 px-4 py-5 p-lg-5'>
              <div className='h-100'>
                <div className='title p-0'>
                  <span className=''>Objetivo de Desarrollo Sostenible 4 </span>
                  <h4>
                    Garantizar una educación inclusiva, equitativa y de calidad
                    y promover oportunidades de aprendizaje durante toda la vida
                    para todos.
                  </h4>
                </div>
                <div className='row'>
                  <div className='tiny-slider testi-full dots-dark'>
                    <div
                      className='tiny-slider-inner'
                      data-arrow='false'
                      data-items='1'
                      data-autoplay='3800'
                    >
                      {/* <!-- testimonial item --> */}
                      <div className='item'>
                        <div className='testimonials-wrap'>
                          {" "}
                          <img
                            src='/images/infografias/B.png'
                            alt='infografias'
                          />{" "}
                        </div>
                      </div>
                      <div className='item'>
                        <div className='testimonials-wrap'>
                          {" "}
                          <img
                            src='/images/infografias/C.png'
                            alt='infografias'
                          />{" "}
                        </div>
                      </div>
                      <div className='item'>
                        <div className='testimonials-wrap'>
                          {" "}
                          <img
                            src='/images/infografias/D.png'
                            alt='infografias'
                          />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!--testimonials right--> */}
            <div className='col-lg-6 d-none d-lg-block'>
              <img
                className='img-home-3'
                src='/images/infografias/A.png'
                alt='img'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfografiaSlider2;
