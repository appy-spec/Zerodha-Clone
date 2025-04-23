import React from "react";
import {useAuth} from "./AuthContext";

const DashboardPage = ({func}) => {
    
  const{user}=useAuth();
  let userid=user?.userid;
  func(true);
  
  return (
    <div style={{ height: "100vh" }}>
      <iframe
        src={`http://localhost:5174/?userid=${userid}`} 
        title="Embedded Dashboard"
        style={{ width: "100%", height: "100%", border: "none" }}
      />
    </div>
  );
};

export default DashboardPage;
