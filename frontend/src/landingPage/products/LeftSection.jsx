import React from "react";

function LeftSectrion({
  imageUrl,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  goolePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-6 p-5">
          <img src={imageUrl} style={{width:"91%"}}/>
        </div>
        <div className="col-6 p-5" style={{marginTop:"5%"}}>
          <h1 className="mb-3">{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={tryDemo} style={{ textDecoration: "none" }}>Try Demo <i className="fa-solid fa-arrow-right"></i></a>
            <a href={learnMore} style={{marginLeft:"45px", textDecoration:"none"}}>Learn More <i className="fa-solid fa-arrow-right"></i></a>
          </div>
          <div className="mt-3">
            <a href={goolePlay}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore}>
              <img src="media/images/appstoreBadge.svg" style={{marginLeft:"45px"}}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSectrion;
