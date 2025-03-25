import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BannerShape1 from '../../assets/images/shape/banner-four-shape.png';
import BannerImage1 from '../../assets/images/edi-imgs/home-page-hero/1.jpg';
import BannerImage2 from '../../assets/images/edi-imgs/home-page-hero/2.jpg';
import BannerImage3 from '../../assets/images/edi-imgs/home-page-hero/3.jpg';
import BannerImage4 from '../../assets/images/edi-imgs/home-page-hero/4 (2).jpg';
import BannerImage5 from '../../assets/images/edi-imgs/home-page-hero/5.jpg';
import BannerImage6 from '../../assets/images/edi-imgs/home-page-hero/4.jpg';
import BannerImage7 from '../../assets/images/edi-imgs/home-page-hero/5 (2).jpg';

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  navigation: true,
  loop: true,
  pagination: { clickable: true },
};

function HeroHomeFour({ className }) {
  return (
    <>
      <section className={`banner-four-area ${className || ''}`}>
        <span className="banner-four__line" />
        <span className="banner-four__line-two" />
        <span className="banner-four__line-three" />
        <span className="banner-four__line-four" />
        <span className="banner-four__line-five" />
        <button className="banner-four__slider-prev">
          <i className="fa-light fa-arrow-left-long"></i>
        </button>
        <button className="banner-four__slider-next">
          <i className="fa-light fa-arrow-right-long"></i>
        </button>
        <div className="banner-four__shape">
          <img
            className="wow bounceInRight parallaxRightScroll"
            src={BannerShape1}
            alt="shape"
            height={500}
          />
        </div>
        <div className="banner-four__text">
          <h2>DESIGNS</h2>
        </div>
        <div className="container">
          <div className="banner-four__wrp">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner-four__content">
                  <h1
                    data-animation="fadeInUp"
                    data-duration="1s"
                    data-delay=".1s"
                  >
                    Designing a Sustainable Future
                  </h1>
                  <p
                    className="mt-30"
                    data-animation="fadeInUp"
                    data-duration="1.5s"
                    data-delay=".15s"
                  >
                    Engineering solutions for a smarter, greener, and better
                    tomorrow with 20+ years of expertise in engineering and
                    construction.
                  </p>
                  <Link
                    to="/page-about"
                    className="btn-one mt-50"
                    data-animation="fadeInUp"
                    data-duration="2s"
                    data-delay=".2s"
                  >
                    View More
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="banner-four__image parallaxScroll">
                  <div className="swiper banner-four__slider">
                    <Swiper
                      {...swiperOptions}
                      modules={[Navigation]}
                      navigation={{
                        prevEl: '.banner-four__slider-prev',
                        nextEl: '.banner-four__slider-next',
                      }}
                      className="swiper-wrapper"
                    >
                      <SwiperSlide className="swiper-slide">
                        <img src={BannerImage1} alt="image" />
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <img src={BannerImage2} alt="image" />
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <img src={BannerImage3} alt="image" />
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <img src={BannerImage4} alt="image" />
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <img src={BannerImage5} alt="image" />
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <img src={BannerImage6} alt="image" />
                      </SwiperSlide>
                      <SwiperSlide className="swiper-slide">
                        <img src={BannerImage7} alt="image" />
                      </SwiperSlide>
                    </Swiper>
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

export default HeroHomeFour;
