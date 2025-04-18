import React, { useState } from "react";
import axios from "axios";

function Login({ onSubmit }) {
  let [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let fieldName = e.target.name;
    let fieldVal = e.target.value;
    setloginData({ ...loginData, [fieldName]: fieldVal });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {

      let res = await axios.post(
        "http://localhost:3000/login",
        { loginData },
        { withCredentials: true }
      );

      onSubmit(res.data);

    } catch (err) {
      
      console.log(err); 
    }
  };
  return (
    <>
      <div className="container mt-4 mb-3">
        <div style={{ marginLeft: "27%" }}>
          <h3>Login to Zerodha !!</h3>
          <div className="row">
            <div className="col-8">
              <form onSubmit={handleSubmit}>
                <div className="mb-2">
                  <label htmlFor="email" className="form-label">
                    Email:
                  </label>
                  <input
                    className="form-control"
                    type="email"
                    id="email"
                    name="email"
                    value={loginData.email}
                    onChange={handleChange}
                    placeholder="enter your email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password:
                  </label>
                  <input
                    className="form-control"
                    type="password"
                    id="password"
                    name="password"
                    placeholder="enter your password"
                    value={loginData.password}
                    onChange={handleChange}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
