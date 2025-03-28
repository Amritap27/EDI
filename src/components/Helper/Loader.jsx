import React from 'react';

function Loader() {
  return (
    <div id="preloader">
      <div className="animation-preloader">
        <div className="spinner"></div>
        <div className="txt-loading">
          <span data-text-preloader="E" className="letters-loading">
            E
          </span>
          <span data-text-preloader="." className="letters-loading">
            .
          </span>
          <span data-text-preloader="D" className="letters-loading">
            D
          </span>
          <span data-text-preloader="." className="letters-loading">
            .
          </span>
          <span data-text-preloader="I" className="letters-loading">
            I
          </span>
          <span data-text-preloader="." className="letters-loading">
            .
          </span>
        </div>
        <p className="text-center">Loading...</p>
      </div>
      <div className="loader">
        <div className="row">
          <div className="col-3 loader-section section-left">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-left">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg"></div>
          </div>
          <div className="col-3 loader-section section-right">
            <div className="bg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
