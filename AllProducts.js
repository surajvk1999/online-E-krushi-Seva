import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';
import Footer_2 from "./Footer_2";

export default function AllProducts() 
{
  let navigate = useNavigate();

  let [loginStatus, setLoginStatus] = useState(false);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add a loading state

//Avoid page load
  const [shouldFetchData, setShouldFetchData] = useState(true);

//Sorting Price
  const [sortedProducts, setSortedProducts] = useState([]);
  const [ascendingSort, setAscendingSort] = useState(true);
  const [ascendingSortR, setAscendingSortR] = useState(true);
  const [compare, setCompare] = useState(false);


  const { value } = useParams();
  const { username } = useParams();
  const { password } = useParams();

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

  useEffect(() => {
    if (shouldFetchData) {
        onEnter();
      setShouldFetchData(false); // Reset the flag to prevent re-fetching
    }
  }, []);

  const onEnter = () => {
    let url = `http://localhost:9292/getProductsByCategory?category=${value}`;
    axios
      .get(url)
      .then((response) => {
        setProducts(response.data);
        setLoading(false); // Set loading to false
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false); // Set loading to false
      });
  };

  const onSortByPrice1 = () => {
    // Create a copy of the products array to avoid mutating the original state
    const productsCopy = [...products];

    // Sort the products array by price in descending order
    productsCopy.sort((a, b) => b.price - a.price);

    // Update the state with the sorted products
    setSortedProducts(productsCopy);

    // Toggle the sorting direction
    setAscendingSort(!ascendingSort);
  };
  const onSortByPrice2 = () => {
    const productsCopy = [...products];
    productsCopy.sort((a, b) => b.price - a.price);
    setSortedProducts(productsCopy);
    setAscendingSort(!ascendingSort);
  };

  const onSortByRating1 = () => {
    const productsCopy = [...products];
    productsCopy.sort((a, b) => a.rating - b.rating);
    setSortedProducts(productsCopy);
    setAscendingSortR(!ascendingSortR);
  };

  const onSortByRating2 = () => {
    const productsCopy = [...products];
    productsCopy.sort((a, b) => b.rating - a.rating);
    setSortedProducts(productsCopy);
    setAscendingSortR(!ascendingSortR);
  };

  const updaterating = async(item)=>{
    let rating=item.rating+1;
    console.log(rating);
    let url = `http://localhost:9292/updateRating?rating=${rating}&id=${item.id}`;
    axios.get(url).then((response)=>{
      let url1 = `http://localhost:9292/getProductsByCategory?category=${value}`;
      axios
        .get(url1)
        .then((response) => {
          setProducts(response.data);
          setLoading(false); // Set loading to false
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
          setLoading(false); // Set loading to false
        });
    })
    
  };

  let goToProductDetailPage=(item)=>{
    navigate(`/ProductDetailPage/${item.productName}/${item.id}/${username}/${password}`)
  };

  let addTocart=(item)=>{
    let url = `http://localhost:9292/addToCart?username=${username}&password=${password}&prodoId=${item.id}&prodname=${item.productName}`;
      axios.get(url).then((response)=>{
      
        if(response.data == "Exist")
        {
            alert("Already Register");
        }
        else{
            alert("Added Successfully");
        }
      })
  };

  const [selectedProductIds, setSelectedProductIds] = useState([]);

  // Function to handle checkbox selection
  const handleRatingCheckbox = (item) => {
    if (selectedProductIds.includes(item.id)) {
      // If the product ID is already selected, remove it
      setSelectedProductIds(selectedProductIds.filter((productId) => productId !== item.id));
    } else if (selectedProductIds.length < 2) {
      // If less than two product IDs are selected, add the product ID
      setSelectedProductIds([...selectedProductIds, item.id]);
    }
  };

  const isApplyButtonDisabled = selectedProductIds.length < 2;

  const comparePage=()=>{
    navigate(`/ProductComparison/${selectedProductIds[0]}/${selectedProductIds[1]}/${username}/${password}`);
    console.log(selectedProductIds[0]);
  }
  return (
    <>
      <Navbar userloginstatus={loginStatus} username={username} userpassword={password}/>
      <section className="shadow-lg p-3 mb-5 bg-body-tertiary rounded">
        <Row className="justify-content-md-center">
              <div className="col-sm-12 col-md-3">
                <div className="row mt-5">
                  <div className="col-3-of-4 mb-4 text-left">
                      <div className="item">
                        <label htmlFor="sort-by">Sort By Price : </label>
                      </div>
                      {ascendingSort ? (<button className="btn btn-outline-dark" onClick={onSortByPrice1} >
                        Descending
                      </button>) : (<button className="btn btn-outline-dark" onClick={onSortByPrice2} >
                        Ascending
                      </button>)}
                  </div>

                  <div className="col-3-of-4 mb-4 text-left">
                      <div className="item">
                        <label htmlFor="sort-by">Sort By Rating : </label>
                      </div>
                      {ascendingSortR ? (<button className="btn btn-outline-dark" onClick={onSortByRating1} >
                        Ascending
                      </button>) : (<button className="btn btn-outline-dark" onClick={onSortByRating2} >
                        Descending
                      </button>)}
                  </div>

                  <div className="col-3-of-4 text-left">
                      <div className="item">
                        <label htmlFor="sort-by">Compare Products</label>
                      </div>
                      <button className="btn btn-outline-dark" disabled={isApplyButtonDisabled} onClick={comparePage}>
                        Apply
                      </button>
                  </div>
                </div>
              </div>
              <Col xs={12} md={9}>
                    <div className="row mt-5">
                      {loading ? (
                          <p>Loading...</p>
                        ) : (
                          (sortedProducts.length > 0 ? sortedProducts : products).map((item, index) => (
                            <div className="col-md-3" key={index}>
                              
                                  <div className="product">
                                    <div className="img-container ">
                                      <img src={`data:image/jprg;base64,${item.imageData}`} alt="" style={{height:"40vh"}}/>
                                      <div className="addCart">
                                        <i className="fas fa-shopping-cart" onClick={()=>addTocart(item)}/>
                                      </div>
                                      <ul className="side-icons">
                                        <span>
                                          <i className="far fa-heart" onClick={()=>updaterating(item)}></i>
                                        </span>
                                      </ul>
                                    </div>
                                    <div className="row">
                                      <div className="col-sm-10">
                                          <h5 style={{textAlign:"left"}}><i className="far fa-heart"></i> {item.rating}</h5>
                                      </div>
                                      <div className="col-sm-2 right-corner-element">
                                          <input
                                            type="checkbox"
                                            checked={selectedProductIds.includes(item.id)}
                                            onChange={() => handleRatingCheckbox(item)}
                                            style={{
                                              border: '2px solid #000', // Adjust the border style as needed
                                              padding: '2px', // Optional: Add padding for spacing around the checkbox
                                            }}
                                          />
                                      </div>
                                    </div>
                                    <div className="bottom">
                                      <h4>{item.companyName} {item.productName} {item.category}</h4>
                                      <h6>Rs. {item.price}</h6>
                                      <div class="btndiv">
                                            <input
                                                type="button"
                                                value="Buy Now"
                                                class="btn btn-warning mt-2 w-50 fs-4"
                                                onClick={()=>goToProductDetailPage(item)}
                                            />
                                      </div>
                                    </div>
                                  </div>

                            </div>
                        ))
                      )}
                    </div>
              </Col>
        </Row>
      </section>
      <Footer_2 />
    </>
  );
}
