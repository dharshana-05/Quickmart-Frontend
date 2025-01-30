import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); 
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); 
    setLoading(true); 

    const { email, password } = formData;

    if (!email || !password) {
      setError("Both fields are required.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("https://quickmart-grocery-backend-2.onrender.com/api/users ", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setLoading(false);

      if (response.ok) {
        console.log("Login Successful:", data);
        localStorage.setItem("token", data.token); // Save JWT token
        navigate("/"); // Redirect to home page
      } else {
        setError(data.message || "Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("Server error. Please try again later.");
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-image">
        <img
          src="https://media.istockphoto.com/id/521811679/photo/close-up-of-full-shopping-cart-in-grocery-store.jpg?s=612x612&w=0&k=20&c=v9YnI6hDPBzJA_cAMOKu0e8q0xxSlkR7rua2kdKuSx0="
          alt="QuickMark"
        />
      </div>

      <div className="login-content">
        <h1>Welcome Back!</h1>
        <p>Login to your QuickMark account to manage your groceries efficiently.</p>

        {error && <div className="error">{error}</div>} 

        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" disabled={loading}>
            {loading ? "Logging in..." : "Log In"}
          </button>
        </form>

        <div className="login-footer">
          <p>
            Don't have an account? <a href="/signup">Sign Up</a>
          </p>
          <p>
            <a href="/forgot-password">Forgot Password?</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
