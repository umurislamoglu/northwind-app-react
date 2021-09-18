import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";



const OrderDetails = (props) => {
    let order = [];
    let product = [];

    order = props.orders.find(
        (order) => order.id.toString() === props.match.params.id
      )

      product = order?props.products.find(
          (product) => product.id === order.details[0].productId
      ):null;
   


    function goBack() {
        props.history.goBack();
      }


    return (
      <div>
    {
          order && product && (

    <Container>
      <Card>
        <Card.Header>
        <Card.Title
              style={{ height: "3rem" }}
              className="fs-3 d-flex justify-content-center"
            >{order.id}{" "}Order Details</Card.Title>
        </Card.Header>
        <Card.Body>
            <Container>
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Customer Id:</span>
              <span className="fs-4 text-black">{order.customerId}</span>
            </Card.Text>
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Order Date:</span>
              <span className="fs-4 text-black">{order.orderDate}</span>
            </Card.Text>
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Shipment Date:</span>
              <span className="fs-4 text-black">{order.shippedDate}</span>
            </Card.Text>
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Freight :</span>
              <span className="fs-4 text-black">{order.freight}</span>
            </Card.Text>
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Customer Name :</span>
              <span className="fs-4 text-black">{order.shipName}</span>
            </Card.Text>
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Customer Address :</span>
              <span className="fs-4 text-black">{order.shipAddress.street}{" "}{order.shipAddress.city}</span>
            </Card.Text>
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Customer Country :</span>
              <span className="fs-4 text-black">{order.shipAddress.country}</span>
            </Card.Text>
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Customer Postal Code :</span>
              <span className="fs-4 text-black">{order.shipAddress.postalCode}</span>
            </Card.Text>
            <Card.Title>Order Content</Card.Title>
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Product Name :</span>
              <span className="fs-4 text-black">{product.name}</span>
            </Card.Text>
            {/* <Link to ={`/content/products/${product.id}`} className="text-black">{product.name}</Link> */}
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Order Quantity :</span>
              <span className="fs-4 text-black">{order.details[0].quantity}</span>
            </Card.Text>
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Order Discount :</span>
              <span className="fs-4 text-black">{order.details[0].discount}</span>
            </Card.Text>
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Unit Price :</span>
              <span className="fs-4 text-black">{order.details[0].unitPrice}</span>
            </Card.Text>
            </Container>
        </Card.Body>
        <Card.Footer>
          <Button variant="warning" onClick={goBack} className="col-5 px-auto">
            Go Back
          </Button>
        </Card.Footer>
      </Card>
    </Container>
          )
        }
        </div>
  );
};

const mapStateToProps = (state) => {
    return {
      orders: state.orders,
      products: state.products
    };
  };
  
  export default connect(mapStateToProps)(OrderDetails);