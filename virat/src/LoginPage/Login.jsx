import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

// Array to store user data
const usersArray = [];

export default function Auth() {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      // Handle login logic
      const user = usersArray.find((user) => user.email === email); // Search for user in the array

      if (user && user.password === password) {
        console.log("Login successful");
        // Navigate to the home page after successful login
        navigate("/");
      } else {
        alert("Invalid email or password");
      }
    } else {
      // Handle signup logic
      const userExists = usersArray.some((user) => user.email === email); // Check if user already exists

      if (userExists) {
        alert("User with this email already exists. Please log in.");
      } else {
        const newUser = { name, email, password };
        usersArray.push(newUser); // Add new user to the array
        console.log("Signup successful");
        // Navigate to the home page after successful signup
        navigate("/");
      }
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>{isLogin ? "Login" : "Signup"}</h2>

        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        )}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">{isLogin ? "Login" : "Signup"}</button>

        {/* Toggle between Login and Signup */}
        <p>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span className="toggle-link" onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Sign up" : "Log in"}
          </span>
        </p>
      </form>
    </div>
  );
}
