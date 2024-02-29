import "./AdminPage.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import Footer_2 from "./Footer_2";
import AdminNavbar from "./AdminNavbar";

export default function AdminPage() {

    let navigate = useNavigate();

    let goToApproveRetailer = () => {
        navigate("/ApproveRetailer");
    };
    let goToViewRetailer = () => {
        navigate("/ViewRetailer");
    };
    let goToAddSeedForm = () => {
        navigate("/AddSeedForm");
    };
    let goToCheckOrder = () => {
        navigate("/AdminCheckOrder");
    };
    let goToViewAllProduct = () => {
        navigate("/AddProductForm");
    };
    let goToAllCustomer = () => {
        navigate("/AllUsers");
    };
    return(
        <>
        <AdminNavbar/>
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-10 mt-1">
                    <div id="carouselExample" class="carousel slide">
                            <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://plus.unsplash.com/premium_photo-1661854253558-2b1081fc1f23?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" className="d-block w-100" style={{ height: "75vh", objectFit: "fill" }} alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://images.unsplash.com/photo-1563201515-adbe35c669c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80 " className="d-block w-100" style={{ height: "75vh", objectFit: "fill" }} alt="..."/>
                            </div>
                            <div class="carousel-item">
                                <img src="https://plus.unsplash.com/premium_photo-1661900547591-80ee79e20d1c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" className="d-block w-100" style={{ height: "75vh", objectFit: "fill" }} alt="..."/>
                            </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-sm-12">
                        <p id="h2feat">Services</p>
                    </div>
                </div>

                
                <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-12">
                        <div className="row justify-content-center">
                            <div className="col-sm-12 col-md-4">
                                <Card style={{ width: "16rem" }}>
                                <img
                                    src="/Images/approve.jpg"
                                    className="card-img-top imgCard"
                                    width={200} // Adjust the value to change the width
                                />
                                <Card.Body>
                                    <Card.Title>Approve Retailer</Card.Title>
                                    <Button variant="primary" onClick={goToApproveRetailer}>
                                    Click Here
                                    </Button>
                                </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <Card style={{ width: "16rem" }}>
                                <img
                                    src="/Images/all_product.jpg"
                                    
                                    className="card-img-top imgCard"
                                    width={200} // Adjust the value to change the width
                                />
                                <Card.Body>
                                    <Card.Title>View All Retailer</Card.Title>
                                    <Button variant="primary" onClick={goToViewRetailer}>
                                    Click Here
                                    </Button>
                                </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <Card style={{ width: "16rem" }}>
                                <img
                                    src="/Images/sale_growth.jpg"
                                    
                                    className="card-img-top imgCard"
                                    width={200} // Adjust the value to change the width
                                />
                                <Card.Body>
                                    <Card.Title>Total Sale</Card.Title>
                                    <Button variant="primary" >
                                    Click Here
                                    </Button>
                                </Card.Body>
                                </Card>
                            </div>
                        
                        </div>


                        <div className="row justify-content-center">
                            <div className="col-sm-12 col-md-4">
                                <Card style={{ width: "16rem" }}>
                                <img
                                    src="/Images/order.jpg"
                                    className="card-img-top imgCard"
                                    width={200} // Adjust the value to change the width
                                />
                                <Card.Body>
                                    <Card.Title>Check Order</Card.Title>
                                    <Button variant="primary" onClick={goToCheckOrder}>
                                    Click Here
                                    </Button>
                                </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <Card style={{ width: "16rem" }}>
                                <img
                                    src="/Images/consumers.jpg"
                                    
                                    className="card-img-top imgCard"
                                    width={200} // Adjust the value to change the width
                                />
                                <Card.Body>
                                    <Card.Title>View All Consumer</Card.Title>
                                    <Button variant="primary"onClick={goToAllCustomer} >
                                        Click Here
                                    </Button>
                                </Card.Body>
                                </Card>
                            </div>
                            <div className="col-sm-12 col-md-4">
                                <Card style={{ width: "16rem" }}>
                                <img
                                    src="/Images/stock.jpg"
                                    
                                    className="card-img-top imgCard"
                                    width={200} // Adjust the value to change the width
                                />
                                <Card.Body>
                                    <Card.Title>Stock</Card.Title>
                                    <Button variant="primary" >
                                    Click Here
                                    </Button>
                                </Card.Body>
                                </Card>
                            </div>
                        
                        </div>
                    </div>
                </div>
            </div>
            <Footer_2/>
        </>
    )
}