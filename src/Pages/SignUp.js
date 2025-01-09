import React, { useEffect, useRef, useState } from "react";
import { json, Link } from "react-router-dom";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../Styles/SignUp.css";
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const inputRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`data enterd   ${email}, ${password}`);

    fetchData();
  };
  const fetchData = async () => {
    const data = { email, password };
    const url = "https://reqres.in/api/register";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(data),
    };
    let response = await fetch(url, options);
    console.log(response);
  };
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="signup-1">
      <div className="signup-2">
        <form onSubmit={handleSubmit}>
          <h3>Create Account</h3>
          <p>Please sign up to book appointment</p>
          <div className="input-con">
            <label>Full Name</label>
            <input
              ref={inputRef}
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input-con">
            <label>Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="input-con">
            <label>Password</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="button12">
            Create account
          </button>
          <div className="login-con">
            <p>Already have an account? </p>
            <Link to="/signin"> Login here</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
