import React, { useState } from "react";
import axios from "axios";

function Signup({onSubmit}) {
  
  let[formData, setFromData]=useState({

    fullname:"",
    email:"",
    password:""

  });
  
  const handleChange=(e)=>{
    
    let fieldName=e.target.name;
    let fieldVal=e.target.value;
    setFromData({...formData, [fieldName]:fieldVal});
  }

  // bootstrap script logic to validate the things
  
  const validate=() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
  
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  };

  const handleSubmit=async (event)=>{

   event.preventDefault();
    try {

      let res=await axios.post("http://localhost:3000/signup", {formData});
      onSubmit(res.data);

    } catch (err) {

      console.log(err);
    }
  }
  
  return (
    <>
      <div className="container mt-4 mb-3">
        <div style={{marginLeft:"27%"}}>
        <h3>Signup to Zerodha !!</h3>
        <div className="row">
          <div className="col-8">
            <form onSubmit={handleSubmit} className="needs-validation" noValidate>
              <div className="mb-2">
                <label htmlFor="fullname" className="form-label">Full Name:</label>
                <input
                  className="form-control"
                  type="text"
                  id="fullname"
                  name="fullname"
                  placeholder="enter your name"
                  value={formData.fullname}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-label">Email:</label>
                <input
                  className="form-control"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="enter valid email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password"  className="form-label">Password:</label>
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="make strong password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary" onClick={()=>{validate()}}>Submit</button>
            </form>
          </div>
        </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
