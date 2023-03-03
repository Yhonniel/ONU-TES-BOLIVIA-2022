import React from "react";

const VideoHome1 = () => {
  return (
    <div className='col-md-12 mx-auto'>
      <div className='post-item'>
        <div className='post-item-wrap'>
          <div className='post-image'>
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
                    href='https://youtu.be/IdiurYexVQg'
                     target="_blank"
                     rel="noopener noreferrer"
                    className='btn btn-grad'
                    >
                     <div className='row'>
                    <i className='fa fa-play text-white'></i> 
                    </div>
                    </a>
                  </div>
                  
                </div>
                
              </div>
              
            </div>
            
          </div>
          <div className="row mt-2">
            
          <span className="text-muted small text-center">Mensaje del Secretario General de la ONU <br /> en el marco de la Pre-Cumbre.</span>
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default VideoHome1;
