import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import about from "./images/AboutUs.jpg";
import au2 from "./images/au2.jpeg";
import au1 from "./images/au1.jpeg";
import mohit from "./images/mohit.jpeg";
import nagesh from "./images/nagesh.jpeg";
import yash from "./images/yash.jpeg";
import anup from "./images/anup.jpeg";
import shivam from "./images/shivam.jpeg";
import { Link } from "react-router-dom";
import './AboutUs.css';
import Footer_2 from "./Footer_2";

function AboutUs() {
  return (
    <>
      <Navbar />

      {/about us/}
      <section className="hero">
        <div className="container mt-3">
          <div className="hero-content">
            <h1>We build bridges between Farmers and Agri-input Sellers.</h1>
            <p className="fs-5">
            E-Krushi Seva is a private limited company that was established 
            on August 30th, 2023. E-Krushi Seva is an Agritech enterprise providing an
             online marketplace to connect farmers and Agri input sellers, 
             where farmers can buy branded, high-quality, and original products 
             through E-Krushi Seva. We are a company that delivers the highest quality
              input and guidance to farmers for their growth. Our services are available 
              in over 26,000 locations. Through our services, we are helping farmers to have better profitability.
            </p>
            <div className="mission-container">
        <img src={au2}  className="border border-dark mission-image" />
        <div className="mission-text">
          <h1>Our MISSION</h1>
          <p className="fs-5">
            Our objective is to enable the best farming methods to be implemented in order to 
            promote healthier communities through the use of novel food cultivation practices while
            remaining true to our heritage. Through the use of outreach models, we hope to become
            an end-to-end, sustainable integrator, bringing together cutting-edge technology and 
            worldwide best practices at a reasonable price.
          </p>
        </div>
      </div>
      <div className="mission-container">
        
        <div className="mission-text">
            <h1>OUR VISION</h1>
            <p className="fs-5">
            Our Vision to is to improve livelihood of farming community with the improve
             agricultural systems. create multi-stakeholder collaboration in order to achieve 
             sustainable and equitable growth and expansion.
            </p>
            </div>
            <img src={au1}  className="border border-dark mission-image" />
      </div>
            <h1>Have a question?</h1>
            <p className="fs-5">
            Give us a call or mail us by anytime, we endeavour 
            to answer all enquiries within 24 hours on business 
            days. We will be happy to answer your questions.
            </p>
            <button className="btn btn-success">
              <Link to={"/contact"} className="text-light text-decoration-none">
                contact Us
              </Link>
            </button>
          </div>
          <div className="hero-image mt-3">
            <img src={about} />
          </div>
        </div>
      </section>
      <section>
       
        <div className="row d-flex justify-content-evenly ">
          <div className="col-md-3 col-sm-10 info mt-2 mb-2 p-3 ">
            <img src={mohit}  className="border border-dark" />
            <div className="description">
              <p className="mt-2 fs-1">Mohit Raut</p>
              <p className="fs-5">Web Designer</p>
              <p className="fs-5">mohit.Raut@outlook.com</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-10 info mt-2 mb-2 p-3">
            <img src={nagesh}  className="border border-dark" />
            <div className="description">
              <p className="mt-2 fs-1">Nagesh Pakojwar</p>
              <p className="fs-5">Web Designer</p>
              <p className="fs-5">nageshpakojwar@gmail.com</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-10 info mt-2 mb-2 p-3">
            <img src={yash}  className="border border-dark" />
            <div className="description">
              <p className="mt-2 fs-1">Yashkumar Mule</p>
              <p className="fs-5">Web Designer</p>
              <p className="fs-5"> yashmule@gmail.com</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-10 info mt-2 mb-2 p-3">
            <img src={anup}  className="border border-dark" />
            <div className="description">
              <p className="mt-2 fs-1">Anup Kalam</p>
              <p className="fs-5">Web Designer</p>
              <p className="fs-5"> anupkalam@gmail.com</p>
            </div>
          </div>
          <div className="col-md-3 col-sm-10 info mt-2 mb-2 p-3">
            <img src={shivam}  className="border border-dark" />
            <div className="description">
              <p className="mt-2 fs-1">Shivam Sharma</p>
              <p className="fs-5">Web Designer</p>
              <p className="fs-5"> shivamsharma@gmail.com</p>
            </div>
          </div>
        </div>
      </section>
      <Footer_2 />
    </>
  );
}
export default AboutUs;