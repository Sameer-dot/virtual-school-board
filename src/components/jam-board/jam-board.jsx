import React from "react";
import login from "../../assets/images/login.svg";
import Header from "./../header/header";
import Footer from "./../footer/footer";

const JamBoard = () => {
  return (
    <>
      <Header />
      <div style={{ height: "100vh", background: "#000" }}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img src={login} alt="under development" />
          <h1 className="mt-4" style={{ color: "#fff" }}>
            This feature is under Construction🏗
          </h1>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JamBoard;
