import React from "react";

function RightSection({
  imageUrl,
  productName,
  productDescription,
  link,
}) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 p-5" style={{ marginTop:"7%"}}>
          <h1 className="mb-3">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href="" style={{ textDecoration: "none" }}>
              {link} <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>
        </div>
        <div className="col-6 p-5">
          <img src={imageUrl} style={{ width: "91%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
