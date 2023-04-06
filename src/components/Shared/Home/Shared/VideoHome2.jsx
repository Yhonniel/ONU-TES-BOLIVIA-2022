import React from 'react'

const VideoHome2 = () => {
  return (
    <div className='col-md-12 mx-auto'>
    <div className='post-item'>
      <div className='post-item-wrap'>
        <div className='post-image'>
          <div>
            <div className='item2'>
              <div className='testimonials-wrap'>
                <img
                  className='rounded'
                  src='images/cumbre/secretario-onu-2.png'
                  alt='img'
                />
                <div className='position-absolute start-0 bottom-0 ms-4 ms-md-n2 mb-3'>
                  <a
                    className='btn btn-grad'
                    href='https://youtu.be/q7eSDmHIIps'
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className='row'>
                    <i className='fa fa-play text-white'></i> 
                    </div>
                  </a>
                </div>
             
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-2">
        <span className="text-muted small text-center">Discurso del Secretario General en la Cumbre sobre Transformación de la Educación.</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default VideoHome2