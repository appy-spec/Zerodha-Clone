import React from "react";
import { useState } from "react";
import Signup from "./Signup";
import ShowFlash from "../ShowFlash";

function SignupParent() {
  let [flashData, setFlashData] = useState(null);

  const handleFlashContent = (data) => {
    
    console.log({...data, id:Date.now()});
    setFlashData({...data, id:Date.now()});
  };

  return (
    <>
      {flashData && <ShowFlash flashData={flashData}/>}
      <Signup onSubmit={handleFlashContent}/>
    </>
  );
}

export default SignupParent;
