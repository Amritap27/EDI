import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import Aboutimage1 from '../../assets/images/about/about-image1.jpg';
import Aboutimage2 from '../../assets/images/edi-imgs/portfolio/9.jpg';
// import AboutCircleimage from '../../assets/images/about/about-circle-text.png';
// import AboutCircleimageDark from '../../assets/images/about/about-circle-text-dark.png';

function AboutHomeOne({ className }) {
  const [isDarkMode, setDarkMode] = useState(false);

  return (
    <>
      <section className={`about-area pt-120 pb-120 ${className}`}>
        <div className="container">
          <div className="row g-5">
            {/* <div className="col-lg-6">
              <div className="about__image">
                <figure className="wow imageLeftToRight gsap__parallax">
                  <img src={Aboutimage1} alt="About Image 1" />
                </figure>
                <div
                  className="text-shape wow fadeInUp"
                  data-wow-delay="400ms"
                  data-wow-duration="1500ms"
                >
                  <img
                    className="animation__rotateY"
                    src={isDarkMode ? AboutCircleimage : AboutCircleimageDark}
                    alt="About Circle"
                  />
                </div>
              </div>
            </div> */}
            <div>
              <div className="section-header">
                <h4
                  className="wow fadeInUp"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  ABOUT US
                </h4>
                <h2 className="wow splt-txt" data-splitting>
                  Building better communities with you
                </h2>
                <div className="image mt-60">
                  <figure className="wow imageRightToLeft gsap__parallax">
                    <img src={Aboutimage2} alt="About Image 2" />
                  </figure>
                </div>
                <p
                  className="wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  Engineering Designs and Intellect is a company which started
                  much before than its registration date on paper with vision to
                  create a developed country, a better and managed place to live
                  in.
                </p>
                <p
                  className="wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  EDI has combined experience of around more than 20 years in
                  the field of Engineering and Construction.
                </p>
                <p
                  className="wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  EDI, as well call it, is the signature of trademark of Designs
                  in Nepal in the first place and then around the globe for
                  quality branded Designs and Concepts of their own.
                </p>
                <p
                  className="wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  EDI has a proven record of maintaining quality and promises to
                  deliver in time. Building is all about an aesthetically
                  pleasing design and quality construction. EDI assures you of
                  providing a design which suits your requirement the best.
                </p>
                <p
                  className="wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  A company solely committed to quality services to make your
                  dream project turn into reality. Our team’s spirit and their
                  dedication towards every client has been a major aspect in
                  taking EDIs success graph much higher day by day.
                </p>
                <p
                  className="wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  We communicate with each of our client for better
                  understanding of the project leaving no questions unanswered.
                  Our team manages the project implementation in an effective
                  and efficient way.
                </p>
                <p
                  className="wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  EDI has very experienced group of Architects and Engineers
                  team who have gained knowledge and experience in various
                  dimensions of design aspect and through their vision, we see
                  the dream fulfil that you see with your eyes. We turn dreams
                  into realities and value all of your requirements along with
                  improvements where needed of the best class possible.
                </p>
                <p
                  className="wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  EDI also introduces Best-in-Class Energy Efficient Design for
                  Buildings to build a home with energy saving techniques,
                  climate responsive design and sustainable interior and
                  exterior designs to provide you a better and an sustainable
                  design of your house that you have dreamed of for so long.
                </p>
                <p
                  className="wow fadeInUp"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  Let us all take a step further towards Green Building Designs
                  with EDI and make this world a better place to live in this
                  rapidly urbanising development age.
                </p>
              </div>
              {/* <div className="about__content">
                <ul
                  className="wow fadeInDown"
                  data-wow-delay="00ms"
                  data-wow-duration="1500ms"
                >
                  <li>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8531 8.63909L13.8086 8.05484C12.8879 7.79527 12.0492 7.30377 11.3728 6.62736C10.6964 5.95095 10.2049 5.11228 9.94536 4.19159L9.36111 2.14709C9.33172 2.07556 9.28174 2.01438 9.2175 1.97132C9.15327 1.92826 9.07769 1.90527 9.00036 1.90527C8.92303 1.90527 8.84744 1.92826 8.78321 1.97132C8.71897 2.01438 8.66899 2.07556 8.63961 2.14709L8.05536 4.19159C7.79579 5.11228 7.30429 5.95095 6.62788 6.62736C5.95147 7.30377 5.1128 7.79527 4.19211 8.05484L2.14761 8.63909C2.0691 8.66137 2.00001 8.70865 1.95082 8.77375C1.90162 8.83886 1.875 8.91823 1.875 8.99984C1.875 9.08144 1.90162 9.16082 1.95082 9.22592C2.00001 9.29103 2.0691 9.3383 2.14761 9.36059L4.19211 9.94484C5.1128 10.2044 5.95147 10.6959 6.62788 11.3723C7.30429 12.0487 7.79579 12.8874 8.05536 13.8081L8.63961 15.8526C8.66189 15.9311 8.70917 16.0002 8.77427 16.0494C8.83938 16.0986 8.91875 16.1252 9.00036 16.1252C9.08196 16.1252 9.16133 16.0986 9.22644 16.0494C9.29154 16.0002 9.33882 15.9311 9.36111 15.8526L9.94536 13.8081C10.2049 12.8874 10.6964 12.0487 11.3728 11.3723C12.0492 10.6959 12.8879 10.2044 13.8086 9.94484L15.8531 9.36059C15.9316 9.3383 16.0007 9.29103 16.0499 9.22592C16.0991 9.16082 16.1257 9.08144 16.1257 8.99984C16.1257 8.91823 16.0991 8.83886 16.0499 8.77375C16.0007 8.70865 15.9316 8.66137 15.8531 8.63909Z"
                        fill="#BB9A65"
                      />
                    </svg>
                    Essential Design Program
                  </li>
                  <li>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8531 8.63909L13.8086 8.05484C12.8879 7.79527 12.0492 7.30377 11.3728 6.62736C10.6964 5.95095 10.2049 5.11228 9.94536 4.19159L9.36111 2.14709C9.33172 2.07556 9.28174 2.01438 9.2175 1.97132C9.15327 1.92826 9.07769 1.90527 9.00036 1.90527C8.92303 1.90527 8.84744 1.92826 8.78321 1.97132C8.71897 2.01438 8.66899 2.07556 8.63961 2.14709L8.05536 4.19159C7.79579 5.11228 7.30429 5.95095 6.62788 6.62736C5.95147 7.30377 5.1128 7.79527 4.19211 8.05484L2.14761 8.63909C2.0691 8.66137 2.00001 8.70865 1.95082 8.77375C1.90162 8.83886 1.875 8.91823 1.875 8.99984C1.875 9.08144 1.90162 9.16082 1.95082 9.22592C2.00001 9.29103 2.0691 9.3383 2.14761 9.36059L4.19211 9.94484C5.1128 10.2044 5.95147 10.6959 6.62788 11.3723C7.30429 12.0487 7.79579 12.8874 8.05536 13.8081L8.63961 15.8526C8.66189 15.9311 8.70917 16.0002 8.77427 16.0494C8.83938 16.0986 8.91875 16.1252 9.00036 16.1252C9.08196 16.1252 9.16133 16.0986 9.22644 16.0494C9.29154 16.0002 9.33882 15.9311 9.36111 15.8526L9.94536 13.8081C10.2049 12.8874 10.6964 12.0487 11.3728 11.3723C12.0492 10.6959 12.8879 10.2044 13.8086 9.94484L15.8531 9.36059C15.9316 9.3383 16.0007 9.29103 16.0499 9.22592C16.0991 9.16082 16.1257 9.08144 16.1257 8.99984C16.1257 8.91823 16.0991 8.83886 16.0499 8.77375C16.0007 8.70865 15.9316 8.66137 15.8531 8.63909Z"
                        fill="#BB9A65"
                      />
                    </svg>
                    Dedicated Design Program
                  </li>
                  <li>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.8531 8.63909L13.8086 8.05484C12.8879 7.79527 12.0492 7.30377 11.3728 6.62736C10.6964 5.95095 10.2049 5.11228 9.94536 4.19159L9.36111 2.14709C9.33172 2.07556 9.28174 2.01438 9.2175 1.97132C9.15327 1.92826 9.07769 1.90527 9.00036 1.90527C8.92303 1.90527 8.84744 1.92826 8.78321 1.97132C8.71897 2.01438 8.66899 2.07556 8.63961 2.14709L8.05536 4.19159C7.79579 5.11228 7.30429 5.95095 6.62788 6.62736C5.95147 7.30377 5.1128 7.79527 4.19211 8.05484L2.14761 8.63909C2.0691 8.66137 2.00001 8.70865 1.95082 8.77375C1.90162 8.83886 1.875 8.91823 1.875 8.99984C1.875 9.08144 1.90162 9.16082 1.95082 9.22592C2.00001 9.29103 2.0691 9.3383 2.14761 9.36059L4.19211 9.94484C5.1128 10.2044 5.95147 10.6959 6.62788 11.3723C7.30429 12.0487 7.79579 12.8874 8.05536 13.8081L8.63961 15.8526C8.66189 15.9311 8.70917 16.0002 8.77427 16.0494C8.83938 16.0986 8.91875 16.1252 9.00036 16.1252C9.08196 16.1252 9.16133 16.0986 9.22644 16.0494C9.29154 16.0002 9.33882 15.9311 9.36111 15.8526L9.94536 13.8081C10.2049 12.8874 10.6964 12.0487 11.3728 11.3723C12.0492 10.6959 12.8879 10.2044 13.8086 9.94484L15.8531 9.36059C15.9316 9.3383 16.0007 9.29103 16.0499 9.22592C16.0991 9.16082 16.1257 9.08144 16.1257 8.99984C16.1257 8.91823 16.0991 8.83886 16.0499 8.77375C16.0007 8.70865 15.9316 8.66137 15.8531 8.63909Z"
                        fill="#BB9A65"
                      />
                    </svg>
                    White Gloves Design Program
                  </li>
                </ul>
                <Link
                  to="/page-about"
                  className="btn-arrow wow fadeInDown"
                  data-wow-delay="200ms"
                  data-wow-duration="1500ms"
                >
                  <i className="fa-light fa-arrow-up-right"></i>
                </Link>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutHomeOne;
