import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
//import "./signup.css";

const Signup = () => {
  let navigate=useNavigate();
  const [credentials, setcredentials] = useState({
    name: "",
    email: "",
    password: "",
    role:""
  });
  
  const onChange = (event) => {
    setcredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
        role:credentials.role
      }),
    });
    const json = await response.json();
    console.log(json);
    if (!json.success) {
      alert("Enter Valid credentials");
    }
    else{
      navigate('/login')
    }
  };
  return (
    <>
      <div className="login-page">
        <div className="login-box">
          <h1 className="heading-login-box">SIGN UP</h1>
          <div className="login-container">
            <form onSubmit={handleSubmit}>
              <div className="user-box">
                <input
                  className="user-box-input"
                  type="text"
                  name="name"
                  value={credentials.name}
                  onChange={onChange}
                  required
                />
                <label className="user-box-label">Name</label>
              </div>
              <div className="user-box">
                <input
                  className="user-box-input"
                  type="email"
                  name="email"
                  value={credentials.email}
                  onChange={onChange}
                  required
                />
                <label className="user-box-label">Username</label>
              </div>
              <div className="user-box">
                <input
                  className="user-box-input"
                  type="password"
                  name="password"
                  autoComplete="on"
                  value={credentials.password}
                  onChange={onChange}
                  required
                />
                <label className="user-box-label">Password</label>
              </div>
              <div className="user-box">
                <input
                  className="user-box-input"
                  type="role"
                  name="role"
                  value={credentials.role}
                  onChange={onChange}
                  required
                />
                <label className="user-box-label">Role</label>
              </div>
              
              <div className="link-to">
                <div className="login-button">
                  <button className="login-box-button">Sign Up</button>
                </div>
                <Link to='/login'>
                <div to="/signup" className="login-button">
                  <button className="login-box-button">
                    Already a user? LogIn
                  </button>
                </div></Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
