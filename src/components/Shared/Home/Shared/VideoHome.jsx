import React from "react";

const VideoHome = () => {
  return (
    <div className='col-md-8 mx-auto'>
      <div className='post-item'>
        <div className='post-item-wrap'>
          <div className='post-image testi-full dots-dark'>
            <div>
              <div className='item'>
                <div className='testimonials-wrap'>
                  <img
                    className='rounded'
                    src='images/cumbre/secretario-onu.png'
                    alt='img'
                  />
                  <div className='position-absolute start-0 bottom-0 ms-4 ms-md-n2 mb-3'>
                    <a
                      className='btn btn-grad'
                      data-glightbox
                      href='https://www.youtube.com/watch?v=J_wmZVM42bc'
                    >
                      {" "}
                      <i className='fa fa-play text-white'></i>Mira el Video{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoHome;
