import React from "react";
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import axois from "axios";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";

import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import {GeneralContextProvider} from "./GeneralContext";

const Dashboard = () => {

  let[userData, setUserData]=useState({
    userid:"",
    fullname:"",
  });

  useEffect(() => {
    
    const queryParams = new URLSearchParams(window.location.search);
    const userId = queryParams.get('userid');
    
    axois.get(`http://localhost:3000/user/${userId}`)
    .then((res) => {
      
      setUserData(res.data);
    })
    .catch((err) => {
      
      console.log(err);
    });
     
  }, []);

  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
        <WatchList />
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route exact path="/" element={<Summary user={userData}/>} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
