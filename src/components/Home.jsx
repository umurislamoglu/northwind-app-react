import React from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Accordion from "react-bootstrap/Accordion";

const Home = () => {
  return (
    
    <Container className="mt-2">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://shiftdelete.net/wp-content/uploads/2020/12/apple-product-red-00.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First Product</h3>
            <p>Awesome Product</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://websetnet.net/wp-content/uploads/2020/11/amazon-echo-product-red-0-1280x720-2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second Product</h3>
            <p>Awesome Product</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://girisimsavascisi.org/wp-content/uploads/2020/10/e-ticaret-urun-aciklamalari-1280x720.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third Product</h3>
            <p>Awesome Product</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <h3 className="mt-5 mb-4"> Featured Products</h3>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Product1</Accordion.Header>
          <Accordion.Body>Awesome Product. Awesome Price.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Product 2</Accordion.Header>
          <Accordion.Body>Awesome Product. Awesome Price.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Product 3</Accordion.Header>
          <Accordion.Body>Awesome Product. Awesome Price.</Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Product 4</Accordion.Header>
          <Accordion.Body>Awesome Product. Awesome Price.</Accordion.Body>
        </Accordion.Item>
      </Accordion>
     
    </Container>
  );
};

export default Home;
