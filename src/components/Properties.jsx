/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FiLink } from "react-icons/fi";
import { FaBed, FaBath } from "react-icons/fa";

const Properties = () => {
  return (
    <section className="ftco-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12 heading-section text-center ftco-animate mb-5">
            <span className="subheading">What we offer</span>
            <h2 className="mb-2">Featured Properties</h2>
          </div>
        </div>
        <div className="row ftco-animate">
          <div className="d-flex flex-wrap">
            <div className="item col-md-4">
              <div className="property-wrap ftco-animate">
                <a
                  href="#"
                  className="img"
                  style={{ backgroundImage: "url(images/work-1.jpg)" }}
                >
                  <div className="rent-sale">
                    <span className="sale">Sale</span>
                  </div>
                  <p className="price">
                    <span className="orig-price">$300,000</span>
                  </p>
                </a>
                <div className="text">
                  <ul className="property_list">
                    <li>
                      <FaBed /> 3
                    </li>
                    <li>
                      <FaBath /> 2
                    </li>
                    <li>
                      <span className="flaticon-floor-plan" />
                      1,550 sqft
                    </li>
                  </ul>
                  {/* <h3>
                    <a href="#">The Blue Sky Home</a>
                  </h3> */}
                  <span className="location">Dubai</span>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center btn-custom"
                  >
                    <FiLink style={{ color: "white" }} />
                  </a>
                  <div className="list-team d-flex align-items-center mt-2 pt-2 border-top">
                    <div className="d-flex align-items-center">
                      <div
                        className="img"
                        style={{
                          backgroundImage: "url(images/person_4.jpg)",
                        }}
                      />
                      <h3 className="ml-2">Fernando White</h3>
                    </div>
                    <span className="text-right">3 weeks ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item  col-md-4">
              <div className="property-wrap ftco-animate">
                <a
                  href="#"
                  className="img"
                  style={{ backgroundImage: "url(images/work-2.jpg)" }}
                >
                  <div className="rent-sale">
                    <span className="rent">Rent</span>
                  </div>
                  <p className="price">
                    <span className="old-price">800,000</span>
                    <span className="orig-price">
                      $3,050<small> / mo</small>
                    </span>
                  </p>
                </a>
                <div className="text">
                  <ul className="property_list">
                    <li>
                      <FaBed />3
                    </li>
                    <li>
                      <FaBath />2
                    </li>
                    <li>
                      <span className="flaticon-floor-plan" />
                      1,600 sqft
                    </li>
                  </ul>
                  {/* <h3>
                    <a href="#">The Blue Sky Home</a>
                  </h3> */}
                  <span className="location">Dubai</span>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center btn-custom"
                  >
                    <FiLink style={{ color: "white" }} />
                  </a>
                  <div className="list-team d-flex align-items-center mt-2 pt-2 border-top">
                    <div className="d-flex align-items-center">
                      <div
                        className="img"
                        style={{
                          backgroundImage: "url(images/person_1.jpg)",
                        }}
                      />
                      <h3 className="ml-2">John Dorf</h3>
                    </div>
                    <span className="text-right">2 weeks ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="item  col-md-4">
              <div className="property-wrap ftco-animate">
                <a
                  href="#"
                  className="img"
                  style={{ backgroundImage: "url(images/work-3.jpg)" }}
                >
                  <div className="rent-sale">
                    <span className="rent">Rent</span>
                  </div>
                  <p className="price">
                    <span className="orig-price">
                      $300<small> / mo</small>
                    </span>
                  </p>
                </a>
                <div className="text">
                  <ul className="property_list">
                    <li>
                      <FaBed />1
                    </li>
                    <li>
                      <FaBath />1
                    </li>
                    <li>
                      <span className="flaticon-floor-plan" />
                      800 sqft
                    </li>
                  </ul>
                  {/* <h3>
                    <a href="#">The Blue Sky Home</a>
                  </h3> */}
                  <span className="location">Dubai</span>
                  <a
                    href="#"
                    className="d-flex align-items-center justify-content-center btn-custom"
                  >
                    <FiLink style={{ color: "white" }} />
                  </a>
                  <div className="list-team d-flex align-items-center mt-2 pt-2 border-top">
                    <div className="d-flex align-items-center">
                      <div
                        className="img"
                        style={{
                          backgroundImage: "url(images/person_3.jpg)",
                        }}
                      />
                      <h3 className="ml-2">Hector Reynolds</h3>
                    </div>
                    <span className="text-right">2 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Properties;
