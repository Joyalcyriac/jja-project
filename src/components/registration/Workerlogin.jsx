import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function WorkerLogin() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3006/wlogin", {
        username,
        password,
      });

      if (response.data.success) {
        alert(response.data.message);
        // Redirect to desired page after successful login
        navigate("/dashboard");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Error occurred while logging in:", error);
      alert("Error occurred while logging in");
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
      <br />
      <p>Don't have an account? <Link to="/workerreg">Register here</Link>.</p>
    </div>
  );
}

export default WorkerLogin;
