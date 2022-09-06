import React from "react";

const SectionDialogos = () => {
  return (
    <section className='mb-5 py-0 mt-3'>
      <div className='container'>
        <div className='row justify-content-between align-items-center'>
          {/* <!-- left --> */}
          <div className='col-md-6'>
            <div className='row mt-4 mt-md-0'>
              <div className='col-5 offset-1 px-2 mb-3 align-self-end'>
                <img
                  className='rounded aos'
                  data-aos='fade-up'
                  data-aos-delay='200'
                  data-aos-duration='1000'
                  data-aos-easing='ease-in-out'
                  src='/images/cumbre/5.jpg'
                  alt=''
                />
              </div>
              <div className='col-6 px-2 mb-3'>
                <img
                  className='rounded aos'
                  data-aos='fade-right'
                  data-aos-delay='200'
                  data-aos-duration='1000'
                  src='/images/cumbre/6.jpeg'
                  alt=''
                />
              </div>
              <div className='col-7 px-2 mb-3'>
                <div
                  className='rounded aos bg-grad p-2 p-sm-3 p-lg-4 p-xl-5 all-text-white'
                  data-aos='fade-left'
                  data-aos-delay='300'
                  data-aos-duration='1500'
                >
                  <h4>Bolivia!</h4>
                  <h3 className='fw-bold'>Transformando la educación</h3>
                </div>
              </div>
              <div className='col-5 align-self-start ps-2 mb-3'>
                <img
                  className='rounded aos'
                  data-aos='fade-down'
                  data-aos-delay='300'
                  data-aos-duration='1500'
                  src='/images/cumbre/7.jpeg'
                  alt=''
                />
              </div>
            </div>
          </div>
          {/* <!-- right --> */}
          <div className='col-md-6 ps-lg-5'>
            <h2 className='h1'>Participación de Bolivia en la Cumbre</h2>
            <p className='lead'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
              molestiae pariatur commodi, eius ad ea libero doloribus
              exercitationem quaerat ex in id nostrum nisi eum tempore animi,
              sit sed quisquam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
              maiores quo, debitis non inventore sunt praesentium enim ex rerum,
              pariatur soluta incidunt sit odit libero in optio fugiat dicta
              facere?
            </p>
            <div>
              <a href='#' className='btn btn-sm btn-grad text-white mb-0'>
                Lorem ipsum
              </a>
              <a href='#' className='btn btn-link'>
                Lorem ipsum
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionDialogos;
