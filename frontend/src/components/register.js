import React, { useEffect, useState } from "react";
import Axios from "axios";
import "../Styling/Register.css";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile_no, setMobileno] = useState("");
  const [age, setAge] = useState(0);
  const url = "http://localhost:8080/user";

  const handleSubmit = (e) => {
    e.preventDefault();
    Axios.post(`${url}/register`, {
      username: username,
      email: email,
      password: password,
      mobile_no: mobile_no,
      age: age,
    }).then((response) => {
      setUsername("");
      setEmail("");
      setPassword("");
      setMobileno("");
      setAge("");
      navigate("/");
    });
  };

  return (
    <div className="register-container">
      <h2 className="register-title">Register</h2>
      <form onSubmit={handleSubmit} className="register-form">
        <div className="">
          <label htmlFor="username" className="form-label">
            User Name
          </label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Your username"
            id="username"
            name="username"
          />
        </div>
        <div className="">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email"
            id="email"
            name="email"
          />
        </div>
        <div className="">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Your password"
            id="password"
            name="password"
          />
        </div>
        <div className="">
          <label htmlFor="mobile_no" className="form-label">
            Mobile No
          </label>
          <input
            type="text"
            className="form-control"
            value={mobile_no}
            onChange={(e) => setMobileno(e.target.value)}
            placeholder="Your mobile number"
            id="mobile"
            name="mobile"
          />
        </div>
        <div className="">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Your age"
            id="age"
            name="age"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
