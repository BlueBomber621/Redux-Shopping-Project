import React from "react";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>Home</span>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
            magnam illum iusto quo provident quis, quisquam sint quam possimus,
            a porro aspernatur laudantium ratione similique perspiciatis?
            Voluptatem officiis mollitia odit.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            quia nihil blanditiis tempore, maiores laudantium possimus
            voluptatum et, accusantium consequuntur repellat ea minima labore
            provident eveniet porro ipsum ut quo!
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">SHOOE</span>
          <span className="copyright">
            &copy; {new Date().getFullYear()}, All Rights Reserved
          </span>
        </div>
        <div className="right">
          <h2>CARDS</h2>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
