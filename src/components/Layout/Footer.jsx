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
                  <img src='/logo2on.png' alt='logo' />

                  {/* <!-- SVG Logo End --> */}
                </a>

                <p className='mt-3'>
                  Portal Web informativo sobre el proceso del Estado
                  Plurinacional de Bolivia rumbo a la Cumbre de las Naciones
                  Unidas sobre la transformación de la Educación 2022.
                </p>
                {/* <!-- contact inf--> */}
                <ul className='p-0 list-inline'>
                  <li className='list-inline-item me-4'>
                    <a
                      target={"_blank"}
                      rel='noopener'
                      href='https://twitter.com/ONU_es'
                    >
                      <i className='me-1 ti-twitter-alt'></i>
                    </a>
                  </li>
                  <li className='list-inline-item me-4'>
                    <a
                      target={"_blank"}
                      rel='noreferer'
                      href='https://www.facebook.com/nacionesunidas'
                    >
                      <i className='me-1 ti-facebook'></i>
                    </a>
                  </li>
                  <li className='list-inline-item me-4'>
                    <a
                      target={"_blank"}
                      rel='noreferer'
                      href='https://www.instagram.com/nacionesunidas/'
                    >
                      <i className='me-1 ti-instagram'></i>
                    </a>
                  </li>
                  <li className='list-inline-item me-4'>
                    <a
                      target={"_blank"}
                      rel='noreferer'
                      href='https://www.youtube.com/user/NacionesUnidasVideo'
                    >
                      <i className='me-1 ti-youtube'></i>
                    </a>
                  </li>
                </ul>
                <div className='divider my-3'></div>
                {/* <!-- footer links --> */}
                <div className='copyright-links my-2'>
                  <ul className='list-inline'>
                    <li className='list-inline-item ps-2'>
                      <a
                        className='list-group-item-action'
                        href='https://www.un.org/es/contact-us-0'
                        target={"_blank"}
                        rel='noreferer'
                      >
                        Contacto
                      </a>
                    </li>
                    <li className='list-inline-item ps-2'>
                      <a
                        className='list-group-item-action'
                        href='https://www.un.org/es/about-us/privacy-notice'
                        target={"_blank"}
                        rel='noreferer'
                      >
                        Privacidad
                      </a>
                    </li>

                    <li className='list-inline-item ps-2'>
                      <a
                        className='list-group-item-action pe-0'
                        href='https://www.un.org/es/contact-us-0'
                        target={"_blank"}
                        rel='noreferer'
                      >
                        Información
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- copyright text --> */}
                <div className='copyright-text'>
                  © Derechos reservados 2022{" "}
                  <a
                    target={"_blank"}
                    rel='noreferer'
                    href='https://www.un.org/es/'
                  >
                    {" "}
                    Naciones Unidas
                  </a>{" "}
                  en Bolivia.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
