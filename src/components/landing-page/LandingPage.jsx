import React from "react";
import Illustration_1 from "../../assets/images/ill_1.svg";
import Illustration_2 from "../../assets/images/ill_2.svg";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import Check from "../../assets/icons/check.svg";
import star from "../../assets/icons/star.png";

import ReviewCard from "./../Review-Card/ReviewCard";
import Header from "./../header/header";
import Footer from "./../footer/footer";

import {useNavigate} from "react-router-dom";

import "./index.scss";

const featureNames = [
  "Draw with Gestures.",
  "Different Options of Drawing Tools.",
  "Gesture-controlled Keyboard.",
  "Draw and Present Screen at the Same Time.",
];

const reviewData = [
  {
    name: "Dennis Joe",
    locs: "Warsaw, Poland",
    description:
      "Wow... I am delighted to use this, it turned out to be more than my expectations and it really helped me in many presentations.",
    img: img1,
    rating: "4.5",
  },
  {
    name: "Jessica Christy",
    locs: "Shanxi, China",
    description:
      "I like it because I like to travel far and still I can present my lectures with the great quality of content delivery.",
    img: img2,
    rating: "5.0",
  },
  {
    name: "Kim Jou",
    locs: "Seoul, South Korea",
    description:
      "My students are really happy with the quality of the content that I provide them now.",
    img: img3,
    rating: "4.8",
  },
];

const LandingPage = () => {
  const navigate = useNavigate(); 
  return (
    <>
      <Header />
      <div className="bg-black">
        <div className="container">
          <div className="main-section">
            <div className="d-flex justify-content-between align-items-center w-100">
              <div className="d-flex flex-column mr-3 w-50">
                <h1 className="hero-text pb-2">
                  Want teaching to be easy with <strong>VSB</strong>.
                </h1>
                <p className="hero-detail pb-4">
                  A simple and better tool to make your lecture more creative
                  and valuable.
                </p>
                <button className="hero-btn" onClick={() => navigate("/jam-board")}>Get Started</button>
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
                <h1 className="features-main-text pb-2">
                  We Provide Many Features You Can Use.
                </h1>
                <p className="features-detail pb-4">
                  You can explore the features that we provide with fun and have
                  their own functions each feature.
                </p>
                <div className="d-flex flex-column justify-content-center align-items-left">
                  {featureNames.map((name) => (
                    <div
                      key={"name_" + name}
                      className="d-flex align-items-center"
                    >
                      <img src={Check} alt="check" className="pr-4" />
                      <p className="features-text">{name}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="reviews-section" style={{paddingBottom: "80px"}}>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <h1 className="reviews-main-text pb-2">
                Trusted by Thousands of Happy Customer
              </h1>
              <p className="reviews-detail pb-4">
                These are the stories of our customers who have joined us with
                great pleasure when using this crazy feature.
              </p>
              <div className="d-flex justigfy-content-between align-items-center">
                {reviewData.map((data, index) => (
                  <ReviewCard key={index + "card"} data={data} star={star} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default LandingPage;
