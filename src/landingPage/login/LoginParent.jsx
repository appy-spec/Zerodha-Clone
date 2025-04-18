import React from "react";
import { useState } from "react";
import Login from "./Login";
import ShowFlash from "../ShowFlash";

function SignupParent() {
  let [flashData, setFlashData] = useState(null);

  const handleFlashContent = (data) => {

    setFlashData({...data, id:Date.now()});
  };

  return (
    <>
      {flashData && <ShowFlash flashData={flashData}/>}
      <Login onSubmit={handleFlashContent}/>
    </>
  );
}

export default SignupParent;
