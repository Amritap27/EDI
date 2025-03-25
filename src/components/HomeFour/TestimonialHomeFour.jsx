import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TestimoniaShape1 from '../../assets/images/shape/testimonial-four-shape.png';
import Testimonialimage1 from '../../assets/images/testimonial/testimonial-four-image1.png';
import Testimonialimage2 from '../../assets/images/testimonial/testimonial-four-image2.png';
import Testimonialimage3 from '../../assets/images/testimonial/testimonial-four-image3.png';
import Testimonial1 from '../../assets/images/edi-imgs/testimonial/14.jpg';
import Testimonial2 from '../../assets/images/edi-imgs/testimonial/4.jpg';
import Testimonial3 from '../../assets/images/edi-imgs/testimonial/14.jpg';
import Testimonial4 from '../../assets/images/edi-imgs/testimonial/5.jpg';
import Testimonial5 from '../../assets/images/edi-imgs/testimonial/14.jpg';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  autoplay: {
    delay: 8500,
    disableOnInteraction: false,
  },
  loop: true,
  navigation: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    575: {
      slidesPerView: 1,
    },
    767: {
      slidesPerView: 1,
    },
    991: {
      slidesPerView: 1,
    },
    1199: {
      slidesPerView: 1,
    },
    1350: {
      slidesPerView: 1,
    },
  },
};

function TestimonialHomeFour({ className }) {
  return (
    <>
      <section className={`testimonial-four-area pt-120 ${className || ''}`}>
        <div className="testimonial-four__shape">
          <img
            className="wow slideInLeft"
            data-wow-delay="00ms"
            data-wow-duration="1500ms"
            src={TestimoniaShape1}
            alt="shape"
          />
        </div>
        <div className="container">
          <div className="testimonial-four__wrp">
            <div className="row g-4">
              <div className="col-lg-5">
                <div className="section-header">
                  <h4
                    className="wow fadeInUp"
                    data-wow-delay="00ms"
                    data-wow-duration="1500ms"
                  >
                    TESTIMONIALS{' '}
                  </h4>
                  <h2 className="wow splt-txt" data-splitting>
                    What People Say?
                  </h2>
                </div>
              </div>
              {/* <div className="col-lg-7"> */}
              <div>
                <div className="testimonial-four__item">
                  <div className="quote">
                    <svg
                      width="150"
                      height="120"
                      viewBox="0 0 162 131"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_1_594)">
                        <path
                          opacity="0.322"
                          d="M61.7332 69.454V130.684H0.316406V87.4639C0.316406 70.6554 3.12641 55.2479 8.74641 41.2411C14.3664 27.2344 23.7995 13.6273 37.0458 0.419922L59.9265 18.4285C44.271 35.6375 35.4398 52.646 33.4331 69.454H61.7332ZM161.686 69.454V130.684H100.269V87.4639C100.269 70.6554 103.079 55.2479 108.699 41.2411C114.319 27.2344 123.752 13.6273 136.999 0.419922L159.879 18.4285C144.226 35.6375 135.395 52.646 133.386 69.454H161.686Z"
                          stroke="#222222"
                        />
                      </g>
                      <defs>
                        <clipPath>
                          {' '}
                          <rect width="162" height="131" fill="white" />{' '}
                        </clipPath>
                      </defs>
                    </svg>
                  </div>

                  <div className="swiper testimonial-four__slider">
                    <Swiper
                      {...swiperOptions}
                      modules={[Navigation]}
                      navigation={{
                        prevEl: '.arry-prev.testimonial-four__arry-prev',
                        nextEl: '.arry-next.testimonial-four__arry-next',
                      }}
                      className="swiper-wrapper"
                    >
                      <SwiperSlide className="swiper-slide">
                        <div className="testimonial-swiper-content">
                          <div className="testimonial-para">
                            <p>
                              This was a public project which had to be taken
                              care of by the government , we had been late by
                              schedule to implement design and start
                              constructing which would lead to freezing the
                              budget this year. My son informed me about Er.
                              Abhishek and his team at EDI who have been in this
                              sector for a while now. So , that was it , I
                              trusted them and they not only saved the budget
                              from freezing but completed the entire detailed
                              design work within three weeks which was supposed
                              to be a task of around 2-3 months in general. I am
                              very happy and my office staffs at Veterinary
                              Hospital Birgunj are also very happy and amazed by
                              seeing the hard working nature and professionalism
                              that they brought within them in this very short
                              frame of time.&nbsp; Thank you EDI !!
                            </p>
                            <div className="d-flex align-items-center gap-3 ">
                              {/* <img src={Testimonialimage1} alt="image" /> */}
                              <div>
                                <h4>Project Manager</h4>
                                <h6 className="primary-color">
                                  Veterinary Office and Hospital, Birgunj
                                </h6>
                              </div>
                            </div>
                          </div>
                          <div>
                            <img src={Testimonial1} alt="image" width={500} />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="testimonial-swiper-content">
                          <div className="testimonial-para">
                            <p>
                              We partnered with EDI crew on a completely bold
                              redecorate of a newly built home. We had been
                              clearly inspired with how responsive the crew
                              changed into, and the way tough they labored to
                              make our deadline. Throughout the process, their
                              conversation changed into incredible and
                              absolutely each person changed into professional,
                              pleasant and smooth to finish with. Also, all of
                              the specialists they labored with confirmed up on
                              time and did clearly precise paintings. Finally,
                              and maximum importantly, the undertaking changed
                              into finished on time and we’re clearly satisfied
                              with how the whole thing became out – the
                              residence has been fully interior designed and we
                              adore it. We would’t hesitate to working with team
                              EDI again.
                            </p>
                            <div className="d-flex align-items-center gap-3 ">
                              {/* <img src={Testimonialimage1} alt="image" /> */}
                              <div>
                                <h4>House Owner</h4>
                                <h6 className="primary-color">Nepal</h6>
                              </div>
                            </div>
                          </div>
                          <div>
                            <img src={Testimonial2} alt="image" width={500} />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="testimonial-swiper-content">
                          <div className="testimonial-para">
                            <p>
                              The Remodel Looked to bring life in the place
                              which lacked beautification in Buildings – Thank
                              you EDI!!!
                            </p>
                            <div className="d-flex align-items-center gap-3 ">
                              {/* <img src={Testimonialimage1} alt="image" /> */}
                              <div>
                                <h4>House Owner</h4>
                                <h6 className="primary-color">Matihani</h6>
                              </div>
                            </div>
                          </div>
                          <div>
                            <img src={Testimonial3} alt="image" width={500} />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="testimonial-swiper-content">
                          <div className="testimonial-para">
                            <p>
                              The Masterplan design was as inch perfect for the
                              site and requirements as stated.
                            </p>
                            <div className="d-flex align-items-center gap-3 ">
                              {/* <img src={Testimonialimage1} alt="image" /> */}
                              <div>
                                <h4>Museum Masterplan</h4>
                                <h6 className="primary-color">Nepal</h6>
                              </div>
                            </div>
                          </div>
                          <div>
                            <img src={Testimonial4} alt="image" width={500} />
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <div className="testimonial-swiper-content">
                          <div className="testimonial-para">
                            <p>
                              Team EDI when we first came in contact had only a
                              rough idea of the plan , which when we discussed
                              with Er. Abhishek , he made us clear about the
                              things and details that we must be looking at
                              while designing a mixed use building. The idea
                              previously was to remodel the old load bearing
                              system building but on several meetings , we came
                              across a mutual agreement of redesigning it from
                              the scratch. We told him our vision and him along
                              with his EDI Team listened to and prompted for
                              better ideas and the design which we wanted had to
                              have some feature that we could relate with our
                              restaurant which is basically a Pizza based
                              restaurant and thus they designed us with the
                              Pizza based theme which has given an added
                              indentity to our vision. Very Professional Team.
                            </p>
                            <div className="d-flex align-items-center gap-3 ">
                              {/* <img src={Testimonialimage1} alt="image" /> */}
                              <div>
                                <h4>
                                  Houseowner - Mixed use Residential Building
                                </h4>
                                <h6 className="primary-color">Nepal</h6>
                              </div>
                            </div>
                          </div>
                          <div>
                            <img src={Testimonial5} alt="image" width={500} />
                          </div>
                        </div>
                      </SwiperSlide>
                      {/* <SwiperSlide className="swiper-slide">
                        <p>
                          I've been hiring in this field for years, and I've
                          never encountered such a high level of
                          professionalism. It truly feels like you're working
                          with a team that can deliver results.
                        </p>
                        <div className="d-flex align-items-center gap-3 ">
                          <img src={Testimonialimage2} alt="image" />
                          <div>
                            <h4>Suborna Islam</h4>
                            <h6 className="primary-color">UX/UI Designer</h6>
                          </div>
                        </div>
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <p>
                          I've been hiring in this field for years, and I've
                          never encountered such a high level of
                          professionalism. It truly feels like you're working
                          with a team that can deliver results.
                        </p>
                        <div className="d-flex align-items-center gap-3 ">
                          <img src={Testimonialimage3} alt="image" />
                          <div>
                            <h4>Kawser Ahmed</h4>
                            <h6 className="primary-color">Web Developer</h6>
                          </div>
                        </div>
                      </SwiperSlide> */}
                    </Swiper>
                  </div>

                  <div className="testimonial-four__arry-wrp d-flex align-items-center gap-3">
                    <button className="arry-prev testimonial-four__arry-prev">
                      <i className="fa-light fa-arrow-left"></i>
                    </button>
                    <button className="arry-next testimonial-four__arry-next">
                      <i className="fa-light fa-arrow-right"></i>
                    </button>
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

export default TestimonialHomeFour;
