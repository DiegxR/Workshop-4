import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/shared/logo.svg";
import iconMenu from "../../assets/shared/icon-hamburger.svg";
import iconClose from "../../assets/shared/icon-close.svg";
import "./styles.scss";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showHideMenu = () => {
    setShowMenu(!showMenu);
  };
  //Estado para controlar tamaño de la ventana
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  const hideAnimation = () => {
    let clase = " slide-out-blurred-right ";
    setTimeout(() => {
      clase += " hidden";
    }, 500);
    return clase;
  };
  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
      if (window.innerWidth >= 768) {
        setShowMenu(true);
      } else {
        setShowMenu(false);
      }
    };

    window.addEventListener("resize", handleWindowResize);
    if (window.innerWidth >= 768) {
      setShowMenu(true);
    }

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <nav className="nav">
      <figure className="nav__logo bounce-in-top">
        <img src={logo} alt="" />
      </figure>
      <div className="nav__rectangle"></div>
      <ul
        className={`nav__menu ${
          showMenu ? "slide-in-blurred-right" : hideAnimation
        }`}
      >
        <div className="nav__menu__listMenu">
          <NavLink to="/home" className="itemNav">
            <span> 00</span> Home
          </NavLink>
          <NavLink to="/destinations" className="itemNav">
            <span> 01</span> Destination
          </NavLink>
          <NavLink to="/crew" className="itemNav">
            <span> 02</span> Crew
          </NavLink>
          <NavLink to="/technology" className="itemNav">
            <span> 03</span> Technology
          </NavLink>
        </div>
      </ul>
      <figure className="nav__icon" onClick={showHideMenu}>
        <img src={!showMenu ? iconMenu : iconClose} alt="" />
      </figure>
    </nav>
  );
};

export default NavBar;
