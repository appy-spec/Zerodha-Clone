import React from 'react';

function Hero() {
    return ( 
        <section className="container-fluid p-5" id="supportHero">
        <div className="pt-5" id="supportWrapper">
          <h5>Support Portal</h5>
          <a href="">Track Tickets</a>
        </div>
        <div className="row pt-4 pb-5" style={{marginLeft:"11.8%"}}>
          <div className="col-5 supportAnchor">
            <h1 className="fs-5">
              Search for an answer or browse help topics to create a ticket
            </h1>
            <input placeholder="Eg. how do I activate F&O" />
            <br />
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
          <div className='col-2'></div>
          <div className="col-5">
            <h1 className="fs-5">Featured</h1>
              <li>
                <a href="">Current Takeovers and Delisting - January 2024</a>
              </li>
              <li>
                <a href="">Latest Intraday leverages - MIS & CO</a>
              </li>
          </div>
        </div>
      </section>
     );
}

export default Hero;