import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h3>About QuickMart</h3>
          <p>
            QuickMart is your go-to solution for managing groceries efficiently.
            Fresh produce, easy payments, and free delivery all in one place!
          </p>
        </div>
        <div className="footer-section links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/products">Products</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </div>
        <div className="footer-section contact">
          <h3>Contact Us</h3>
          <p>Email: support@quickmart.com</p>
          <p>Phone: +123 456 7890</p>
          <p>Address: 123 Grocery Lane, Food City</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} QuickMart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
