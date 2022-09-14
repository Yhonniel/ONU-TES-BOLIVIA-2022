import React from "react";

const InfografiaSlider1 = () => {
  return (
    <section>
      <div className='container'>
        <div className='col-12 mb-6'>
          <div className='tiny-slider'>
            <div
              className='tiny-slider-inner'
              data-autoplay='false'
              data-gutter='30'
              data-arrow='false'
              data-dots='false'
              data-items-xl='1'
              data-items-md='2'
              data-items-sm='2'
              data-items-xs='1'
            >
              {/* <!-- Slider items --> */}
              <div className='item'>
                {" "}
                <div className='p-8 bg-light'>
                  <img
                    className='position-absolute top-50 start-50 translate-middle'
                    src='/images/infografias/infografia-1.png'
                  />
                </div>{" "}
              </div>
              <div className='item'>
                {" "}
                <div className='p-8 bg-light'>
                  <img
                    className='position-absolute top-50 start-50 translate-middle'
                    src='/images/infografias/infografia-2.png'
                  />
                </div>{" "}
              </div>
              <div className='item'>
                {" "}
                <div className='p-8 bg-light'>
                  <img
                    className='position-absolute top-50 start-50 translate-middle'
                    src='/images/infografias/infografia-3.png'
                  />
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfografiaSlider1;
