import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";
import Login from "./components/login";
import Signup from "./components/signup";
import ResetPassword from "./components/reset-password";
import EmailSent from "./components/reset/index";
import JamBoard from "./components/jam-board/jam-board";
import Nothing from "./components/nothing-found/Nothing";

function App() {
  
  const [isLoading, setIsLoader] = useState(true);

  useEffect(()=> {
    setTimeout(() => {
      setIsLoader(false);
    }, 1000);
  },[])


  const loaderContainer = {
    display: "flex",
    justifyContent: "center",
    height: "100vh",
    alignItems: "center",
  };

  return (
    <div>
      {isLoading && (
        <div style={loaderContainer}>
          <div
            className="spinner-grow"
            role="status"
            style={{ width: "5rem", height: "5rem" }}
          ></div>
        </div>
      )}
      {!isLoading && (
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route path="/reset" element={<EmailSent />} />
            <Route path="/jam-board" element={<JamBoard />} />
            <Route path="*" element={<Nothing />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
