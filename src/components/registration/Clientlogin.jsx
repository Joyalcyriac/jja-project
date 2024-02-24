import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Clientlogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    // Validate email format and password length
    if (!isValidEmail(email) || password.length < 8) {
      alert("Invalid email or password (password must be at least 8 characters long)");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3006/clogin", {
        email,
        password,
      });

      if (response.data.success) {
        alert(response.data.message);
        // Redirect to desired page after successful login
        navigate("/land");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Error occurred while logging in");
    }
  }

  // Function to validate email format
  const isValidEmail = (email) => {
    // Email regex pattern for basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={submit}>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
        <button type="submit">Login</button>
      </form>
      <br />
      <p>OR</p>
      <br />
      <Link to="/clientreg">Signup Page</Link>
    </div>
  );
}

export default Clientlogin;
