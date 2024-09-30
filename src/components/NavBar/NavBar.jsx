import React, { useContext } from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
import CartContext from "../../context/CartContext/CartContexton";

const NavBar = () => {
  const { cart } = useContext(CartContext);
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <NavLink to={"/"}>
          <img
            src="https://res.cloudinary.com/dxhhtvhwd/image/upload/v1727219598/ecoplants-logo_luwr5m.png"
            alt="Logo"
            className="logo"
          />
        </NavLink>
      </div>
      <ul className="nav-links">
        <NavLink className="navlist" to={"/"}>
          Home
        </NavLink>
        <NavLink className="navlist" to={"category/suculentas"}>
          Suculentas
        </NavLink>
        <NavLink className="navlist" to={"category/interior"}>
          Interior
        </NavLink>
        <NavLink className="navlist" to={"category/arboles"}>
          Arboles
        </NavLink>
        <NavLink className="navlist" to={"cart"}>
          CART
          <span>{cart.lenght}</span>
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavBar;
