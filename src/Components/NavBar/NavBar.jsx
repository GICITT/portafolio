import "./NavBar.css";
import logo from "../../assets/logo.png";
import React, { useState, useRef } from "react";
import { IoRemoveOutline, IoClose } from "react-icons/io5";
import { FiAlignRight } from "react-icons/fi";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default function NavBar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0px";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" height="150px" width="170" />
      <FiAlignRight className="nav-mob-open" onClick={openMenu} />
      <ul ref={menuRef} className="nav-menu">
        <IoClose className="nav-mob-close" onClick={closeMenu} />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? (
            <IoRemoveOutline className="IoRemoveOutline" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" ? (
            <IoRemoveOutline className="IoRemoveOutline" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#myWork">
            <p onClick={() => setMenu("portafolio")}>Portafolio</p>
          </AnchorLink>
          {menu === "portafolio" ? (
            <IoRemoveOutline className="IoRemoveOutline" />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? (
            <IoRemoveOutline className="IoRemoveOutline" />
          ) : (
            <></>
          )}
        </li>
      </ul>
      <AnchorLink className="anchor-link" offset={50} href="#contact">
        <div className="nav-connect">Connect With Me</div>
      </AnchorLink>
    </div>
  );
}
