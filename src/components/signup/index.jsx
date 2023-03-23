import {useState} from "react";
import { Link } from 'react-router-dom'
import login from "../../assets/images/login.svg";
import { useNavigate } from "react-router-dom";

import './index.scss'

const Login = () => {
    const navigate = useNavigate();

  const [creds, setCreds] = useState({
    email:"",
    username: "",
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
                    <h3 className="Auth-form-title">SignUp</h3>
                    
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                        type="email"
                        className="form-control mt-1"
                        placeholder="Enter email"
                        value={creds.email}
                        onChange={(e) => {
                            setCreds({ ...creds, email: e.target.value });
                        }}
                        />
                    </div>
                    
                    <div className="form-group mt-3">
                        <label>Username</label>
                        <input
                        type="text"
                        className="form-control mt-1"
                        placeholder="Enter Username"
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
                        <button onClick={userLogin} className="btn btn-primary orange_background"
                            style={{ backgroundColor: "#F53838",
                            borderColor: "#F53838"}}>
                            Login
                        </button>
                    </div>
                    <p className="text-center mt-2">
                        Already have an account ? <span onClick={()=>navigate("/login")} className="orange_text">Login</span>
                    </p>
                    </div>
                </div>
                </div>

            <div className="col-md-6 d-flex align-items-around justify-content-around content_container">
                <div className="d-flex flex-column justify-content-center align-items-left w-100">
                    <div className="img">
                        <img src={login} alt="login" />
                    </div>
                    <h1 className="heading w-100 mt-2" style={{paddingLeft: "164px"}}>
                        Virtual School Board
                    </h1>
                    <p className="whitee_text">
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