import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    
    setIsProfileDropdownOpen(!isProfileDropdownOpen);

  };

  //you will get this class for style form app.css file

  const menuClass = "menu";
  const activeMenuClass = "menuSelected";

  const handleHomeRoute = () => {
    window.parent.postMessage({ type: "REDIRECT_HOME" }, "*");
  };

  const handleLogout = async () => {

    await axios.post(
      "http://localhost:3000/logout",
      {},
      { withCredentials: true }
    );
    window.parent.postMessage({ type: "REDIRECT_HOME" }, "*");

  };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "40px" }} alt="" />
      <div className="menus">
        <ul>
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => handleMenuClick(0)}
            to="/"
          >
            <li>
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </li>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => handleMenuClick(1)}
            to="/orders"
          >
            <li>
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </li>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => handleMenuClick(2)}
            to="/holdings"
          >
            <li>
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </li>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => handleMenuClick(3)}
            to="/positions"
          >
            <li>
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </li>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => handleMenuClick(4)}
            to="/funds"
          >
            <li>
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </li>
          </Link>
          <Link
            style={{ textDecoration: "none" }}
            onClick={() => handleMenuClick(5)}
            to="/apps"
          >
            <li>
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </li>
          </Link>
        </ul>
        <hr />
        <div className="profile">
          <div className="avatar">ZU</div>

          <div
            className="dropdown"
            style={{ position: "relative", zIndex: 1000 }}
          >
            <a
              className="dropdown-toggle"
              onClick={handleProfileClick}
              aria-expanded={isProfileDropdownOpen}
              aria-haspopup="true"
            >
              UserId
            </a>
            {isProfileDropdownOpen && (
              <ul
                className="dropdown-menu show"
                style={{
                  position: "absolute",
                  top: "100%",
                  left: 0,
                  zIndex: 2000,
                  border: "1px solid black",
                  background: "white",
                  width: "60px",
                  padding: "2px",
                }}
              >
                <li>
                  <a
                    className="dropdown-item"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => {
                      handleHomeRoute();
                    }}
                  >
                    home
                  </a>
                </li>
                <br />
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    style={{ textDecoration: "none", color: "black" }}
                    onClick={() => {
                      handleLogout();
                    }}
                  >
                    logout
                  </a>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
