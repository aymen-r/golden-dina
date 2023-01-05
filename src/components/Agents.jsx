import React from "react";

const Agents = () => {
  return (
    <section className="ftco-section ftco-agent">
      <div className="container">
        <div className="row justify-content-center pb-5">
          <div className="col-md-12 heading-section text-center ftco-animate">
            <span className="subheading">STAFF</span>
            <h2 className="mb-4">Our Staff</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-4 ftco-animate">
            <div className="agent">
              <div className="img">
                <img
                  src="images/team-1.jpg"
                  className="img-fluid"
                  alt="Colorlib Template"
                />
                <div className="desc">
                  <h3>
                    <a href="properties.html">Aziz Yahya</a>
                  </h3>
                  <p className="h-info">
                    <span className="location">CEO</span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agents;
