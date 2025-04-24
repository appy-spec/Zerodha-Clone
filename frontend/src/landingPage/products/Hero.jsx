import React from "react";

function Hero() {
  return (
    <div className="container mt-5 mb-5 border-bottom">
      <div className="row text-center mb-2 mt-5">
        <h1 className="mb-4 mt-5">Zerodha Products</h1>
        <p className="mb-4 fs-5 text-muted">
          Sleek, modern, and intuitive trading platforms
        </p>
        <p className="fs-8 mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings <i className="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
