import React from "react";
import "../Shared/index.css";

const InfografiaSlider2 = () => {
  return (
    <>
      <section className='blog-page py-5'>
        <div className='container'>
          <div className='col-md-8 mx-auto'>
            <div className='post-item'>
              <div className='post-item-wrap'>
                <div className='post-item-desc'>
                  <blockquote class='blockquote primary-line' cite='#'>
                    <h3>
                      Garantizar una educación inclusiva, equitativa y de
                      calidad y promover oportunidades de aprendizaje durante
                      toda la vida para todos.
                    </h3>
                  </blockquote>
                </div>

                <div className='post-image tiny-slider testi-full dots-dark'>
                  <div
                    className='tiny-slider-inner'
                    data-arrow='false'
                    data-items='1'
                    data-autoplay='3800'
                  >
                    <div className='item'>
                      <div className='testimonials-wrap'>
                        <img
                          src='/images/infografias/B.png'
                          alt='infografias'
                        />{" "}
                      </div>
                    </div>
                    <div className='item'>
                      <div className='testimonials-wrap'>
                        <img
                          src='/images/infografias/C.png'
                          alt='infografias'
                        />{" "}
                      </div>
                    </div>
                    <div className='item'>
                      <div className='testimonials-wrap'>
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
        </div>
      </section>
    </>
  );
};

export default InfografiaSlider2;
