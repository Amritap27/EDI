import React from 'react';
import { Link } from 'react-router-dom';
import CounterUp2 from '../../lib/CounterUp2.jsx'; 
import BackToTop from '../BackToTop.jsx';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import PageTitle from '../PageTitle.jsx';
import ProgressBar2 from '../../lib/ProgressBar2';

// Import images
import TeamDetailsImg from '../../assets/images/resource/team-details.jpg';
const percentage1 = 80;
const percentage2 = 70;
const percentage3 = 55; 

function TeamDetails() {
    return (
        <>
            <InnerPageHeader />
            <PageTitle
                title="Team Details"
                breadcrumb={[
                    { link: '/', title: 'Home' },
                    { li: '/team-details', title: 'Team Details' },
                ]}
            />
            <section className="team-details">
                <div className="container pb-100">
                    <div className="team-five__wrp">
                        <div className="team-details__top pb-70">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="team-details__top-left">
                                        <div className="team-details__top-img"> <img src={TeamDetailsImg} alt="Image 1"/>
                                            <div className="team-details__big-text"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="team-details__top-right">
                                        <div className="team-details__top-content">
                                            <h3 className="team-details__top-name">Alen Hispro</h3>
                                            <p className="team-details__top-title">Chief Attorney</p>
                                            <p className="team-details__top-text-1">I help my clients stand out and they help me grow.</p>
                                            <div className="team-details-contact mb-30">
                                                <h5 className="mb-0">Email Address</h5>
                                                <div className=""><span>needhelp@yourdomain.com</span></div>
                                            </div>
                                            <div className="team-details-contact mb-30">
                                                <h5 className="mb-0">Phone Number</h5>
                                                <div className=""><span>+012-3456-789</span></div>
                                            </div>
                                            <div className="team-details-contact">
                                                <h5 className="mb-0">Web Address</h5>
                                                <div className=""><span>www.yourdomain.com</span></div>
                                            </div>
                                            <div className="team-details__social">
                                                <Link className="text-white" to="#"><i className="fab fa-twitter"></i></Link>
                                                <Link className="text-white" to="#"><i className="fab fa-facebook"></i></Link>
                                                <Link className="text-white" to="#"><i className="fab fa-pinterest-p"></i></Link>
                                                <Link className="text-white" to="#"><i className="fab fa-instagram"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="team-details__bottom pt-100">
                            <div className="row">
                                <div className="col-xl-6 col-lg-6">
                                    <div className="team-details__bottom-left">
                                        <h4 className="team-details__bottom-left-title">Personal Experience</h4>
                                        <p className="team-details__bottom-left-text">When an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries architecto dolorem ipsum quia</p>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6">
                                    <div className="team-details__bottom-right">
                                        <div className="team-details__progress">
                                            <ProgressBar2 title="Expertise & Experience" targetPercentage={80} />
                                            <ProgressBar2 title="Innovative Solutions" targetPercentage={70} />
                                            <ProgressBar2 title="Cost Efficiency" targetPercentage={55} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="team-contact-form">
                <div className="container pb-100 pt-100">
                    <div className="sec-title mb-50 text-center">
                        <span className="sub-title">Contact With Us Now</span>
                        <h2 className="section-title__title">Feel Free to Write Our <br /> Alen Hispro</h2>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <form id="contact_form" name="contact_form" className="" action="includes/sendmail.php" method="post">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="form_name" className="form-control" type="text" placeholder="Enter Name"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="form_email" className="form-control required email" type="email" placeholder="Enter Email"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="form_subject" className="form-control required" type="text" placeholder="Enter Subject"/>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div className="mb-3">
                                            <input name="form_phone" className="form-control" type="text" placeholder="Enter Phone"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <textarea name="form_message" className="form-control required" rows="5" placeholder="Enter Message"></textarea>
                                </div>
                                <div className="mb-3 text-center">
                                    <input name="form_botcheck" className="form-control" type="hidden" value="" />
                                    <button type="submit" className="theme-btn btn-one me-2" data-loading-text="Please wait..."><span className="btn-title text-white">Send message</span></button>
                                    <button type="reset" className="theme-btn btn-one"><span className="btn-title text-white">Reset</span></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <FooterHomeThree />
            <BackToTop />
        </>
    );
}

export default TeamDetails;
