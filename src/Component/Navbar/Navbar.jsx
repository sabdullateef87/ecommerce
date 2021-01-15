import React, { useState, useContext } from "react";
import "./Navbar.css";
import Menu from "../../Icons/menu.svg";
import Close from "../../Icons/close.svg";
import Cart from "../../Icons/shopping-cart-solid.svg";
import { Link, NavLink } from "react-router-dom";
import { DataContext } from "../Context/DataProvider";

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [cart] = useContext(DataContext).cart;
  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className={`navbar_container`}>
      <div className="logo">
        <h1>A.O.H</h1>
      </div>
      <ul
        style={{ top: toggleMenu ? "0" : "-100%" }}
        onClick={() => setToggleMenu(false)}
      >
        <li>
          <NavLink activeClassName={`active`} exact to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login </NavLink>
        </li>

        <li>
          <img
            className={`menu`}
            src={Close}
            alt="Suleiman Abdullateef E-commerce"
            width="30px"
            onClick={handleToggle}
          />
        </li>
      </ul>
      <img
        className={`menu`}
        src={Menu}
        alt="Check the menu"
        width="30px"
        onClick={handleToggle}
      />
      <div className={`cart_container`}>
        <Link to="/cart">
          <img
            className={`cart`}
            src={Cart}
            alt="Check the menu"
            width="30px"
          />
          <span>{cart.length}</span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
