import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import vgg2 from "./images/vgg2.jpg";
import { Button } from "react-bootstrap";
import "./Cart.css"; // Import the Cart.css file
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Cookies from 'js-cookie';
import Footer_2 from "./Footer_2";

const Cart = () => {

  let navigate = useNavigate();

  let [loginStatus, setLoginStatus] = useState(false);

  useEffect(() => {
    const check = Cookies.get("password");
    if(!check)
    {
      setLoginStatus(false);
      navigate("/");
    }
    else{
      setLoginStatus(true);
    }

  }, []);

  const { username } = useParams();
  const { password } = useParams();

  let [cart, setCart] = useState([]);
  let [quantity, setQuantity] = useState(1); // Initialize quantity with 1

  useEffect(() => { onEnter(); }, []);

  let onEnter = () => {
    let url = `http://localhost:9292/getAllCartByUser?username=${username}&password=${password}`;
    axios.get(url).then((response) => {
      setCart(response.data);
    })
  }

  useEffect(() => {
    setQuantity(1); // Reset quantity to 1 whenever cart changes
  }, [cart]);

  const goToOrderPage = (product) => {
    //navigate(`/ProductDetailPage/${product.cartProducts.productName}/${product.cartProducts.id}/${username}/${password}`)
    navigate(`/OrderForm/${product.cartProducts.productName}/${product.cartProducts.id}/${username}/${password}/${quantity}`);
  }


  const handleRemoveProduct = (productId) => {
    const updatedCart = cart.filter((product) => product.id !== productId);
    setCart(updatedCart);
    const url = `http://localhost:9292/removeFromCart/${productId}`;
    axios.delete(url).then((response) => {

    }).catch((error) => {
    });
  };

  return (
    <>
      <Navbar userloginstatus={loginStatus} username={username} userpassword={password}/>

      {/* Cart Items */}
      <div className="container cart">
        <h1 className="text-center mt-4">Shopping Cart</h1>

        <div className="row">
          {cart.map((product) => (
            <>
              <div key={product.id} className="col-md-4">
                <div className="cart-item">
                  <img src={`data:image/jprg;base64,${product.cartProducts.imageData}`} alt={product.name} className="cart-image" />
                  <div className="cart-details">
                    <h3 className="cart-product-name">{product.cartProducts.productName}</h3>
                    <p className="cart-product-company">{product.cartProducts.companyName}</p>
                    <p className="cart-product-price">Price: ₹{product.price}</p>
                    <div className="cart-quantity">
                      <label>Quantity:</label>
                      <input
                        type="text"
                        style={{ textAlign: "center" }}
                        value={1}
                      />
                    </div>
                    <Button variant="success" className="cart-buy-button mb-2" onClick={() => goToOrderPage(product)}>
                      Buy Now
                    </Button>
                    <Button
                      variant="danger"
                      className="cart-remove-button mb-2"
                      onClick={() => handleRemoveProduct(product.id)}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>

        <div className="total-price">
          {/* <h4>
            Subtotal: ₹
            {products.reduce((total, product) => total + product.price * product.quantity, 0)}
          </h4> */}
          {/* Tax and Total calculations */}
          <Button variant="outline-success">Proceed to Checkout</Button>{" "}
        </div>
      </div>

      <Footer_2 />
    </>
  );
};

export default Cart;
