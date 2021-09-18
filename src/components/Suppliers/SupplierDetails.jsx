import React, { useState } from "react";
import { connect } from "react-redux";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
// import Offcanvas from "react-bootstrap/Offcanvas";
import Row from "react-bootstrap/Row";
import Product from "../Products/Product";
import Modal from "react-bootstrap/Modal";

const SupplierDetails = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let supplier = [];
  let productPortfolio = [];

  supplier = props.suppliers.find(
    (supplier) => supplier.id === parseInt(props.match.params.id)
  );

  props.products.forEach((product) => {
    if (supplier) {
      if (product.supplierId === supplier.id) {
        productPortfolio.push(product);
      }
    }
    return productPortfolio;
  });
  function goBack() {
    props.history.goBack();
  }

  return (
    <div>
      {supplier && (
        <Container>
          <Card>
            <Card.Body className="d-flex flex-row">
              <Card.Img
                variant="left"
                src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              />
              <Container className="d-flex flex-column ">
                <Card.Title className="mb-5 align-self-center">
                  <span className="fs-2 text-black fw-normal">
                    {supplier.companyName}
                  </span>
                </Card.Title>
                <Card.Text className="d-flex flex-row justify-content-between">
                  <span className="text-muted fs-4">Contact Name :</span>
                  <span className="fs-4 text-black">
                    {supplier.contactName}
                  </span>
                </Card.Text>
                <Card.Text className="d-flex flex-row justify-content-between">
                  <span className="text-muted fs-4">Contact Title :</span>
                  <span className="fs-4 text-black">
                    {supplier.contactTitle}
                  </span>
                </Card.Text>

                <Card.Text className="d-flex flex-row justify-content-between">
                  <span className="text-muted fs-4">Contact Phone :</span>
                  <span className="fs-4 text-black">
                    {supplier.address.phone}
                  </span>
                </Card.Text>
                <Card.Text className="d-flex flex-row justify-content-between">
                  <span className="text-muted fs-4">Company Street :</span>
                  <span className="fs-4 text-black">
                    {supplier.address.street}
                  </span>
                </Card.Text>
                <Card.Text className="d-flex flex-row justify-content-between">
                  <span className="text-muted fs-4">
                    Company city / region :
                  </span>
                  <span className="fs-4 text-black">
                    {supplier.address.city}/{supplier.address.region}
                  </span>
                </Card.Text>
                <Card.Text className="d-flex flex-row justify-content-between">
                  <span className="text-muted fs-4">Country :</span>
                  <span className="fs-4 text-black">
                    {supplier.address.country}
                  </span>
                </Card.Text>
                <div className="d-grid gap-2">
                  <Button variant="warning" onClick={goBack} className="">
                    Go Back
                  </Button>
                  <Button variant="secondary" onClick={handleShow} className="">
                    Products
                  </Button>
                </div>
              </Container>
            </Card.Body>
          </Card>
          <Modal
            {...props}
            size="xl"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            show={show}
            dialogClassName="modal-90w"
          >
            <Modal.Header  >
              <Modal.Title id="contained-modal-title-vcenter">
              Products
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Row className="d-flex justify-content-evenly">
                {productPortfolio.map((product, idx) => {
                  return (
                    <Product
                      key={idx}
                      {...product}
                      suppliers={props.suppliers}
                    />
                  );
                })}
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={handleClose}>Close</Button>
            </Modal.Footer>
          </Modal>

          {/* <Offcanvas
            show={show}
            onHide={handleClose}
            {...props}
            placement="bottom"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Products</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Row className="d-flex justify-content-evenly">
                {productPortfolio.map((product, idx) => {
                  return (
                    <Product
                      key={idx}
                      {...product}
                      suppliers={props.suppliers}
                    />
                  );
                })}
              </Row>
            </Offcanvas.Body>
          </Offcanvas> */}
        </Container>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    products: state.products,
    suppliers: state.suppliers,
  };
};

export default connect(mapStateToProps)(SupplierDetails);
