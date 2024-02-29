import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';
import './Style.css';
import { useNavigate } from 'react-router-dom';

import f1 from './images/dhanuka.png';
import f3 from './images/nunhems.jpeg';
import c1 from './images/c1.jpeg';
import c2 from './images/c2.jpeg';
import c4 from './images/c4.jpeg';
import c5 from './images/c5 (1).jpeg';
import c6 from './images/c6.jpeg';
import c7 from './images/c7.jpeg';
import fr2 from './images/vnr.png';
import fr3 from './images/sungro.png';
import fr8 from './images/seminies.png';
import v4 from './images/kalash.png';

import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'; // Import Bootstrap icons for arrows

function Collection(props) {
  let navigate = useNavigate();

  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;

  const checkProducts = (brand) => {
    if (props.userloginstatus) {
      navigate(`/AllProducts/${brand}/${props.username}/${props.userpassword}`);
    } else {
      alert('Login First');
    }
  };

  const brands = [
    { name: 'DANUKA', image: c1 },
    { name: 'VNR', image: c2 },
    { name: 'KALASH', image: c4 },
    { name: 'SEMINIES', image: c5 },
    { name: 'NUNHEMS', image: c6 },
    { name: 'SUNGRO', image: c7 },
  ];

  const visibleBrands = brands.slice(startIndex, startIndex + cardsPerPage);

  const handleNext = () => {
    if (startIndex + cardsPerPage < brands.length) {
      setStartIndex(startIndex + cardsPerPage);
    }
  };

  const handlePrevious = () => {
    if (startIndex - cardsPerPage >= 0) {
      setStartIndex(startIndex - cardsPerPage);
    }
  };

  return (
    <Container>
      <div className="title mb-3 mt-5">
        <h3 className="d-flex justify-content-center fs-2 fw-bold">Shop by Brand</h3>
        <span className="d-flex justify-content-center fs-4">
          Select Your favourite Brand and enjoy shopping
        </span>
      </div>
      <Row className="justify-content-md-center">
        {visibleBrands.map((brand, index) => (
          <Col key={index} xs={6} md={4} className="my-3">
            <div className="promotion-item">
              <Image src={brand.image} rounded />
              <div className="promotion-content text-light">
                <h3>{brand.name}</h3>
                <Button variant="primary" onClick={() => checkProducts(brand.name)}>
                  Shop Now
                </Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center mt-3">
        <Button variant="secondary" onClick={handlePrevious} disabled={startIndex === 0}>
          <BsChevronLeft /> {/* Left arrow icon */}
        </Button>
        <Button
          variant="secondary"
          onClick={handleNext}
          disabled={startIndex + cardsPerPage >= brands.length}
          className="ms-3"
        >
          <BsChevronRight /> {/* Right arrow icon */}
        </Button>
      </div>
    </Container>
  );
}

export default Collection;