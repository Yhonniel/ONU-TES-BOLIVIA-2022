import React from "react";

const Intituciones = () => {
  return (
    <section className='client '>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h5 className='mb-5 text-center'>Instituciones Participantes</h5>
            <div className='tiny-slider arrow-hover arrow-dark'>
              <div
                className='tiny-slider-inner'
                data-arrow='true'
                data-dots='false'
                data-autoplay='3800'
                data-gutter='80'
                data-items-xl='6'
                data-items-lg='5'
                data-items-md='4'
                data-items-sm='3'
                data-items-xs='3'
              >
                <div className='item'>
                  <img src='/images/instituciones/onu-black.png' alt='' />
                </div>
                <div className='item'>
                  <img src='/images/instituciones/onu-black.png' alt='' />
                </div>
                <div className='item'>
                  <img src='/images/instituciones/onu-black.png' alt='' />
                </div>
                <div className='item'>
                  <img src='/images/instituciones/onu-black.png' alt='' />
                </div>
                <div className='item'>
                  <img src='/images/instituciones/onu-black.png' alt='' />
                </div>
                <div className='item'>
                  <img src='/images/instituciones/onu-black.png' alt='' />
                </div>
                <div className='item'>
                  <img src='/images/instituciones/onu-black.png' alt='' />
                </div>
                <div className='item'>
                  <img src='/images/instituciones/onu-black.png' alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intituciones;
