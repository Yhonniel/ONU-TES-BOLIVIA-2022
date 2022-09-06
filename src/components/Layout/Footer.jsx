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
                <a href='index.html' className='footer-logo mb-3 d-block'>
                  {/* <!-- SVG Logo Start --> */}
                  <img src='/logo2on.png' alt='' />

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
                    <i className='me-1 ti-twitter-alt'></i>@onu
                  </li>
                  <li className='list-inline-item me-4'>
                    <i className='me-1 ti-facebook'></i>
                    UNU PAGE
                  </li>
                  <li className='list-inline-item me-4'>
                    <i className='me-1 ti-email'></i>{" "}
                    <a href=''>help@onu.com</a>{" "}
                  </li>
                </ul>
                <div className='divider my-3'></div>
                {/* <!-- footer links --> */}
                <div className='copyright-links my-2'>
                  <ul className='list-inline'>
                    <li className='list-inline-item ps-2'>
                      <a className='list-group-item-action' href='#'>
                        Contacto
                      </a>
                    </li>
                    <li className='list-inline-item ps-2'>
                      <a className='list-group-item-action' href='#'>
                        Privacidad
                      </a>
                    </li>
                    <li className='list-inline-item ps-2'>
                      <a className='list-group-item-action' href='#'>
                        Politicas
                      </a>
                    </li>
                    <li className='list-inline-item ps-2'>
                      <a className='list-group-item-action' href='#'>
                        Terminos
                      </a>
                    </li>
                    <li className='list-inline-item ps-2'>
                      <a className='list-group-item-action pe-0' href='#'>
                        Información
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- copyright text --> */}
                <div className='copyright-text'>
                  © Derechos de autor 2022 <a href='#!'> Naciones Unidas</a> en
                  Bolivia.
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
