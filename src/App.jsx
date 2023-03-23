import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landing-page/LandingPage";

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
          >
          </div>
        </div>
      )}
      {!isLoading && (
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Router>
      )}
    </div>
  );
}

export default App;
