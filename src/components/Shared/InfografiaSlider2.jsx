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
                  <span className=''>Agenda 2030: Objetivos y metas </span>
                  <h3>
                    Apegados al ODS 4: Garantizar una educación inclusiva,
                    equitativa y de calidad.
                  </h3>
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
                            src='/images/infografias/infografia-1.png'
                            alt='infografias'
                          />{" "}
                        </div>
                      </div>
                      {/* <!-- testimonial item --> */}
                      <div className='item'>
                        <div className='testimonials-wrap'>
                          {" "}
                          <img
                            src='/images/infografias/infografia-2.png'
                            alt='infografias'
                          />{" "}
                        </div>
                      </div>
                      {/* <!-- testimonial item --> */}
                      <div className='item'>
                        <div className='testimonials-wrap'>
                          {" "}
                          <img
                            src='/images/infografias/infografias-4.png'
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
            <div className='col-lg-6 d-none d-lg-block bg-light p-0 img-home-3'></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InfografiaSlider2;
