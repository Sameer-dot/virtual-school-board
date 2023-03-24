import React from "react";
import uncle from "../../assets/images/uncle.svg";

const Nothing = () => {
  return (
    <div style={{ height: "100vh", background: "#000" }}>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img src={uncle} alt="under development" />
        <h1 className="mt-4" style={{ color: "#fff" }}>
          Nothing Found here⛔
        </h1>
      </div>
    </div>
  );
};

export default Nothing;
