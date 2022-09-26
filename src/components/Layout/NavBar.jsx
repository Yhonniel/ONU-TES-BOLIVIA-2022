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
                <a className='nav-link' href='/'>
                  INICIO
                </a>
              </li>
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
                <a className='nav-link' href='/dialogos-y-consultas'>
                  DIÁLOGOS Y CONSULTAS NACIONALES
                </a>
              </li>

              {/* <!-- Menu item 5 Elements--> */}
              <li className='nav-item dropdown'>
                <a className='nav-link' href='/noticias'>
                  NOTICIAS Y ACTIVIDADES
                </a>
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
