import { useEffect, useState, } from "react";
import { Link } from "react-router-dom";
import login_img from "../../assets/images/login.svg";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../features/auth/authSlice.js";

import "./index.scss";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [creds, setCreds] = useState({
    username: "",
    password: "",
  });


  const userLogin = async() => {
    if(creds.email === "" || creds.password === ""){
        console.log("empty!")
    } else{
        const result = await dispatch(login({username: creds.username, password: creds.password}));
        if(result.payload.id){
          console.log("login success")
        }
    }
  };

  return (
    <div className="main_container">
      <div className="container-fluid">
        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-md-6 d-flex align-items-center justify-content-center">
            <div className="Auth-form">
              <div className="Auth-form-content">
                <h3 className="Auth-form-title">LogIn</h3>
                <div className="text-center">
                  Not registered yet?{" "}
                  <span
                    onClick={() => navigate("/signup")}
                    className="orange_text"
                  >
                    Sign Up
                  </span>
                </div>
                <div className="form-group mt-3">
                  <label>Username</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter username"
                    value={creds.username}
                    onChange={(e) => {
                      setCreds({ ...creds, username: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group mt-3">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter password"
                    value={creds.password}
                    onChange={(e) => {
                      setCreds({ ...creds, password: e.target.value });
                    }}
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button
                    onClick={userLogin}
                    className="btn btn-primary orange_background"
                    style={{
                      backgroundColor: "#F53838",
                      borderColor: "#F53838",
                    }}
                  >
                    Login
                  </button>
                </div>
                <p className="text-center mt-2">
                  <a href="/reset" className="orange_text">
                    Forgot password?
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-around justify-content-around content_container">
            <div className="">
              <div className="img">
                <img src={login_img} alt="login" />
              </div>
              <h1 className="heading pt-3 w-100" style={{ paddingLeft: "164px" }}>
                Virtual School Board
              </h1>
              <p className="whitee_text">
                Join us to get access to the{" "}
                <span className="orange_text">first</span> &
                <span className="orange_text"> only </span>
                Virtual Board that can be used by your HAND GESTURES.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
