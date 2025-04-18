import React from 'react';

function Hero() {
    return ( 
        
       <div className="container mb-5" >
           <div className="row text-center mb-3">
               <img src="media/images/homeHero.png" alt="hero-image" className="p-5 mb-5"/>
               <h1 className="">Invest in everything</h1>
               <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
               <button className="btn btn-primary fs-5" style={{width:"18%", margin:"0 auto"}}>Signup Now</button>
           </div>
       </div>
     );
}

export default Hero;