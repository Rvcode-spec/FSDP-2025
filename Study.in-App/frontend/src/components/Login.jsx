import React, { useEffect, useState } from "react";
import loginImg from "../assets/login-bg.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  });

  const handleLogin = async (e) => {
    e.preventDefault();
    let result = await fetch("http://localhost:5000/Login/", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    if (result) {
      localStorage.setItem("user", JSON.stringify(result.user)); // Save user data
      navigate("/"); // Home page par le jane ka code
      console.log("date send");
    }
  };

  return (
    <div className="login">
      <div className="img-box">
        <h1>Welcome Black to study.in</h1>
        <img src={loginImg} alt="Login Background" />
      </div>

      <div className="from-container">
        <div className="close-icon"></div>
        <form>
          <h3>Login</h3>
          <input
            type="text"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <p>
            <Link to="" style={{ color: "rgb(133, 4, 4)" }}>
              Forget Password?
            </Link>
          </p>
          <button type="submit" onClick={handleLogin}>
            Log in
          </button>

          <p>
            Create an account if not yet please{" "}
            <Link to="/signup">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
