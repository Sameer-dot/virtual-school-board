import { useState, useEffect } from "react";
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
      {!isLoading && <div><LandingPage /></div>}
    </div>
  );
}

export default App;
