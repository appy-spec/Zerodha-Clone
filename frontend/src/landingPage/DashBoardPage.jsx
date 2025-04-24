import React, { useEffect, useState } from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const DashboardPage = ({ func }) => {
  
  const navigate = useNavigate();
  let [showMyStocks, setShowMyStocks] = useState(false);
  let[userid, setUserId]=useState(null);

  useEffect(() => {
    const verifyUser = async () => {
      try {

        const res = await axios.get("http://localhost:3000/user/verify", {
          withCredentials: true,
        });
        const user = res.data;
       
        if (!user || user.type === "error") {

          setShowMyStocks(false);
          navigate("/error");
        } else {

          setShowMyStocks(true);
          setUserId(user.userid);
          func(true); 
        }
      } catch (error) {

        navigate("/error");
      }
    };

    verifyUser();

    return () => {

      func(false);
    };
    
  }, [func, navigate]);

  return (
    <>
      {showMyStocks && (
        <div style={{ height: "100vh" }}>
          <iframe
            src={`http://localhost:5174/?userid=${userid}`}
            title="Embedded Dashboard"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </div>
      )}
    </>
  );
};

export default DashboardPage;
