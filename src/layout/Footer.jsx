import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

const Footer = () => {
  return (
    <div className="bg-dark text-light  mt-auto ">
      <Container className="d-flex flex-row mt-5 justify-content-between " >
        <Col className="d-flex align-items-center justify-content-center">
          {" "}
          <p>Umur İslamoğlu</p>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <ul>
            <li>Kullanım Koşulları</li>
            <li>S.S.S</li>
            <li>İletişim</li>
          </ul>
        </Col>
        <Col className="d-flex align-items-center justify-content-center">
          <p>Biz Kimiz?</p>
        </Col>
      </Container>
      </div>
  );
};

export default Footer;
