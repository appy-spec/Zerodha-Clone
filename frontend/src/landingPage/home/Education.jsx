import React from 'react';

function Education() {
    return ( 

        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <img src="media/images/education.svg" style={{width:"65%"}}/>
                </div>
                <div className="col-6">
                  <h1 className="mb-4">Free and Open market Education</h1>
                  <p className="mb-4">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                  <a href="" style={{textDecoration:"none"}}>Versity <i className="fa-solid fa-arrow-right"></i></a>
                  <p className="mb-4 mt-4">TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                  <a href="" style={{textDecoration:"none"}}>TradingQ&A <i className="fa-solid fa-arrow-right"></i></a>
                </div>
            </div>
        </div>
     );
}

export default Education;