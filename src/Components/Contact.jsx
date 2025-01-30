import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page" id="contact">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p>Get to know more about our QuickMark App and connect with us!</p>
      </header>

      <section className="contact-details">
        <div className="about-quickmark">
          <h2>About QuickMark</h2>
          <p>
            QuickMark is your ultimate solution for managing grocery inventory, 
            tracking sales, and ensuring fresh produce availability with ease. 
            Our user-friendly interface and advanced features make grocery 
            management a breeze.
          </p>
        </div>

        <div className="contact-info">
          <h2>Contact Information</h2>
          <ul>
            <li><strong>Email:</strong> support@quickmarkapp.com</li>
            <li><strong>Phone:</strong> +1 234-567-890</li>
            <li><strong>Address:</strong> 123 QuickMark Street, Groceries City, GS 45678</li>
          </ul>
        </div>

        <div className="follow-us">
          <h2>Follow Us</h2>
          <p>Stay updated with the latest features and news:</p>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/fluency/48/facebook-new.png" alt="Facebook" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/fluency/48/twitter.png" alt="Twitter" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/fluency/48/instagram-new.png" alt="Instagram" />
            </a>
          </div>
        </div>
      </section>

      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
