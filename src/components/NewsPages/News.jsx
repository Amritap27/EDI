import React from 'react';
import { Link } from 'react-router-dom';
import NewsImage1 from '../../assets/images/blog/blog-image1.jpg';
import NewsImage2 from '../../assets/images/blog/blog-image2.jpg'; 
import NewsImage3 from '../../assets/images/blog/blog-image3.jpg'; 
function News() {
    return (
        <>
        <section className="blog-section pt-120 pb-120">
            <div className="auto-container">
                <div className="blog__wrp">
                    <div className="row g-4">
                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="blog__item">
                                <Link to="/news-details" className="blog__image">
                                    <img src={NewsImage1} alt="image"/>
                                </Link>
                                <div className="blog__content">
                                    <ul>
                                        <li><strong>FURNITURE</strong></li>
                                        <li><span>May 25, 2024</span></li>
                                    </ul>
                                    <h4 className="mt-10"><Link to="/news-details">Detailed Accents on Custom of Built Office Design</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="blog__item">
                                <Link to="/news-details" className="blog__image">
                                    <img src={NewsImage2} alt="image"/>
                                </Link>
                                <div className="blog__content">
                                    <ul>
                                        <li><strong>WOOD CUTTING</strong></li>
                                        <li><span>May 28, 2024</span></li>
                                    </ul>
                                    <h4 className="mt-10"><Link to="/news-details">We specialize in restoring antique Interior design</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="blog__item">
                                <Link to="/news-details" className="blog__image">
                                    <img src={NewsImage3} alt="image"/>
                                </Link>
                                <div className="blog__content">
                                    <ul>
                                        <li><strong>CRAFTING</strong></li>
                                        <li><span>May 31, 2024</span></li>
                                    </ul>
                                    <h4 className="mt-10"><Link to="/news-details">We creating in the Unique of interior showcasing</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="blog__item">
                                <Link to="/news-details" className="blog__image">
                                    <img src={NewsImage3} alt="image"/>
                                </Link>
                                <div className="blog__content">
                                    <ul>
                                        <li><strong>CRAFTING</strong></li>
                                        <li><span>May 31, 2024</span></li>
                                    </ul>
                                    <h4 className="mt-10"><Link to="/news-details">We creating in the Unique of interior showcasing</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="blog__item">
                                <Link to="/news-details" className="blog__image">
                                    <img src={NewsImage1} alt="image"/>
                                </Link>
                                <div className="blog__content">
                                    <ul>
                                        <li><strong>FURNITURE</strong></li>
                                        <li><span>May 25, 2024</span></li>
                                    </ul>
                                    <h4 className="mt-10"><Link to="/news-details">Detailed Accents on Custom of Built Office Design</Link></h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="blog__item">
                                <Link to="/news-details" className="blog__image">
                                    <img src={NewsImage3} alt="image"/>
                                </Link>
                                <div className="blog__content">
                                    <ul>
                                        <li><strong>CRAFTING</strong></li>
                                        <li><span>May 31, 2024</span></li>
                                    </ul>
                                    <h4 className="mt-10"><Link to="/news-details">We creating in the Unique of interior showcasing</Link></h4>
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

export default News;