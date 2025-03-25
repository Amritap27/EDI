import React from 'react';
import CounterUp from '../../lib/CounterUp.jsx'; 
function FunfactHomeFive({ className }) {
        const percentage1 = 30;
        const percentage2 = 5;
        const percentage3 = 10;
        const percentage4 = 4;
 
    return (
        <>
            <section className={`funfact-five-area pt-70 pb-70 ${className || ""}`}>
                <div className="container">
                    <div className="funfact-five__wrp">
                        <div className="funfact-five__item hover-item wow bounceInUp" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <h2><CounterUp count={percentage1} time={3} /></h2>
                            <p>OF INTERIOR</p>
                        </div>
                        <div className="funfact-five__item hover-item active wow bounceInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <h2><CounterUp count={percentage2} time={3} /></h2>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                        <div className="funfact-five__item hover-item wow bounceInUp" data-wow-delay="300ms" data-wow-duration="1500ms">
                            <h2><CounterUp count={percentage3} time={3} /></h2>
                            <p>PROFESSIONAL TEAM</p>
                        </div>
                        <div className="funfact-five__item hover-item wow bounceInUp" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <h2><CounterUp count={percentage4} time={3} /></h2>
                            <p>BEST INTERIOR AWARDS</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default FunfactHomeFive;
