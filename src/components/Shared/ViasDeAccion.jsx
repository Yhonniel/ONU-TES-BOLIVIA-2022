import React from "react";

const ViasDeAccion = () => {
  return (
    <>
      <div className='row'>
        {/* <!-- column 1 --> */}
        <div className='col-md-4'>
          {/* <!-- title --> */}

          <h2>La Vías de acción de la Cumbre</h2>
          <p>
            La Cumbre cuenta con 5 Vías de Acción que están centradas en áreas
            específicas que necesitan atención, las cuales son fundamentales
            para transformar la educación.
          </p>
          {/* <!-- service item --> */}
          <div className='bg-light p-3 p-lg-3 '>
            <span className='display-5 icon-primary'>
              <i className='ti-ruler-pencil'></i>
            </span>
            <h5> 1. Escuelas inclusivas, equitativas, seguras y saludables</h5>
            <p className='mb-0'>
              La educación inclusiva y transformadora debe garantizar que todos
              los alumnos tengan un acceso y participen sin trabas en la
              educación, que estén seguros y sanos, libres de violencia y
              discriminación, y que reciban apoyo con servicios de atención
              integral dentro del entorno escolar.
            </p>
          </div>
        </div>

        {/* <!-- column 2 --> */}
        <div className='col-md-4 mt-5'>
          {/* <!-- service item --> */}
          <div className='bg-light p-3 p-lg-3 mb-5'>
            <span className='display-6'>
              <i className='ti-pencil-alt'></i>
            </span>
            <h5>
              2. Aprendizaje y competencias para la vida, el trabajo y el
              desarrollo sostenible
            </h5>
            <p className='mb-0'>
              Transformar la educación significa capacitar a los alumnos con
              conocimientos, competencias, valores y actitudes para que sean
              resilientes, tengan capacidad de adaptación y estén preparados
              para un futuro incierto, contribuyendo al mismo tiempo al
              bienestar humano y planetario y al desarrollo sostenible.
            </p>
          </div>
          {/* <!-- service item --> */}
          <div className='bg-light p-3 p-lg-3 mb-5'>
            <span className='display-6 text-warning'>
              <i className='ti-image'></i>
            </span>
            <h5>3. Docentes, enseñanza y profesión docente</h5>
            <p className='mb-0'>
              La aceleración del progreso hacia el ODS 4 y la transformación de
              la educación requieren un número adecuado de profesores para
              satisfacer las necesidades de los alumnos, así como la formación,
              motivación y apoyo de todo el personal educativo.
            </p>
          </div>
        </div>

        {/* <!-- column 3 --> */}
        <div className='col-md-4'>
          {/* <!-- service item --> */}
          <div className='bg-light p-3 p-lg-3 mb-5'>
            <span className='display-6 text-info'>
              <i className='ti-world icon-primary'></i>
            </span>
            <h5>4. Aprendizaje y transformación digital</h5>
            <p className='mb-0'>
              La transformación digital requiere el aprovechamiento de la
              tecnología como parte de esfuerzos sistémicos más amplios para
              transformar la educación, haciéndola más inclusiva, equitativa,
              eficaz, pertinente y sostenible.
            </p>
          </div>
          {/* <!-- service item --> */}
          <div className='bg-light p-3 p-lg-3 mb-5'>
            <span className='display-6 text-primary'>
              <i className='ti-wallet'></i>
            </span>
            <h5>5. Financiación de la educación</h5>
            <p className='mb-0'>
              El primer paso hacia la transformación es instar a los proveedores
              de fondos a reorientar los recursos hacia la educación para
              subsanar el déficit de financiación. Posteriormente, los países
              deben contar con una financiación significativamente mayor y
              sostenible para alcanzar el ODS 4 y estos recursos deben asignarse
              y supervisarse de forma equitativa y eficaz
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViasDeAccion;
