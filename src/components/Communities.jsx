/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Communities = () => {
  return (
    <section className="ftco-section ftco-no-pt">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 heading-section text-center ftco-animate mb-5">
            <span className="subheading">Properties</span>
            <h2 className="mb-2">Properties for this Cities</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <a
              href="#"
              className="search-place img"
              style={{ backgroundImage: "url(images/dubai.jpeg)" }}
            >
              <div className="desc">
                <h3>
                  <span>Dubai</span>
                </h3>
                <span>24 Properties</span>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="#"
              className="search-place img"
              style={{ backgroundImage: "url(images/sharja.jpg)" }}
            >
              <div className="desc">
                <h3>
                  <span>Sharjah</span>
                </h3>
                <span>20 Properties</span>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a
              href="#"
              className="search-place img"
              style={{ backgroundImage: "url(images/AbuDhabi.jpg)" }}
            >
              <div className="desc">
                <h3>
                  <span>Abudhabi</span>
                </h3>
                <span>15 Properties</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Communities;
