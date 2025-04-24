import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";

function Navbar() {
  const { user, logout, checkAuth} = useAuth();
  let [showLogout, setLogOut] = useState(false);

  useEffect(() => {
    checkAuth();
    if (user === null || user.type==="error") {
      
      setLogOut(false);
    } else {
      setLogOut(true);
    }
  },[user?.iat]);

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div
        className="container p-2"
        style={{ marginRight: "27px", width: "100%" }}
      >
        <Link className="navbar-brand" to={"/"}>
          <img
            src="media/images/logo.svg"
            style={{ width: "17%", marginRight: "170px", height: "100%" }}
            alt="Logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0">
              {showLogout && (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={`/mystocks`}
                  >
                    MyStocks
                  </Link>
                </li>
              )}
              <li className="nav-item">
                <Link className="nav-link active" to="/product">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to={"/about"}>
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
              {showLogout ? (
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to={"/"}
                    onClick={()=>logout()}
                  >
                    Logout
                  </Link>
                </li>
              ) : (
                <>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={"/login"}
                    >
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      aria-current="page"
                      to={"/signup"}
                    >
                      Signup
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
