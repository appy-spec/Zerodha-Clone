import React from "react";
import { holdings } from "../data/data";
import { useState, useEffect } from "react";
import axois from "axios";
import {VerticalGraph} from "./VerticalGraph";

const Holdings = () => {
  let [allHoldings, setAllHoldings] = useState([]);

  useEffect(() => {

    axois("http://localhost:3000/mystocks/allholding")

      .then((res) => {

        setAllHoldings(res.data);
      })
      .catch((err) => {

        console.log(err);
      });
      
  }, []);

  const labels=allHoldings.map((items)=>items["name"]);

  const data={

    labels,
    datasets:[
      {
        label: 'Price',
        data: allHoldings.map((items) => items.price),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      }
    ]

  }

  return (
    <>
      <h3 className="title">Holdings ({allHoldings.length})</h3>

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((item, index) => {
              const currVal = item.price * item.qty;
              const profit = currVal - item.avg * item.qty;
              const isProfit = profit >= 0.0;

              // to display profit and loss in their respective color
              const profitClass = isProfit ? "profit" : "loss";
              const dayChange = item.isLoss ? "loss" : "profit";

              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.qty}</td>
                  <td>{item.avg.toFixed(2)}</td>
                  <td>{item.price.toFixed(2)}</td>
                  <td>{currVal.toFixed(2)}</td>
                  <td className={profitClass}>{profit.toFixed(2)}</td>
                  <td className={profitClass}>{item.net}</td>
                  <td className={dayChange}>{item.day}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="row">
        <div className="col">
          <h5>
            29,875.<span>55</span>{" "}
          </h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>
            31,428.<span>95</span>{" "}
          </h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>1,553.40 (+5.20%)</h5>
          <p>P&L</p>
        </div>
      </div>
      <VerticalGraph data={data}/>
    </>
  );
};

export default Holdings;
