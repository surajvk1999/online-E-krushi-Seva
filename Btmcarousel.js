import b1 from "./images/logo.png";
import b2 from "./images/brand2.png";
import b3 from "./images/brand3.png";
import b4 from "./images/brand4.png";
import b5 from "./images/brand5.jpg";
import b6 from "./images/brand6.jpg";
import b7 from "./images/brand7.jpg";
import b8 from "./images/brand8.jpg";
import b9 from "./images/brand9.png";
import b10 from "./images/brand10.jpg";
import "./Style.css";

function Btmcarousel() {
  return (
    <>
      <div className="title mb-3 mt-5">
        <h3 className="d-flex justify-content-center fs-2 fw-bold">
          Explore E-Krushi Seva
        </h3>
        
      </div>
      <div className="brand-layout container">
        <div className="swiper-container slider-3">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              {/* <img src={b1} /> */}
            </div>
            <div className="swiper-slide">
              <img src={b2} />
            </div>
            <div className="swiper-slide">
              <img src={b3} />
            </div>
            <div className="swiper-slide">
              <img src={b4} />
            </div>
            <div className="swiper-slide">
              <img src={b5} />
            </div>
            <div className="swiper-slide">
              <img src={b6} />
            </div>
            <div className="swiper-slide">
              <img src={b7} />
            </div>
            <div className="swiper-slide">
              <img src={b8} />
            </div>
            <div className="swiper-slide">
              <img src={b9} />
            </div>
            <div className="swiper-slide">
              <img src={b10} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Btmcarousel;
