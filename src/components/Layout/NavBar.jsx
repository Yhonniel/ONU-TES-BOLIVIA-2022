import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className='header-static navbar-sticky navbar-light shadow'>
      {/* <!-- Logo Nav Start --> */}
      <nav className='navbar navbar-expand-lg '>
        <div className='container-fluid'>
          {/* <!-- Logo --> */}
          <a className='navbar-brand' href='/'>
            {/* <!-- Logo --> */}
            <img className='navbar-brand-item' src='/logo2on.png' alt='Logo' />
          </a>
          {/* <!-- Menu opener button --> */}
          <button
            className='navbar-toggler ms-auto'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarCollapse'
            aria-controls='navbarCollapse'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          {/* <!-- Main Menu Start --> */}
          <div className='collapse navbar-collapse' id='navbarCollapse'>
            <ul className='navbar-nav navbar-nav-scroll navbar-nav-scroll ms-auto'>
              {/* <!-- Menu item 1 Demos--> */}
              <li className='nav-item dropdown'>
                <a className='nav-link' href='/sobre-la-cumbre'>
                  SOBRE LA CUMBRE
                </a>
              </li>
              {/* <!-- Menu item 2 Blog--> */}
              <li className='nav-item dropdown'>
                <a className='nav-link' href='/bolivia-en-la-cumbre'>
                  BOLIVIA EN LA CUMBRE
                </a>
              </li>
              {/* <!-- Menu item 3 Pages--> */}
              <li className='nav-item dropdown'>
                <a className='nav-link' href='#'>
                  DIÁLOGOS Y CONSULTAS NACIONALES
                </a>
                <div
                  className='dropdown-menu pb-3 pb-lg-0'
                  aria-labelledby='demosMenu'
                >
                  <div className='d-block d-sm-flex'>
                    <ul className='list-unstyled w-100 w-sm-50 pe-0 pe-lg-5'>
                      <li className='dropdown-header'>Lore ipsum</li>
                      <li>
                        {" "}
                        <a className='dropdown-item' href='#'>
                          Lorem ipsum
                          <span className='badge bg-success ms-2'>new</span>
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className='dropdown-item' href='#'>
                          Lorem ipsum
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className='dropdown-item' href='#'>
                          Lorem ipsum
                        </a>{" "}
                      </li>
                    </ul>
                    <ul className='list-unstyled w-100 w-sm-50 pe-0 pe-lg-5'>
                      <li className='dropdown-header mt-3 mt-sm-0'>
                        Lorem ipsum
                      </li>
                      <li>
                        {" "}
                        <a className='dropdown-item' href='#'>
                          Lorem ipsum
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className='dropdown-item' href='#'>
                          Lorem ipsum
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a className='dropdown-item' href='#'>
                          Lorem ipsum
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                  {/* <!-- mega menu Bottom --> */}
                  <div className='w-100 bg-grad pattern-overlay-2 p-4 mt-3 all-text-white d-none d-lg-flex'>
                    <div className='align-self-center me-4'>
                      <h4 className='mb-0'> Lorem ipsum!</h4>
                      <p className='mb-0 small'>Lorem ipsum</p>
                    </div>
                    <a
                      href='#'
                      target='_blank'
                      className='btn btn-outline-white btn-sm mb-0 align-self-center ms-auto'
                    >
                      Saber más!
                    </a>
                  </div>
                </div>
              </li>

              {/* <!-- Menu item 5 Elements--> */}
              <li className='nav-item dropdown megamenu'>
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='elementsMenu'
                  data-bs-toggle='dropdown'
                  aria-haspopup='true'
                  aria-expanded='false'
                >
                  NOTICIAS Y ACTIVIDADES
                </a>
                <div className='dropdown-menu' aria-labelledby='elementsMenu'>
                  <div className='container'>
                    <div className='row w-100'>
                      <div className='col-sm-6 col-lg-3'>
                        <ul className='list-unstyled'>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              Lorem ipsum
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              Lorem ipsum{" "}
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              Lorem ipsum
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              Lorem ipsum{" "}
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div className='col-sm-6 col-lg-3'>
                        <ul className='list-unstyled'>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              Lorem ipsum
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              Lorem ipsum
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              Lorem ipsum
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              Lorem ipsum{" "}
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div className='col-sm-6 col-lg-3'>
                        <ul className='list-unstyled'>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              Lorem ipsum
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              Lorem ipsum
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              Lorem ipsum
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              Lorem ipsum
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                      <div className='col-sm-6 col-lg-3'>
                        <ul className='list-unstyled'>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              Lorem ipsum
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              Lorem ipsum
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              Lorem ipsum
                            </a>{" "}
                          </li>
                          <li>
                            {" "}
                            <a className='dropdown-item' href='#'>
                              Lorem ipsum
                            </a>{" "}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {/* <!-- Logo Nav End --> */}
    </header>
  );
};

export default NavBar;
