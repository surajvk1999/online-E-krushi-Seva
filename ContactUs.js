import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Footer_2 from "./Footer_2";

function ContactUs() {
  return (
    <>
      <Navbar />

      {/* main*/}
      <section className="contact">
        <div className="content">
          <h2>Contact Us</h2>
          <p>
            Our Products are picked up from trusted Retailer.
          </p>
        </div>
        <div className="container d-flex">
          <div className="contactInfo">
            <div className="box">
              <div className="icon">
                <i className="fa fa-map-marker" aria-hidden="true" />
              </div>
              <div className="text">
                <h3>Address</h3>
                <p>
                  {" "}
                  28/2023, <br />
                  Shanti nagar,
                  <br /> Andheri East, <br />
                  Mumbai
                </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa fa-phone" aria-hidden="true" />
              </div>
              <div className="text">
                <h3>Phone</h3>
                <p>+91-8484000011 </p>
              </div>
            </div>
            <div className="box">
              <div className="icon">
                <i className="fa fa-envelope" aria-hidden="true" />
              </div>
              <div className="text">
                <h3>Email</h3>
                <p>sevakrushi2@gmail.com </p>
              </div>
            </div>
          </div>
          <div className="contactForm mt-5">
            <form>
              <h2>Send your query here...</h2>
              <div className="form-group m-3">
                <input
                  type="text"
                  placeholder="Name"
                  pattern="^[A-Za-z\s]{3,20}"
                  required
                  className="form-control border-dark"
                />
              </div>
              <div className="form-group m-3">
                <input
                  type="email"
                  placeholder="Email-Id"
                  required
                  pattern="[a-z]+@[a-z0-9-]+\.[a-z]{2,}"
                  title="Enter valid email id"
                  className="form-control border-dark"
                />
              </div>
              <div className="form-group m-3">
                <textarea
                  required
                  placeholder="Your query here"
                  className="form-control border-dark"
                />
              </div>
              <div className="inputBox">
                <input type="Submit" name="" defaultValue="Send" />
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer_2/>
    </>
  );
}
export default ContactUs;