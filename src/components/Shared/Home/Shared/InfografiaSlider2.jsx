import React from "react";
import "../../index.css";

const InfografiaSlider2 = () => {
  return (
    <div className='col-md-12 mx-auto'>
      <div className='post-item'>
        <div className='post-item-wrap'>
          <div className='post-image tiny-slider testi-full dots-dark'>
            <div
              className='tiny-slider-inner'
              data-arrow='false'
              data-items='1'
              data-autoplay='3800'
            >
              <div className='item'>
                <div className='testimonials-wrap'>
                  <img src='/images/infografias/B.png' alt='infografias' />{" "}
                </div>
              </div>
              <div className='item'>
                <div className='testimonials-wrap'>
                  <img src='/images/infografias/C.png' alt='infografias' />{" "}
                </div>
              </div>
              <div className='item'>
                <div className='testimonials-wrap'>
                  <img src='/images/infografias/D.png' alt='infografias' />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfografiaSlider2;
