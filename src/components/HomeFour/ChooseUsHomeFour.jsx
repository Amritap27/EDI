import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CounterUp from '../../lib/CounterUp.jsx';
import FunfactImage1 from '../../assets/images/shape/funfact-four-text.png';
import FunfactImage2 from '../../assets/images/shape/funfact-four-shape.png';
// import FunfactImage3 from '../../assets/images/funfact/funfact-three-sm-image.jpg';
// import FunfactImage4 from '../../assets/images/funfact/funfact-three-sm-image2.jpg';
import FunfactImagea from '../../assets/images/edi-imgs/project/1.jpg';
import FunfactImageb from '../../assets/images/edi-imgs/project/2.jpg';

function ChooseUsHomeFour({ className }) {
  const projectsCompleted = 200; // Example value
  const yearsExperience = 20; // Example value

  return (
    <>
      <section className={`funfact-four-area pt-120 pb-120 ${className || ''}`}>
        <div className="funfact-four__text">
          <img src={FunfactImage1} alt="text" />
        </div>
        <div className="funfact-four__shape">
          <img src={FunfactImage2} alt="shape" />
        </div>
        <div className="funfact-four__wrp">
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="funfact-four__left">
                <div className="section-header">
                  <h4
                    className="wow fadeInUp"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    WHY CHOOSE EDI?{' '}
                  </h4>
                  <h2 className="wow splt-txt" data-splitting>
                    Transforming Dreams into Reality
                  </h2>
                  <p
                    className="wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    At EDI, we are committed to delivering designs that
                    perfectly align with your requirements. Our mission is to
                    create a developed and well-managed environment, turning
                    your dream projects into reality. With a combined experience
                    of over 20 years in engineering and construction, we ensure
                    quality services and timely delivery.
                  </p>
                  <Link
                    to="/page-projects"
                    className="btn-two mt-30 wow fadeInUp"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    Explore our Projects{' '}
                    <i className="fa-light fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="row g-2">
                <div className="col-sm-6">
                  <div className="image">
                    <img src={FunfactImagea} alt="image" height={320} />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="funfact-three__item">
                    <h2>
                      <CounterUp count={projectsCompleted} time={3} />
                    </h2>
                    <h4 className="wow splt-txt" data-splitting>
                      Projects Successfully Completed
                    </h4>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="funfact-three__item-dark">
                    <h2>
                      <CounterUp count={yearsExperience} time={3} />
                    </h2>
                    <h4 className="wow splt-txt" data-splitting>
                      Years of Industry Experience
                    </h4>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="image">
                    <img src={FunfactImageb} alt="image" height={320} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUsHomeFour;
