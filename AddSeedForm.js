import "./AddProductForm";
import React, { useState ,useEffect} from "react";
import {Field} from "formik";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import"bootstrap";
import axios from "axios";
import { useParams } from 'react-router-dom';
import RetailerNavbar from "./RetailerNavbar";
import Footer_2 from "./Footer_2";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import { useRef } from "react";

export function AddSeedForm()
{
    let navigate = useNavigate();
    let formRef = useRef();
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

    let [product, setProduct]=useState({
        productName:"", 
        chemicalName:"", 
        category:"Seed", 
        companyName:"",
        weight:"",
        price:"",
        expiryDate:"",
        quantity:"", 
        shortDescription:"", 
        description:"", 
        benefits:"", 
        targetedInsects:"",
        RetailerIdFor:retailerobj.retailerid,
    })
    

    let changeProductName=(e)=>{
        let newFname={...product, productName:e.target.value};
        setProduct(newFname);
    }
    let changeCompanyName=(e)=>{
        let newFname={...product, companyName:e.target.value};
        setProduct(newFname);
    }
    let changeChemicalName=(e)=>{
        let newFname={...product, chemicalName:e.target.value};
        setProduct(newFname);
    }
    /*
    let changeProductName=(e)=>{
        let newFname={...product, productName:e.target.value};
        setProduct(newFname);
    }*/
    let changeShortDescription=(e)=>{
        let newFname={...product, shortDescription:e.target.value};
        setProduct(newFname);
    }
    let changeDescription=(e)=>{
        let newFname={...product, description:e.target.value};
        setProduct(newFname);
    }
    let changeBenefits=(e)=>{
        let newFname={...product, benefits:e.target.value};
        setProduct(newFname);
    }
    let changeWeight=(e)=>{
        let newFname={...product, weight:e.target.value};
        setProduct(newFname);
    }
    let changePrice=(e)=>{
        let newFname={...product, price:e.target.value};
        setProduct(newFname);
    }
    let changeQuantity=(e)=>{
        let newFname={...product, quantity:e.target.value};
        setProduct(newFname);
    }
    let changeExpiryDate=(e)=>{
        let newFname={...product, expiryDate:e.target.value};
        setProduct(newFname);
    }


    const [minDate, setMinDate] = useState(calculateMinDate());

    // Function to calculate the minimum date (6 months from now)
    function calculateMinDate() {
        const currentDate = new Date();
        currentDate.setMonth(currentDate.getMonth() + 6);
        return currentDate.toISOString().split('T')[0];
    }

    // useEffect to update minDate when the component mounts
    useEffect(() => {
        setMinDate(calculateMinDate());
    }, []);

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };

    let [id, setId] = useState();
    let addProductAction = () => {

        // let url = `http://localhost:9292/addProd?retailerIdFor=${retailerobj.retailerid}`;
        // axios.post(url, product).then((response)=>{
        // })
        formRef.current.classList.add("was-validated");
        let formStatus = formRef.current.checkValidity();
        if (!formStatus) {
            return;
        }

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
            productName:"", 
            chemicalName:"", 
            category:"Seed", 
            companyName:"",
            weight:"",
            price:"",
            expiryDate:"",
            quantity:"", 
            shortDescription:"", 
            description:"", 
            benefits:"", 
            targetedInsects:"",
            RetailerIdFor:retailerobj.retailerid,
        };
        setProduct(newuser);  
        formRef.current.classList.remove("was-validated"); 
        navigate(`/RetailerHomePage/${username}/${password}`);
    };
    return(
        <>
            <RetailerNavbar/>
            <div className="container-fluid">
                <div className="row d-flex justify-content-center align-items-center h-100  ">
                    <div className="col-md-6">
                        <div className="card card-registration my-4" style={{boxShadow : "0px 10px 20px rgba(0,50,50,0.5)"}}>
                            <div className="row g-0 d-flex justify-content-center align-items-center">
                            <form ref={formRef} className="needs-validation">
                                <div className="col-sm-12 col-md-12">
                                    <div className="card-body p-md-5 text-black">
                                    
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <p id="h2feat">Add Seeds</p>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label htmlFor="productName" className="form-label fw-bolder" >
                                                        Product Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="eg. Moneymaker Bg-2"
                                                        required
                                                        pattern="^[A-Za-z\s]+$"
                                                        id="productName"
                                                        value={product.productName}
                                                        onChange={changeProductName}
                                                        className="form-control form-control-lg"
                                                    />
                                                    
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label htmlFor="companyName" className="form-label fw-bolder" >
                                                        Company Name
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="eg. Ankur"
                                                        id="companyName"
                                                        required
                                                            pattern="^[A-Za-z\s]+$"
                                                        value={product.companyName}
                                                        onChange={changeCompanyName}
                                                        className="form-control form-control-lg"
                                                    />
                                                    
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                            
                                                    <label htmlFor="weight" className="form-label fw-bolder">
                                                        Weight
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="in gram (gm)"
                                                        id="weight"
                                                        required
                                                        value={product.weight}
                                                        onChange={changeWeight}
                                                        className="form-control form-control-lg"
                                                    />
                                                    
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label htmlFor="category" className="form-label fw-bolder">
                                                        Category
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="category"
                                                        value={product.category}
                                                        className="form-control form-control-lg"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label htmlFor="quantity" className="form-label fw-bolder" >
                                                        Quantity
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id="quantity"
                                                        placeholder="eg. 50"
                                                        required
                                                        minLength={1}
                                                        maxLength={7}
                                                        pattern="^[123456789]\d{0,9}$"
                                                        value={product.quantity}
                                                        onChange={changeQuantity}
                                                        className="form-control form-control-lg"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                                    <label htmlFor="price" className="form-label fw-bolder" >
                                                        Price
                                                    </label>
                                                    <input
                                                        type="text"
                                                        placeholder="In rupees"
                                                        id="price"
                                                        required
                                                            minLength={1}
                                                            maxLength={7}
                                                            pattern="^[123456789]\d{0,9}$"
                                                        value={product.price}
                                                        onChange={changePrice}
                                                        className="form-control form-control-lg"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <div className="form-outline">
                                        
                                                    <label htmlFor="expiryDate" className="form-label fw-bolder">
                                                    Expiry Date
                                                    </label>
                                                    <input
                                                        type="Date"
                                                        id="expiryDate"
                                                        required
                                                        min={minDate}
                                                        value={product.expiryDate}
                                                        onChange={changeExpiryDate}
                                                        className="form-control form-control-lg"
                                                    />
                                                    
                                                </div>
                                            </div>
                                            
                                        </div>


                                        <div className="form-outline mb-4">
                                            <div className="form-outline">
                                                <label htmlFor="shortDescription" className="form-label fw-bolder" >
                                                Short Description
                                                </label>
                                                <textarea 
                                                    className="form-control form-control-lg" 
                                                    placeholder="Enter Short Description"
                                                    id="shortDescription"
                                                    required
                                                    value={product.shortDescription}
                                                    onChange={changeShortDescription}
                                                    rows="2" 
                                                    cols="50">
                                                    This is the initial text in the textarea.
                                                </textarea>
                                            
                                            </div>
                                        </div>

                                        <div className="form-outline mb-4">
                                            <label htmlFor="description" className="form-label fw-bolder" >
                                            Description
                                            </label>
                                            <textarea 
                                                className="form-control form-control-lg" 
                                                placeholder="Enter Description"
                                                id="description"
                                                required
                                                value={product.description}
                                                onChange={changeDescription}
                                                rows="2" 
                                                cols="50"
                                            >
                                                This is the initial text in the textarea.
                                            </textarea>
                                            
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label htmlFor="benefits" className="form-label fw-bolder" >
                                            Benefits
                                            </label>
                                            <textarea 
                                                className="form-control form-control-lg" 
                                                placeholder="Enter Benefits"
                                                id="benefits"
                                                required
                                                value={product.benefits}
                                                onChange={changeBenefits}
                                                rows="2" 
                                                cols="50"
                                            >
                                                This is the initial text in the textarea.
                                            </textarea> 
                                        </div>


                                        <div className="form-outline mb-4 my-3">
                                            <form enctype="multipart/form-data">
                                                <label className="form-label fw-bolder" >
                                                Upload Image :-
                                                </label>
                                                <input  type="file" accept="image/*" required onChange={handleImageChange} />
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
                            </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer_2/>
        </>
    )
}