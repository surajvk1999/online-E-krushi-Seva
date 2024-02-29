import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "react-bootstrap";
import "./Cart.css"; // Import the Cart.css file
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from 'js-cookie';
import RetailerNavbar from "./RetailerNavbar";
import Footer_2 from "./Footer_2";

const AdminCheckOrder = () => {
  const navigate = useNavigate();

  const retailerobj  = useParams();
  
  const [cart, setCart] = useState([]);

  useEffect(()=>{fetchCartItems();}, []);
  const fetchCartItems = () => {
    let url = `http://localhost:9292/getShippedOrder`;
    axios.get(url).then((response) => {
      setCart(response.data);
    });
  };

  const handleRemoveProduct = (product) => {
    
    let url = `http://localhost:9292/cancleOrder?id=${product.id}`;
     axios.get(url).then((response) => {

        let url = `http://localhost:9292/getUndeliverOrder?retailerId=${retailerobj.retailerid}`;
        axios.get(url).then((response) => {
          setCart(response.data);
        });
     });
  };

  const goToConformOrder = (product) => {
     let url = `http://localhost:9292/ConformOrder?orderid=${product.id}`;
     axios.get(url).then((response) => {

            let url = `http://localhost:9292/getShippedOrder`;
            axios.get(url).then((response) => {
            setCart(response.data);
            });
     });

  };

  return (
    <>
    <RetailerNavbar/>

    {/* Cart Items */}
    <div className="container cart">
      <h1 className="text-center mt-4">Check Order</h1>

      <div className="row">
        {cart.map((product) => (
          <div key={product.id} className="col-md-12">
            <div className="cart-item row align-items-center"> {/* Center align content */}
              <div className="col-md-2 text-center">
                <img src={`data:image/jprg;base64,${product.orderProducts.imageData}`} alt={product.name} className="cart-image" style={{height:"17vh", width:"10vw"}}/>
              </div>
              <div className="col-md-2 text-center">
                <h3 className="cart-product-company">{product.orderProducts.companyName}</h3>
                <h3 className="cart-product-name">{product.orderProducts.productName}</h3>
              </div>
              <div className="col-md-2 text-center">
                <h3 className="cart-product-company">{product.orderUser.name}</h3>
                <h3 className="cart-product-name">{product.orderUser.emailId}</h3> 
              </div>
              <div className="col-md-2 text-center">
                <div className="cart-quantity">
                  <label>Quantity:</label>
                  <input
                    type="text"
                    style={{ textAlign: "center" }}
                    value={product.quantity} // Replace with appropriate quantity logic
                    readOnly
                  />
                </div>
              </div>
              <div className="col-md-2 text-center">
                <p className="cart-product-price">Price: ₹{product.price}</p>
                <p className="cart-product-price">Total Amt: ₹{product.totalprice}</p>
              </div>
              <div className="col-md-1 text-center">
                <Button variant="success" className="cart-remove-button mb-2 margin:20%"  onClick={() => goToConformOrder(product)}>
                  Deliver
                </Button>
              </div>
              <div className="col-md-1 text-center">
                <Button
                  variant="danger"
                  className="cart-remove-button mb-2"
                  onClick={() => handleRemoveProduct(product)}
                >
                  Cancle
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="total-price">
        {/* Subtotal and Checkout button */}
      </div>
    </div>

    <Footer_2/>
  </>
);
};


export default AdminCheckOrder;