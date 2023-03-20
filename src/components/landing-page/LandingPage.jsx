import React from "react";
import Illustration_1 from "../../assets/images/ill_1.svg";
import Illustration_2 from "../../assets/images/ill_2.svg";

import "./index.scss";

const LandingPage = () => {
  return (
    <div className="bg-black">
      <div className="container">
        <div className="main-section">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="d-flex flex-column mr-3 w-50">
              <h1 className="hero-text pb-2">
                Want teaching to be easy with <strong>VSB</strong>.
              </h1>
              <p className="hero-detail pb-4">
                A simple and better tool to make your lecture more creative and
                valuable.
              </p>
              <button className="hero-btn">Get Started</button>
            </div>
            <div className="img-section">
              <img
                src={Illustration_1}
                alt="illustration 1"
                className="image"
              />
            </div>
          </div>
        </div>
        <div className="secondary-section">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="img-section">
              <img
                src={Illustration_2}
                alt="illustration 2"
                className="image"
              />
            </div>
            <div className="d-flex flex-column mr-3 w-50">
              <h1 className="features-text pb-2">
                We Provide Many Features You Can Use.
              </h1>
              <p className="features-detail pb-4">
                You can explore the features that we provide with fun and have
                their own functions each feature.
              </p>
              <button className="hero-btn">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
