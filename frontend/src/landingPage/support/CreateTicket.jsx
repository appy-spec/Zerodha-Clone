import React from "react";

function CreateTicket() {
  return (
    <div className="container mt-3" style={{marginLeft:"9%"}}>
      <div className="row mb-4">
        <p className="text-muted fs-5">
          To create a ticket, select a relevant topic
        </p>
      </div>
      <div className="row">
        <div className="col-4 mb-3">
          <h3 className="fs-5" style={{fontWeight:"390"}}><i className="fa-regular fa-circle-dot"></i> Account Opening</h3>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Resident individual</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Minor</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Non Resident Indian (NRI)</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Company, Partnership, HUF and LLP</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Glossary</a><br/>
        </div>
        <div className="col-4 mb-3">
          <h3 className="fs-5" style={{fontWeight:"390"}}><i className="fa-solid fa-circle-user"></i> Your Zerodha Account</h3>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Your Profile</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Account modification</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Client Master Report (CMR) and Depository<br/>Participant (DP)</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Nomination</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Transfer and conversion of securities</a><br/>
        </div>
        <div className="col-4 mb-3">
          <h3 className="fs-5" style={{fontWeight:"390"}}><i className="fa-regular fa-chart-bar"></i> Kite</h3>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>IPO</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Trading FAQs</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Margin Trading Facility (MTF) and Margins</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Charts and orders</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Alerts and Nudges</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>General</a><br/>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-4 mb-3">
          <h3 className="fs-5" style={{fontWeight:"390"}}><i className="fa-regular fa-credit-card"></i> Funds</h3>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Add money</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Withdraw money</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Add bank accounts</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>eMandates</a><br/>
        </div>
        <div className="col-4 mb-3">
          <h3 className="fs-5" style={{fontWeight:"390"}}><i className="fa-regular fa-message"></i> Console</h3>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Portfolio</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Corporate actions</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Funds statement</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Reports</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Profile</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Segments</a><br/>
        </div>
        <div className="col-4 mb-3">
          <h3 className="fs-5" style={{fontWeight:"390"}}><i className="fa-regular fa-circle"></i> Coin</h3>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Understanding mutual funds and Coin</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Coin app</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Coin web</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>Transactions and reports</a><br/>
          <a className="fs-7" href="" style={{textDecoration:"none", lineHeight:"2"}}>National Pension Scheme (NPS)</a><br/>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
