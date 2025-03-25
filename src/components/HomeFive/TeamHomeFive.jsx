import React from 'react';
import { Link } from 'react-router-dom';
import TeamShapeImage from '../../assets/images/shape/team-five-shape1.png';
import TeamIconImage from '../../assets/images/icon/five-start-icon.png';
// import TeamImage1 from '../../assets/images/team/team-five-image1.png';
// import TeamImage2 from '../../assets/images/team/team-five-image2.png';
// import TeamImage3 from '../../assets/images/team/team-five-image3.png';
import CEOImage from '../../assets/images/edi-imgs/team/CEO.jpg';

function TeamHomeFive({ className }) {
  return (
    <>
      <section className={`team-five-area pt-120 ${className || ''}`}>
        <div className="team-five__shape">
          <img src={TeamShapeImage} alt="shape" />
        </div>
        <div className="container">
          <div className="team-five__wrp">
            <div className="msg-CEO-container">
              <div className="team-five__content">
                <div className="section-header">
                  <h3>MESSAGE</h3>
                  <h2 className="wow splt-txt text-black mb-40" data-splitting>
                    Message From the CEO
                  </h2>
                  <h6>Hello to EDI World of Designs !!</h6>
                  <p
                    className="wow fadeInUp mt-0"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    Its overwhelming to welcome you to the dimension of Design
                    that you have never seen before. The aura which our design
                    radiates and the efforts to the details that we put in is
                    the marquee feature of EDI.
                  </p>
                  <p
                    className="wow fadeInUp mt-0"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    The design which comes through us solely represents your
                    vision but in a way that you can hardly come near to.
                    Welcome once again to EDI and get on board with us for
                    converting your dreams into reality.
                  </p>
                  <p
                    className="wow fadeInUp mt-0"
                    data-wow-delay="200ms"
                    data-wow-duration="1500ms"
                  >
                    EDI also proudly introduces Energy Efficient Sustainable
                    Building Designs for the first time in Nepal and will
                    continue to contribute back to nature. EDI has everything
                    that you can imagine for the world of designing.
                  </p>
                </div>
              </div>
              <div className="team-five__item">
                <div className="team-five__image">
                  <img src={CEOImage} alt="image" />
                  <div className="share">
                    <div className="socials">
                      <Link to="#">
                        <i className="fa-brands fa-twitter"></i>
                      </Link>
                      <Link to="#">
                        <i className="fa-brands fa-facebook-f"></i>
                      </Link>
                      <Link to="#">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </Link>
                      <Link to="#">
                        <i className="fa-brands fa-instagram"></i>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h3 className="mb-2">
                    <Link className="primary-hover" to="/page-team-details">
                      Er. Abhishek Karn
                    </Link>
                  </h3>
                  <span>Founder & CEO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TeamHomeFive;
