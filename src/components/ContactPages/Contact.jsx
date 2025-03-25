import React from 'react';
import { Link } from 'react-router-dom';
import BackToTop from '../BackToTop.jsx';
import InnerPageHeader from '../HomeOne/InnerPageHeader.jsx';
import FooterHomeThree from '../HomeThree/FooterHomeThree.jsx';
import PageTitle from '../PageTitle.jsx';

function Contact() {
  return (
    <>
      <InnerPageHeader />
      <PageTitle
        title="Contact Us"
        breadcrumb={[
          { link: '/', title: 'Home' },
          { li: '/news-details', title: 'Contact' },
        ]}
      />
      <section className="contact-details">
        <div className="container pt-120 pb-120">
          <div className="funfact__wrp">
            <div className="row">
              <div className="col-xl-7 col-lg-6">
                <div className="sec-title">
                  <span className="sub-title">Send us email</span>
                  <h2>Feel free to write</h2>
                </div>
                <form
                  id="contact_form"
                  name="contact_form"
                  className=""
                  action="includes/sendmail.php"
                  method="post"
                >
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input
                          name="form_name"
                          className="form-control"
                          type="text"
                          placeholder="Enter Name"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input
                          name="form_email"
                          className="form-control required email"
                          type="email"
                          placeholder="Enter Email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input
                          name="form_subject"
                          className="form-control required"
                          type="text"
                          placeholder="Enter Subject"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="mb-3">
                        <input
                          name="form_phone"
                          className="form-control"
                          type="text"
                          placeholder="Enter Phone"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea
                      name="form_message"
                      className="form-control required"
                      rows="7"
                      placeholder="Enter Message"
                    ></textarea>
                  </div>
                  <div className="mb-5">
                    <input
                      name="form_botcheck"
                      className="form-control"
                      type="hidden"
                      value=""
                    />
                    <button
                      type="submit"
                      className="theme-btn btn-two me-2 mb-3 mb-sm-0"
                      data-loading-text="Please wait..."
                    >
                      <span className="btn-title text-white">Send message</span>
                    </button>
                    <button type="reset" className="theme-btn btn-two">
                      <span className="btn-title text-white">Reset</span>
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-xl-5 col-lg-6">
                <div className="contact-details__right">
                  <div className="sec-title">
                    <span className="sub-title">Need any help?</span>
                    <h2>Get in touch with us</h2>
                    <div className="text">
                      <p>
                        Have questions or need assistance? Our team is ready to
                        assist you. Feel free to call, email, or visit us - we
                        look forward to hearing from you!
                      </p>
                      <h6>HOURS:</h6>
                      <p>Mon - Fri: 9:00 a.m. - 5:00 p.m.</p>
                      <p>Sat - Sun: Appointments Only</p>
                    </div>
                  </div>
                  <ul className="list-unstyled contact-details__info">
                    <li className="d-block d-sm-flex align-items-sm-center ">
                      <div className="icon">
                        <span className="far fa-phone-plus"></span>
                      </div>
                      <div className="text ml-xs--0 mt-xs-10">
                        <h6>Have any question?</h6>
                        <Link to="/tel:9705527527">
                          <span>9705527527</span>
                        </Link>
                      </div>
                    </li>
                    <li className="d-block d-sm-flex align-items-sm-center ">
                      <div className="icon">
                        <span className="far fa-envelope fa-fw"></span>
                      </div>
                      <div className="text ml-xs--0 mt-xs-10">
                        <h6>Write email</h6>
                        <Link to="/mailto:info@edi-designs.com">
                          info@edi-designs.com
                        </Link>

                        <Link to="/mailto:hr@edi-designs.com">
                          hr@edi-designs.com
                        </Link>
                        <Link to="/mailto:marketing@edi-designs.com">
                          marketing@edi-designs.com
                        </Link>
                      </div>
                    </li>
                    <li className="d-block d-sm-flex align-items-sm-center ">
                      <div className="icon">
                        <span className="far fa-location-dot fa-fw"></span>
                      </div>
                      <div className="text ml-xs--0 mt-xs-10">
                        <h6>Visit anytime</h6>
                        <span>
                          Engineering Designs Intellect (EDI) Pvt. Ltd.
                          Kalimati, Kathmandu, Nepal
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Contact Details End--> */}

      {/* <!-- Map Section--> */}
      <section className="map-section">
        <iframe
          className="map w-100"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6366.828952314455!2d85.29612712514141!3d27.69766784433541!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb190868edc517%3A0x961d5ccc4435a60d!2sEngineering%20Designs%20and%20Intellect%20(EDI)!5e1!3m2!1sen!2snp!4v1742629618450!5m2!1sen!2snp"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </section>
      {/* <!--End Map Section--> */}
      <FooterHomeThree />
      <BackToTop />
    </>
  );
}

export default Contact;
