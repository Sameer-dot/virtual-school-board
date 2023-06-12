import React,{useEffect,useRef} from "react";
import login from "../../assets/images/login.svg";
import Header from "./../header/header";
import Footer from "./../footer/footer";

const JamBoard = () => {


   const imgRef = useRef();

   useEffect(() => {
     imgRef.current.src =
       "https://dfc2-119-155-13-241.ngrok-free.app/api/cv/video_feed";
   }, []);

  return (
    <>
      <Header />
      <div style={{ height: "100vh", background: "#000" }}>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <img style={{height: "625px", width: "1200px"}} ref={imgRef} alt="Video Feed" />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default JamBoard;
