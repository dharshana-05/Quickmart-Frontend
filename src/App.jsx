import React from "react";
import "./App.css";

const GroceryManagementSystem = () => {
  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Fresh and Organic Grocery Solutions</h1>
          <p>
            Manage your grocery inventory, track sales, and ensure fresh produce
            availability with ease.
          </p>
          <div className="hero-buttons">
          </div>
        </div>
        <div className="hero-image">
        
        </div>
      </section>

      {/* Features Section */}
      <section className="features" id="features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-box">
            <img
              src="https://www.liveorganic.co.in/cdn/shop/collections/Fresh-Produce-1_1024x1024.jpg?v=1658572360"
              alt="Fresh and Organic"
            />
            <h3>Fresh and Organic</h3>
            <p>
            Enjoy farm-fresh fruits, vegetables, and high-quality essentials handpicked for your daily needs
            </p>
            
          </div>
          <div className="feature-box">
            <img
              src="https://img.freepik.com/premium-vector/motorbike-delivery-service-icon_658271-1395.jpg"
              alt="Free Delivery"
            />
            <h3>Free Delivery</h3>
            <p>
            Get your groceries delivered to your doorstep in no time with our fast and reliable service
            </p>
           
          </div>
          
        </div>
      </section>
    </div>
  );
};

export default GroceryManagementSystem;
