import "./AddProductForm";
import React, { useState, useEffect } from "react";
import { Field } from "formik";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import axios from "axios";
import RetailerNavbar from "./RetailerNavbar";
import Footer_2 from "./Footer_2";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Cookies from 'js-cookie';

export function AddFertilizerForm() 
{
  let navigate = useNavigate();
    let [loginStatus, setLoginStatus] = useState(false);

    useEffect(() => {
        const check = Cookies.get("username");
        if(!check)
        {
        setLoginStatus(false);
        navigate("/");
        }
        else{
        setLoginStatus(true);
        }

    }, []);

    const retailerobj  = useParams();
    const { username, password } = useParams();

  let [product, setProduct] = useState({
      productName: "",
      chemicalName: "",
      category: "Fertilizer",
      companyName: "",
      weight: "",
      price: "",
      expiryDate: "",
      quantity: "",
      shortDescription: "",
      description: "",
      benefits: "",
      targetedInsects: null,
      RetailerIdFor:retailerobj.retid,
  });
    const currentDate = new Date();
    const minExpiryDate = new Date();
    minExpiryDate.setMonth(currentDate.getMonth() + 6);
    const isValidExpiryDate = (inputDate) => {
    const selectedDate = new Date(inputDate);
    return selectedDate >= minExpiryDate;
  };
  let [id, setId] = useState();
  const [submitted, setSubmitted] = useState(false);

  let changeProductName = (e) => {
    let newFname = { ...product, productName: e.target.value };
    setProduct(newFname);
  };
  let changeCompanyName = (e) => {
    let newFname = { ...product, companyName: e.target.value };
    setProduct(newFname);
  };
  let changeChemicalName = (e) => {
    let newFname = { ...product, chemicalName: e.target.value };
    setProduct(newFname);
  };
  /*
    let changeProductName=(e)=>{
        let newFname={...product, productName:e.target.value};
        setProduct(newFname);
    }*/
  let changeShortDescription = (e) => {
    let newFname = { ...product, shortDescription: e.target.value };
    setProduct(newFname);
  };
  let changeDescription = (e) => {
    let newFname = { ...product, description: e.target.value };
    setProduct(newFname);
  };
  let changeBenefits = (e) => {
    let newFname = { ...product, benefits: e.target.value };
    setProduct(newFname);
  };
  let changeWeight = (e) => {
    let newFname = { ...product, weight: e.target.value };
    setProduct(newFname);
  };
  let changePrice = (e) => {
    let newFname = { ...product, price: e.target.value };
    setProduct(newFname);
  };
  let changeQuantity = (e) => {
    let newFname = { ...product, quantity: e.target.value };
    setProduct(newFname);
  };
  let changeExpiryDate = (e) => {
    let newFname = { ...product, expiryDate: e.target.value };
    setProduct(newFname);
  };

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  let addProductAction = () => {
    console.log(product);

    const formData = new FormData();
        formData.append("productImage", selectedImage);
        formData.append("productName", product.productName);
        formData.append("chemicalName", product.chemicalName);
        formData.append("category", product.category);
        formData.append("companyName", product.companyName);
        formData.append("weight", product.weight);
        formData.append("price", product.price);
        formData.append("expiryDate", product.expiryDate);
        formData.append("quantity", product.quantity);
        formData.append("shortDescription", product.shortDescription);
        formData.append("description", product.description);
        formData.append("benefits", product.benefits);
        formData.append("targetedInsects", product.targetedInsects);
        formData.append("RetailerIdFor", product.RetailerIdFor);

        try {
        const response = axios.post(`http://localhost:9292/upload`, formData, {
        headers: {
            "Content-Type": "multipart/form-data",
            },
        });
        
            if (response.status === 200) {
                console.log("Image uploaded successfully");
            } else {
                console.error("Failed to upload image");
            }
            } catch (error) {
                console.error("Error:", error);
        }

    let newuser = {
      productName: "",
      chemicalName: "",
      category: "Fertilizer",
      companyName: "",
      weight: "",
      price: "",
      expiryDate: "",
      quantity: "",
      shortDescription: "",
      description: "",
      benefits: "",
      targetedInsects: null,
      RetailerIdFor:retailerobj.retid,
    };
    setProduct(newuser);
    setSubmitted(true);
    navigate(`/RetailerHomePage/${username}/${password}`);
  };
  return (
    <>
      <RetailerNavbar/>
      <div className="container-fluid">
        <div className="row d-flex justify-content-center align-items-center h-100  ">
          <div className="col-md-6">
            <div className="card card-registration my-4" style={{boxShadow : "0px 10px 20px rgba(0,50,50,0.5)"}}>
              <div className="row g-0 d-flex justify-content-center align-items-center">
                <div className="col-sm-12 col-md-12">
                  <div className="card-body p-md-5 text-black">
                    <div className="row">
                      <div className="col-sm-12">
                        <p id="h2feat">Add Fertilizer</p>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label
                            htmlFor="productName"
                            className="form-label fw-bolder"
                          >
                            Product Name
                          </label>
                          <input
                            type="text"
                            placeholder="eg. Tafethion"
                            required
                            id="productName"
                            value={product.productName}
                            onChange={changeProductName}
                            pattern="^[A-Za-z\s]+$"
                            className={`form-control form-control-lg `}
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label
                            htmlFor="companyName"
                            className="form-label fw-bolder"
                          >
                            Company Name
                          </label>
                          <input
                            type="text"
                            placeholder="eg. Mahadhan"
                            id="companyName"
                            value={product.companyName}
                            onChange={changeCompanyName}
                            className={`form-control form-control-lg ${
                              (submitted || product.companyName !== "") &&
                              !/^[A-Za-z\s]+$/.test(product.companyName)
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          {(submitted || product.companyName !== "") &&
                            !/^[A-Za-z\s]+$/.test(product.companyName) && (
                              <div className="invalid-feedback">
                                Please provide a valid company name with only
                                characters.
                              </div>
                            )}
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label
                            htmlFor="chemicalName"
                            className="form-label fw-bolder"
                          >
                            Chemical Name
                          </label>
                          <input
                            type="text"
                            placeholder="eg. N-10, P-26 K-26"
                            id="chemicalName"
                            value={product.chemicalName}
                            onChange={changeChemicalName}
                            className="form-control form-control-lg"
                          />
                          {product.productName.trim() === "" && (
                            <div className="invalid-feedback">
                              Please provide a valid product name.
                            </div>
                          )}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label
                            htmlFor="category"
                            className="form-label fw-bolder"
                          >
                            Category
                          </label>
                          <input
                            type="text"
                            id="category"
                            value={product.category}
                            className="form-control form-control-lg"
                          />
                          {product.productName.trim() === "" && (
                            <div className="invalid-feedback">
                              Please provide a valid product name.
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label
                            htmlFor="weight"
                            className="form-label fw-bolder"
                          >
                            Weight
                          </label>
                          <input
                            type="text"
                            placeholder="In Kg"
                            id="weight"
                            value={product.weight}
                            onChange={changeWeight}
                            className={`form-control form-control-lg `}
                            min="0.01" // Minimum value allowed (greater than zero)
                            step="0.01" // Increment step
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label
                            htmlFor="price"
                            className="form-label fw-bolder"
                          >
                            Price
                          </label>
                          <input
                            type="number"
                            placeholder="In rupees"
                            id="price"
                            value={product.price}
                            onChange={changePrice}
                            className={`form-control form-control-lg ${
                              (submitted || product.price !== "") &&
                              (product.price <= 0 || isNaN(product.price))
                                ? "is-invalid"
                                : ""
                            }`}
                            min="0.01" // Minimum value allowed (greater than zero)
                            step="0.01" // Increment step
                          />
                          {(submitted || product.price !== "") &&
                            (product.price <= 0 || isNaN(product.price)) && (
                              <div className="invalid-feedback">
                                Please provide a valid price greater than zero.
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label
                            htmlFor="expiryDate"
                            className="form-label fw-bolder"
                          >
                            Expiry Date
                          </label>

                          <input
                            type="date"
                            id="expiryDate"
                            value={product.expiryDate}
                            onChange={changeExpiryDate}
                            className={`form-control form-control-lg ${
                              (submitted || product.expiryDate !== "") &&
                              !isValidExpiryDate(product.expiryDate)
                                ? "is-invalid"
                                : ""
                            }`}
                          />
                          {(submitted || product.expiryDate !== "") &&
                            !isValidExpiryDate(product.expiryDate) && (
                              <div className="invalid-feedback">
                                Expiry date should be at least 6 months from the
                                current date.
                              </div>
                            )}
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <label
                            htmlFor="quantity"
                            className="form-label fw-bolder"
                          >
                            Quantity
                          </label>
                          <input
                            type="number"
                            id="quantity"
                            value={product.quantity}
                            onChange={changeQuantity}
                            min={1}
                            className="form-control form-control-lg"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <div className="form-outline">
                        <label
                          htmlFor="shortDescription"
                          className="form-label fw-bolder"
                        >
                          Short Description
                        </label>
                        <textarea
                          className="form-control form-control-lg"
                          placeholder="Enter Short Description"
                          id="shortDescription"
                          value={product.shortDescription}
                          onChange={changeShortDescription}
                          rows="2"
                          cols="50"
                        >
                          This is the initial text in the textarea.
                        </textarea>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <label
                        htmlFor="description"
                        className="form-label fw-bolder"
                      >
                        Description
                      </label>
                      <textarea
                        className="form-control form-control-lg"
                        placeholder="Enter Description"
                        id="description"
                        value={product.description}
                        onChange={changeDescription}
                        rows="2"
                        cols="50"
                      >
                        This is the initial text in the textarea.
                      </textarea>
                    </div>
                    <div className="form-outline mb-4">
                      <label
                        htmlFor="benefits"
                        className="form-label fw-bolder"
                      >
                        Benefits
                      </label>
                      <textarea
                        className={`form-control form-control-lg `}
                        placeholder="Enter Benefits"
                        id="benefits"
                        value={product.benefits}
                        onChange={changeBenefits}
                        rows="2"
                        cols="50"
                        pattern="^[A-Za-z\s]+$"
                      />
                    </div>
                    <div className="form-outline mb-4 my-3">
                      <form enctype="multipart/form-data">
                        <label className="form-label fw-bolder">
                          Upload Image :-
                        </label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                      </form>
                    </div>
                    <div class="btndiv">
                      <input
                        type="button"
                        value="Add"
                        className="btn btn-primary mt-2 w-50 fs-5"
                        onClick={addProductAction}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer_2/>
    </>
  );
}