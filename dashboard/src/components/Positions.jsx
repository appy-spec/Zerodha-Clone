import React from "react";
import { positions } from "../data/data";
import { useState, useEffect } from "react";
import axios from "axios";

const Positions = () => {

  let[allPositions, setAllPosition]=useState([]);

  useEffect(()=>{

    axios("http://localhost:3000/mystocks/allposition").then((res)=>{

      setAllPosition(res.data);
    })
    .catch((err)=>{

      console.log(err);
    })
  },[]);

  return (
    <>
      <h3 className="title">Positions ({allPositions.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg.</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Chg.</th>
            </tr>
          </thead>
          <tbody>
            {allPositions.map((item, index) => {
              const currVal = item.price * item.qty;
              const profit = currVal - item.avg * item.qty;
              const isProfit = profit >= 0.0;

              // to display profit and loss in their respective color
              const profitClass = isProfit ? "profit" : "loss";
              const dayChange = item.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{item.product}</td>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.avg.toFixed(2)}</td>
                  <td>{item.price.toFixed(2)}</td>
                  <td className={profitClass}>{profit.toFixed(2)}</td>
                  <td className={dayChange}>{item.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Positions;
