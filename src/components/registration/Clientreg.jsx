// signup.jsxCannot GET /signup
import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Clientreg() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    // Validate email and password format
    if (!isValidEmail(email) || password.length < 8) {
      alert("Invalid email or password (password must be at least 8 characters long)");
      return;
    }

    try {
      await axios.post("http://localhost:3006/csignup", {
        email,
        password,
      })
      .then((res) => {
        if (res.data === "exist") {
          alert("User already exists");
        } else if (res.data === "notexist") {
          history("/", { state: { id: email } });
        }
      })
      .catch((e) => {
        alert("Error occurred while signing up");
        console.log(e);
      });
    } catch (e) {
      console.log(e);
    }
  }

  // Function to validate email format
  const isValidEmail = (email) => {
    // Email regex pattern for basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="login">
      <h1>Signup</h1>
      <form>
        <input type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <input type="submit" onClick={submit} />
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/login">Login Page</Link>
    </div>
  );
}

export default Clientreg;
