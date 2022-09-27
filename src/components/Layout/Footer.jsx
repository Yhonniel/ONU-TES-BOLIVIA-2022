import React from "react";

const Footer = () => {
  return (
    <footer className='footer bg-light'>
      <div className='footer-content'>
        <div className='container'>
          <div className='row'>
            {/* <!-- Footer widget 1 --> */}
            <div className='col-md-8 mx-auto'>
              <div className='widget text-center mt-5'>
                <a href='/' className='footer-logo mb-3 d-block'>
                  {/* <!-- SVG Logo Start --> */}
                  <img src='/logoCumbre.png' alt='logo' />

                  {/* <!-- SVG Logo End --> */}
                </a>

                <p className='mt-3'>
                  Portal Web informativo sobre el proceso del Estado
                  Plurinacional de Bolivia rumbo a la Cumbre de las Naciones
                  Unidas sobre la Transformación de la Educación 2022.
                </p>

                <div className='divider my-3'></div>

                <div className='copyright-text'>© Derechos reservados 2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
