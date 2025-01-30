import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer"; 

const MainLayout = ({ children, user }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [cartItems, setCartItems] = useState([]); 
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery.trim()}`);
    }
  };

  
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  return (
    <div>
      <header className="navbar">
        <div className="logo">QUICKMART</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/categories">Categories</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>

        
        <form className="search-bar" onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-input"
          />
          <button type="submit" className="search-btn">
            🔍
          </button>
        </form>

        <div className="cta-buttons">
          {user ? (
            <div className="user-info">
              <span>{user.name}</span>
              <img
                src={user.avatar || "https://via.placeholder.com/40"} // Use user's avatar if available
                alt="User Avatar"
                className="user-avatar"
              />
            </div>
          ) : (
            <>
              <Link to="/login">
                <button className="login-btn">Log In</button>
              </Link>
              <Link to="/signup">
                <button className="signup-btn">Register</button>
              </Link>
            </>
          )}

          {/* Cart Button */}
          <Link to="/cart">
            <button className="cart-btn">
              Cart  
            </button>
          </Link>
        </div>
      </header>

      <main>{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
