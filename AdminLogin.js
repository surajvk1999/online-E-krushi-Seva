import { useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer_2 from "./Footer_2";

function AdminLogin() {
  let formReflogin = useRef();
  let navigate = useNavigate();

  let [user, setUser] = useState({
    username: "",
    password: "",
  });

  let[id ,setId] = useState();

  let handlerUsernameAction = (e) => {
    let newuser = { ...user, username: e.target.value };
    setUser(newuser);
  };

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  
  let loginGet = () => {
    console.log(user);

    formReflogin.current.classList.add("was-validated");
    let formStatus = formReflogin.current.checkValidity();
    if (!formStatus) {
      alert("Enter input in correct format");
      return;
    }
    
    if(  !(user.username === "admin" && user.password === "admin")  )
    {
        alert("Admin Not Found");
        navigate("/AdminLogin", );
    }


    let newuser = {
      username: "",
      password: "",
    };
    setUser(newuser);  
    formReflogin.current.classList.remove("was-validated");
    navigate("/AdminPage", );
  };

  return (
    <>
      <Navbar />
      <div className="container bgimg">
        <div className="login-form">
          <form action={"/"} ref={formReflogin} className="needs-validation">
            <h1>Login</h1>

            <label id="username-label" className="fs-5">
              Username
            </label>
            <input
              id="username"
              type="text"
              value={user.username}
              placeholder="Enter Username"
              name="username"
              spellCheck="false"
              onChange={handlerUsernameAction}
              required
            />
            <label htmlFor="psw" className="fs-5">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={user.password}
              placeholder="Enter Password"
              name="password"
              onChange={handlerPasswordAction}
              required
            />
            <label>
              <input
                type="checkbox"
                unchecked=""
                name="remember"
                style={{ marginBottom: 15 }}
              />
              Remember me
            </label>
            <p className="fs-5">
              By creating an account you agree to our
              <a href="#">Terms &amp; Privacy</a>.
            </p>
            <div className="buttons">
              <button>Cancel</button>
              <button onClick={loginGet}>Login</button>
            </div>
          </form>
        </div>
      </div>
      <Footer_2/>
    </>
  );
}

export default AdminLogin;