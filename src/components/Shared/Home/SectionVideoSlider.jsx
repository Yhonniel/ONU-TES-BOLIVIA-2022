import React from "react";
import InfografiaSlider2 from "./Shared/InfografiaSlider2";
import VideoHome from "./Shared/VideoHome";

const SectionVideoSlider = () => {
  return (
    <section className='blog-page '>
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
        <div className='col-md-6'>
            <div className='py-4 mb-4'>
              <VideoHome></VideoHome>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='py-4 mb-4'>
              <InfografiaSlider2></InfografiaSlider2>
            </div>
          </div>
          <div className='col-md-6'>
            <div className='py-4 mb-4'>
              <VideoHome></VideoHome>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default SectionVideoSlider;
