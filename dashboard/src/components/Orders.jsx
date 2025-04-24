import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {
  let [allOrders, setAllOrders] = useState([]);

  useEffect(() => {

    axios("http://localhost:3000/mystocks/allorder")

      .then((res) => {
        setAllOrders(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

  }, []);
  
  return (
    <>
      {allOrders.length !== 0 ? (
        <>
          <h3 className="title">Todays Order ({allOrders.length})</h3>

          <table className="order-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Mode (B) or (S)</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((items, index) => {
                let profitClass = items.mode=="BUY" ? "profit" : "loss";

                return (
                  <tr key={index}>
                    <td>{items.name}</td>
                    <td>{items.qty}</td>
                    <td>{items.price}</td>
                    <td className={profitClass}>{items.mode}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </>
      ) : (
        <div className="orders">
          <div className="no-orders">
            <p>You haven't placed any orders today</p>

            <Link to={"/"} className="btn">
              Get started
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Orders;
