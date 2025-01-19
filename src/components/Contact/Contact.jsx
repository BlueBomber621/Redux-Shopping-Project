import React from "react";

import "./Contact.scss";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import GoogleIcon from "@mui/icons-material/Google";

const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>Be In Touch With Us:</span>
        <div className="mail">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email..."
            className="email"
          />
          <button>JOIN US</button>
        </div>
        <div className="icons">
          <FacebookIcon className="icon" />
          <InstagramIcon className="icon" />
          <TwitterIcon className="icon" />
          <GoogleIcon className="icon" />
          <PinterestIcon className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
