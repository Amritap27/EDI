import React from 'react';
import ContactShapeImage from '../../assets/images/shape/contact-shape.png';
import ContactImage1 from '../../assets/images/contact/contact-image.jpg';
import ContactIconImage1 from '../../assets/images/icon/contact-icon1.png';
import ContactIconImage2 from '../../assets/images/icon/contact-icon2.png';


function ContactHomeOne({ className }) {
    return (
        <>
            <section className={`contact-area ${className || ""}`}>
                <div className="contact__shape">
                    <img src={ContactShapeImage} alt="shape"/>
                </div>
                <div className="col-lg-7">
                    <div className="contact__image">
                        <figure className="gsap__parallax">
                            <img src={ContactImage1} alt="image"/>
                        </figure>
                    </div>
                </div>
                <div className="contact__wrp">
                    <div className="contact__form dark-area">
                        <div className="section-header mb-30">
                            <h4 className="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">CONTACT US</h4>
                            <h2 className="wow splt-txt" data-splitting>Get in Touch</h2>
                        </div>
                        <form>
                            <div className="row g-3">
                                <div className="col-sm-6">
                                    <input type="text" placeholder="Your Name"/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="email" placeholder="Email Address"/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" placeholder="Enter Subject"/>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" placeholder="Enter Phone"/>
                                </div>
                            </div>
                            <textarea className="my-3" name="masage" id="masage" placeholder="Write a Message"></textarea>
                            <button className="submit">SEND A MESSAGE</button>
                        </form>
                    </div>
                    <div className="contact__item light-area">
                        <div className="inner-box">
                            <div className="icon mb-20">
                                <img src={ContactIconImage1} alt="icon"/>
                            </div>
                            <div className="icon-two">
                                <img src={ContactIconImage2} alt="icon"/>
                            </div>
                            <div className="info">
                                <h6 className="mb-1">Call us for any inquiry</h6>
                                <h3>(000) 222 22 333</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        {/* <section class="contact-area">
            <div class="contact__shape">
                <img src="assets/images/shape/contact-shape-dark.png" alt="shape">
            </div>
            <div class="col-lg-7">
                <div class="contact__image">
                    <figure class="gsap__parallax">
                        <img src="assets/images/contact/contact-image.jpg" alt="image">
                    </figure>
                </div>
            </div>
            <div class="contact__wrp">
                <div class="contact__form dark-area">
                    <div class="section-header mb-30">
                        <h4 class="wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">CONTACT US</h4>
                        <h2 class="wow splt-txt" data-splitting>Get in Touch</h2>
                    </div>
                    <form action="#">
                        <div class="row g-3">
                            <div class="col-sm-6">
                                <input type="text" placeholder="Your Name">
                            </div>
                            <div class="col-sm-6">
                                <input type="email" placeholder="Email Address">
                            </div>
                            <div class="col-sm-6">
                                <input type="text" placeholder="Enter Subject">
                            </div>
                            <div class="col-sm-6">
                                <input type="text" placeholder="Enter Phone">
                            </div>
                        </div>
                        <textarea class="my-3" name="masage" id="masage" placeholder="Write a Message"></textarea>
                        <button class="submit">SEND A MESSAGE</button>
                    </form>
                </div>
                <div class="contact__item light-area">
                    <div class="inner-box">
                        <div class="icon mb-20">
                            <img src="assets/images/icon/contact-icon1.png" alt="icon">
                        </div>
                        <div class="icon-two">
                            <img src="assets/images/icon/contact-icon2.png" alt="icon">
                        </div>
                        <div class="info">
                            <h6 class="mb-1">Call us for any inquiry</h6>
                            <h3>(000) 222 22 333</h3>
                        </div>
                    </div>
                </div>
            </div>
        </section> */}
        </>
    );
}

export default ContactHomeOne;
