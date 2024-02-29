import React from "react";
import logo from "./images/logo.png";
import { Link,useNavigate } from "react-router-dom";


export default function RetailerNavbar() 
{

  
  let navigate = useNavigate();
  const logout = () => {
    // Clear cookies here
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.cookie = "password=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    // Redirect to login or home page
    navigate("/"); // Change "/login" to the appropriate URL
};
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
    <div className="container-fluid">
      <Link to={"/"} className="navbar-brand me-5 text-light fs-2 fw-bold">
        <img src="logo.png" alt="logo" className="app-logo p-0 m-0"style={{height:"5rem"}} />
      </Link>

      <button
        className="navbar-toggler text-light"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon text-light"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
            <li className="nav-item">
              <Link to={"/"} className="nav-link active text-light">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/about"} className="nav-link text-light">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/contact"} className="nav-link text-light">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="d-flex">
        
                   <button className="btn btn-outline-light ms-3" onClick={logout}>
                     Logout
                   </button>
                </div>
        </div>
      </div>
    </nav>
  );
}