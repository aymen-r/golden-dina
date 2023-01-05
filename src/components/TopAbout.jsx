import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const TopAbout = ({ page }) => {
  return (
    <section
      className="hero-wrap hero-wrap-2"
      style={{ backgroundImage: 'url("images/bg_1.jpg")' }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay" />
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-center">
          <div className="col-md-9 ftco-animate pb-0 text-center">
            <p className="breadcrumbs">
              <span className="mr-2">
                <Link to={"/"}>
                  Home <AiOutlineRight />
                </Link>
              </span>{" "}
              <span>
                {page} <AiOutlineRight />
              </span>
            </p>
            <h1 className="mb-3 bread">{page}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopAbout;
