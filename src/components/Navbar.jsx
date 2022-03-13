import React, { useState } from "react";
import "./Navbar.css";
import { GiHamburgerMenu } from "react-icons/gi";

export const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
      <nav className="main-nav">
        <div className="logo">
          <img
            style={{ width: "100%", height: "100%" }}
            src="logoklarna.jpg"
            alt="Logo"
          />
        </div>
        <div
          className={
            showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }
        >
          <ul>
            <li>
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                Shop{" "}
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                How it works{" "}
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                Pay in 4{" "}
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                The shopping app{" "}
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
                Help
              </a>
            </li>
          </ul>
        </div>
        <div className="login">
          <ul className="login-desktop">
            <li>
              <button
                className="btn"
                id="login"
                style={{ marginRight: "20px" }}
              >
                Log in
              </button>
            </li>
            <li>
              <button
                className="btn"
                id="getapp"
                style={{ marginRight: "20px", marginLeft: "20px" }}
              >
                Get the app
              </button>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
              <GiHamburgerMenu />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Navbar;
