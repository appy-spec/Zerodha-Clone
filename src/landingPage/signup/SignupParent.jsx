import React from "react";
import { useState, useEffect } from "react";
import {useNavigate} from "react-router-dom";

import Signup from "./Signup";
import ShowFlash from "../ShowFlash";

function SignupParent() {
  let [flashData, setFlashData] = useState(null);
  const navigate = useNavigate();
  
  const handleFlashContent = (data) => {

    setFlashData({...data, id:Date.now()});
  };

  useEffect(() => {
    if (flashData?.type==="success") {
      const timeout = setTimeout(() => {
       
        navigate('/login');
      }, 2000); 

      return () => clearTimeout(timeout); 
    }
  }, [flashData, navigate]);

  return (
    <>
      {flashData && <ShowFlash flashData={flashData}/>}
      <Signup onSubmit={handleFlashContent}/>
    </>
  );
}

export default SignupParent;
