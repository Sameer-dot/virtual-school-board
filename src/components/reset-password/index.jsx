import {useState} from "react";
import { Link } from 'react-router-dom'
import reset from "../../assets/images/reset.svg";

import './index.scss'

const Login = () => {

  const [creds, setCreds] = useState({
    code:"",
    password: "",
    password2: "",
  })

  const userLogin = () => {
  }


  return (
    <div className="main_container">
        <div className="container-fluid">

        <div className="row d-flex align-items-center justify-content-center">

            <div className="col-md-6 d-flex align-items-center justify-content-center">
                <div className="Auth-form">
                    <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Reset Password</h3>
                    
                    <div className="form-group mt-3">
                        <label>Code</label>
                        <input
                        type="number"
                        className="form-control mt-1"
                        placeholder="Enter 6-digit code"
                        value={creds.code}
                        onChange={(e) => {
                            setCreds({ ...creds, email: e.target.value });
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
                    <div className="form-group mt-3">
                        <label>Confirm Password</label>
                        <input
                        type="password"
                        className="form-control mt-1"
                        placeholder="Confirm password"
                        value={creds.password2}
                        onChange={(e) => {
                            setCreds({ ...creds, password2: e.target.value });
                        }}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button onClick={userLogin} className="btn mt-3 btn-primary orange_background">
                            Confirm
                        </button>
                    </div>
                    </div>
                </div>
                </div>

            <div className="col-md-6 d-flex align-items-around justify-content-around content_container">
                <div className="">
                    <div className="img">
                        <img src={reset} alt="login" />
                    </div>
                    <h1 className="heading pt-3">
                        Virtual School Board
                    </h1>
                    <p className="white_text">
                        Join us to get access to the <span className="orange_text">first</span> & 
                        <span className="orange_text"> only </span> 
                        Virtual Board that can be used by your
                        HAND GESTURES.
                    </p>
                </div>
                
            </div>
        
        </div>
        </div>
    </div>
    
  );
}

export default Login