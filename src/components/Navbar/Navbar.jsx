import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

import CartComponent from "../CartComponent/CartComponent";
import "./Navbar.scss";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products)
  const [openCart, setOpenCart] = useState(false);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item"></div>
          {/* Add img */}
          <div className="item">
            <span>USD</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className="item">
            <Link to="/products/1" className="link">
              Women
            </Link>
          </div>
          <div className="item">
            <Link to="/products/2" className="link">
              Men
            </Link>
          </div>
          <div className="item">
            <Link to="/products/3" className="link">
              Childeren
            </Link>
          </div>
        </div>
        <div className="center">
          <Link to="/" className="link">
            SHOOE
          </Link>
          {/* Add logo */}
        </div>
        <div className="right">
          <div className="item">
            <Link to="/" className="link">
              Home
            </Link>
          </div>
          <div className="item">
            <Link to="/" className="link">
              About
            </Link>
          </div>
          <div className="item">
            <Link to="/contact" className="link">
              Contact
            </Link>
          </div>
          <div className="item">
            <Link to="/" className="link">
              Stores
            </Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon" onClick={() => setOpenCart(!openCart)}>
              <ShoppingCartOutlinedIcon />
              <span className="cartCount">{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {openCart && <CartComponent />}
    </div>
  );
};

export default Navbar;
