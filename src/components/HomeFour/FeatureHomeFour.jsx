import React from 'react';
import { Link } from 'react-router-dom';
// import FeatureIconImage1 from '../../assets/images/icon/feature-four-icon1.png';
// import FeatureIconImage2 from '../../assets/images/icon/feature-four-icon2.png';
// import FeatureIconImage3 from '../../assets/images/icon/feature-four-icon3.png';
import EEB from '../../assets/images/icon/EEB.png';
import BES from '../../assets/images/icon/BES.png';
import IPE from '../../assets/images/icon/IPE.png';
import TPCAS from '../../assets/images/icon/TPCAS.png';

function FeatureHomeFour({ className }) {
  return (
    <>
      <section className={`feature-four-area pt-120 pb-120 ${className || ''}`}>
        <div className="container">
          <div className="feature-four__wrp">
            <div className="section-header text-center mb-50">
              <h4
                className="wow fadeInUp"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                FEATURES
              </h4>
              <h2 className="wow splt-txt" data-splitting>
                Our Features
              </h2>
            </div>
            <div className="row g-5">
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="feature-four__item">
                  <div className="icon">
                    <img src={BES} alt="icon" />
                  </div>
                  <h4>
                    <Link to="#0">
                      Building Energy <br /> Simulation
                    </Link>
                  </h4>
                  <p>
                    Our Building Energy Simulation services utilize advanced
                    modeling techniques to analyze energy consumption and
                    optimize building performance. By simulating various design
                    scenarios, we help clients make informed decisions that lead
                    to sustainable and cost-effective solutions. Our team of
                    experts is dedicated to ensuring that your building meets
                    energy efficiency standards while maximizing comfort and
                    functionality.
                  </p>
                  <Link to="/page-service-details" className="btn-arrow">
                    <i className="fa-light fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="200ms"
                data-wow-duration="1500ms"
              >
                <div className="feature-four__item">
                  <div className="icon">
                    <img src={TPCAS} alt="icon" />
                  </div>
                  <h4>
                    <Link to="#0">
                      Third Party Consultation <br /> and Supervision
                    </Link>
                  </h4>
                  <p>
                    We offer comprehensive third-party consultation and
                    supervision services to ensure that your projects are
                    executed with the highest standards of quality and
                    compliance. Our experienced consultants provide valuable
                    insights and oversight throughout the project lifecycle,
                    helping to mitigate risks and enhance project outcomes.
                    Trust us to be your partner in achieving excellence in
                    construction and project management.
                  </p>
                  <Link to="/page-service-details" className="btn-arrow">
                    <i className="fa-light fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="feature-four__item">
                  <div className="icon">
                    <img src={EEB} alt="icon" />
                  </div>
                  <h4>
                    <Link to="#0">
                      Energy Efficient <br /> Building
                    </Link>
                  </h4>
                  <p>
                    Creating energy-efficient buildings is at the forefront of
                    our mission. We specialize in designing and implementing
                    solutions that reduce energy consumption and lower
                    operational costs. Our approach combines innovative
                    technologies with sustainable practices, ensuring that your
                    building not only meets current energy codes but also
                    contributes to a greener future. Let us help you create
                    spaces that are both environmentally friendly and
                    economically viable.
                  </p>
                  <Link to="/page-service-details" className="btn-arrow">
                    <i className="fa-light fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
              <div
                className="col-md-6 col-lg-4 wow fadeInUp"
                data-wow-delay="400ms"
                data-wow-duration="1500ms"
              >
                <div className="feature-four__item">
                  <div className="icon">
                    <img src={IPE} alt="icon" />
                  </div>
                  <h4>
                    <Link to="#0">
                      Interior Project <br /> Estimate
                    </Link>
                  </h4>
                  <p>
                    Our Interior Project Estimation services provide detailed
                    and accurate assessments to help you plan your interior
                    projects effectively. We analyze your requirements and
                    budget to deliver tailored solutions that align with your
                    vision. With our expertise, you can expect transparency and
                    precision in every estimate, ensuring that your project
                    stays on track and within budget. Partner with us for a
                    seamless interior design experience.
                  </p>
                  <Link to="/page-service-details" className="btn-arrow">
                    <i className="fa-light fa-arrow-up-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeatureHomeFour;
