import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import 'swiper/css/pagination';
import Projectimage1 from '../../assets/images/bg/project-one-bg.jpg';
import Projectimage2 from '../../assets/images/bg/project-one-bg2.jpg';
import Projectimage3 from '../../assets/images/bg/project-one-bg3.jpg';
import Projectimage4 from '../../assets/images/bg/project-one-bg4.jpg';


const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 0,
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
            slidesPerView: 2,
        },
        991: {
            slidesPerView: 3,
        },
        1199: {
            slidesPerView: 3,
        },
        1350: {
            slidesPerView: 4,
        },
    }
};

function ProjectHomeOne({ className }) {
    return (
        <>
        <section className={`project-area ${className}`}>
            <div className="section-header__icon text-center mb-50">
                <div className="mb-10 wow bounceIn">
                    <svg width="45" height="38" viewBox="0 0 45 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_1_1896)">
                            <path d="M9.5613 23.1832V30.8979H22.1409V7.65178L16.0303 11.3706H16.0289L15.333 11.7945L9.5613 15.3074V23.1832ZM40.8147 31.6549H36.1561H22.8584V37.2429H40.8147V31.6549ZM40.8147 18.5787L36.1561 15.7434V23.1832V30.8979H40.8147V18.5787ZM41.5328 18.1464L45 20.2564V21.1263L41.5328 19.0163V30.8986H45V31.6549H41.5328V37.9992C35.0696 38.0008 28.6049 37.9992 22.1409 37.9992V31.6549H9.5613V38H8.84316V31.6549H4.18459V38H3.46645V31.6549H0.0251349V30.8986H3.46717V19.0163L0 21.1255V20.2556L3.46645 18.1456V6.78039H4.18459V17.7096L8.84388 14.8743V6.78039H9.56201V14.4375L14.9775 11.1419L15.6727 10.7187V10.7179L22.1416 6.78039V6.34355V0L22.6788 0.326301L41.5335 11.7832V18.1464H41.5328ZM35.9759 14.7638L40.8147 17.7088V12.2154L22.8584 1.30596V6.34431V6.78115C27.2318 9.44152 31.6024 12.1026 35.9759 14.7638ZM12.9315 20.03H15.3165V17.515H12.9315V20.03ZM16.3858 17.515V20.03H18.7707V17.515H16.3858ZM18.7714 21.0505H16.3865V23.5656H18.7714V21.0505ZM15.3165 23.5656V21.0505H12.9315V23.5656H15.3165ZM8.84388 30.8986V15.7434L4.18459 18.5794V30.8986H8.84388Z" fill="#131313" />
                        </g>
                        <defs>
                            <clipPath id="clip0_1_1896">
                                <rect width="45" height="38" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <h2 className="wow splt-txt" data-splitting>Our Latest Project</h2>
            </div>
            <div className="project__wrp" style={{ backgroundImage: `url(${Projectimage1})` }}>
                <div className="project__slider-arrys rtl-style">
                    <button className="project__arry-prev"><i className="fa-regular fa-arrow-left"></i></button>
                    <button className="project__arry-next"><i className="fa-regular fa-arrow-right"></i></button>
                </div>
                <div className="swiper project__slider">
                    <Swiper {...swiperOptions}
                        modules={[Navigation]}
                        navigation={{
                        prevEl: ".project__arry-prev",
                        nextEl: ".project__arry-next",
                        }}
                        className="swiper-wrapper">
                        <SwiperSlide className="swiper-slide">
                            <div className="project__item" data-bg={Projectimage1}>
                                <div className="project__content">
                                    <h6 className="wow splt-txt" data-splitting>Bedroom</h6>
                                    <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">The Fox House</Link></h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="project__item" data-bg={Projectimage2}>
                                <div className="project__content">
                                    <h6 className="wow splt-txt" data-splitting>Furniture</h6>
                                    <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">Minimalism</Link></h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="project__item" data-bg={Projectimage3}>
                                <div className="project__content">
                                    <h6 className="wow splt-txt" data-splitting>Interior</h6>
                                    <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">House Lighting</Link></h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="project__item" data-bg={Projectimage4}>
                                <div className="project__content">
                                    <h6 className="wow splt-txt" data-splitting>Bedroom</h6>
                                    <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">The Fox House</Link></h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="project__item" data-bg={Projectimage1}>
                                <div className="project__content">
                                    <h6 className="wow splt-txt" data-splitting>Bedroom</h6>
                                    <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">The Fox House</Link></h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="project__item" data-bg={Projectimage2}>
                                <div className="project__content">
                                    <h6 className="wow splt-txt" data-splitting>Furniture</h6>
                                    <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">Minimalism</Link></h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="project__item" data-bg={Projectimage3}>
                                <div className="project__content">
                                    <h6 className="wow splt-txt" data-splitting>Interior</h6>
                                    <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">House Lighting</Link></h4>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide className="swiper-slide">
                            <div className="project__item" data-bg={Projectimage4}>
                                <div className="project__content">
                                    <h6 className="wow splt-txt" data-splitting>Bedroom</h6>
                                    <h4 className="wow splt-txt" data-splitting><Link to="/page-project-details">The Fox House</Link></h4>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </section>
        </>
    );
}

export default ProjectHomeOne;