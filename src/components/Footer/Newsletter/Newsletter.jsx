import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Welcome to</span>
        <span className="big-text">Shonak electronics</span>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.542966649007!2d77.30850015656154!3d28.4933074582872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce71b40c89b7b%3A0xd78ac18699281d5a!2sShonak%20electronics!5e0!3m2!1sen!2sin!4v1679508437154!5m2!1sen!2sin"
          width="350"
          height="250"
          style={{ borderradius: "20%" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <br />
        <div className="social-icons">
          <div className="icon">
            <FaFacebookF size={14} />
          </div>
          <div className="icon">
            <FaInstagram size={14} />
          </div>
          <div className="icon">
            <FaTwitter size={14} />
          </div>
          <div className="icon">
            <FaLinkedinIn size={14} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
