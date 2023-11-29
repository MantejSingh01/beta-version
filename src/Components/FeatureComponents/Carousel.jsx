import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { CAROUSAL_IMGS } from "../../utils/constants";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faNode } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
// import './CarouselPage.css'; // Import your CSS file

const CarouselPage = () => {

 

  return (
    <div className="carousalContainer">
      <Carousel interval={1000} fade  indicators={true} className="w-100">
        {CAROUSAL_IMGS.map((src, index) => (
          <Carousel.Item className="carousalItems" key={index}>
            <img
              src={src}
              alt={`carousel-img-${index}`}
              className="d-block w-100"
              
            />
          </Carousel.Item>
        ))}
      </Carousel>
      {/* <div className="custom-indicators">{customIndicators}</div> */}

    </div>
  );
};

export default CarouselPage;
