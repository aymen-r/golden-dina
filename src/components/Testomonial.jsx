import React from "react";

const Testomonial = () => {
  return (
    <section className="ftco-section testimony-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-7 text-center heading-section ftco-animate">
            <span className="subheading">Testimonial</span>
            <h2 className="mb-3">Happy Clients</h2>
          </div>
        </div>
        <div className="row ftco-animate">
          <div className="d-flex flex-wrap">
            <div className="item col-md-4">
              <div className="testimony-wrap py-4">
                <div className="text">
                  <span className="fa fa-quote-left" />
                  <p className="mb-4">
                    ONE OF THE WORLD'S MOST VALUABLE, MOST INNOVATIVE AND MOST
                    ADMIRED COMPANIES
                  </p>
                  <div className="d-flex align-items-center">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(images/person_1.jpg)" }}
                    />
                    <div className="pl-3">
                      <p className="name">Roger Scott</p>
                      <span className="position">Marketing Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item  col-md-4">
              <div className="testimony-wrap py-4">
                <div className="text">
                  <span className="fa fa-quote-left" />
                  <p className="mb-4">
                    motivated and passionate team of officers with an unwavering
                    commitment to excellence,
                  </p>
                  <div className="d-flex align-items-center">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(images/person_2.jpg)" }}
                    />
                    <div className="pl-3">
                      <p className="name">Rachel Sutton</p>
                      <span className="position">Finance Manager</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item col-md-4">
              <div className="testimony-wrap py-4">
                <div className="text">
                  <span className="fa fa-quote-left" />
                  <p className="mb-4">BEST CUSTOMER EXPERIENCE</p>
                  <div className="d-flex align-items-center">
                    <div
                      className="user-img"
                      style={{ backgroundImage: "url(images/person_3.jpg)" }}
                    />
                    <div className="pl-3">
                      <p className="name">Hector Reynolds</p>
                      <span className="position">Marketing Manager</span>
                    </div>
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

export default Testomonial;
