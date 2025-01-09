import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../Styles/SignIn.css";
const SignIn = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <div className="signup-1">
      <div className="signup-2">
        <div>
          <h3>Login</h3>
          <p>Please login to book appointment</p>

          <div className="input-con">
            <label>Email</label>
            <input ref={inputRef} type="Email" />
          </div>
          <div className="input-con">
            <label>Password</label>
            <input type="Password" />
          </div>
          <button className="button12">Login</button>
          <div className="login-con">
            <p>Don't have an account? </p>
            <Link to="/signup"> Create here</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
