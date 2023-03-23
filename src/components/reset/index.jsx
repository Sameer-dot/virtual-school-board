import {useState} from "react";
import { Link } from 'react-router-dom'
import uncle from "../../assets/images/uncle.svg";

import './index.scss'

const EmailSent = () => {

  const [creds, setCreds] = useState({
    email:"",
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
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter your email"
                    value={creds.email}
                    onChange={(e) => {
                      setCreds({ ...creds, email: e.target.value });
                    }}
                  />
                </div>

                <div className="d-grid gap-2 mt-3">
                  <button
                    onClick={userLogin}
                    className="btn mt-3 btn-primary orange_background"
                    style={{
                      backgroundColor: "#F53838",
                      borderColor: "#F53838",
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 d-flex align-items-around justify-content-around content_container">
            <div className="">
              <div className="img">
                <img src={uncle} alt="login" />
              </div>
              <h1 className="heading pt-3 w-100" style={{ paddingLeft: "124px" }}>
                Virtual School Board
              </h1>
              <p className="white_text">
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
}

export default EmailSent;