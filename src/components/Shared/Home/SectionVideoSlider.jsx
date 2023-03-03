import React from "react";
import InfografiaSlider2 from "./Shared/InfografiaSlider2";
import VideoHome1 from "./Shared/VideoHome1";
import VideoHome2 from "./Shared/VideoHome2";


const SectionVideoSlider = () => {
  return (
    <section className='blog-page mb-5 py-0 mt-7'>
      <div className='container'>
        <div className='post-item-desc'>
          <blockquote class='blockquote primary-line' cite='#'>
            <h3>
              Garantizar una educación inclusiva, equitativa y de calidad y
              promover oportunidades de aprendizaje durante toda la vida para
              todos.
            </h3>
          </blockquote>
        </div>
        <div className='row'>
        <div className='col-md-4'>
            <div className='mb-5'>
              <VideoHome1></VideoHome1>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='mb-5'>
              <InfografiaSlider2></InfografiaSlider2>
            </div>
          </div>
          <div className='col-md-4'>
            <div className='mb-5'>
            <VideoHome2></VideoHome2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionVideoSlider;
