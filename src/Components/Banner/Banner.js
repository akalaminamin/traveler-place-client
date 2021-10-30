import React from "react";
import { Carousel, Button } from "react-bootstrap";
import "./Banner.css";
import slideOne from "../../Assest/image/pic4.c553763e.jpg";
import slideTwo from "../../Assest/image/pic5.fd29e920.jpg";
import slideThree from "../../Assest/image/pic6.3fee8d5f.jpg";
const Banner = () => {
  return (
    <>
      <Carousel className="carousel-custom">
        <Carousel.Item className="h-100  carousel-item" interval={3000}>
          <img
            className="d-block w-100 carousel-img"
            src={slideOne}
            alt="First slide"
          />
          <Carousel.Caption className="h-100 align-items-center d-flex justify-content-center flex-column">
            <h3 className="display-1 mb-3">Love where you're going</h3>
            <p>Book incredible things to do around the world.</p>
            <Button variant="primary">Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100  carousel-img"
            src={slideTwo}
            alt="Second slide"
          />

          <Carousel.Caption className="carousel-caption h-100 align-items-center d-flex justify-content-center flex-column">
            <h3 className="display-1">The world awaits</h3>
            <p>Book incredible things to do around the world.</p>
            <Button variant="primary">Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={3000}>
          <img
            className="d-block w-100  carousel-img"
            src={slideThree}
            alt="Third slide"
          />

          <Carousel.Caption className="carousel-caption h-100 align-items-center d-flex justify-content-center flex-column">
            <h3 className="display-1">Just What You Expected </h3>
            <p>Discover amzaing places at exclusive deals </p>
            <Button variant="primary">Read More</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Banner;
