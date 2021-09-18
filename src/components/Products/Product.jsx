import React, { useState } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import {
  insertLocalStorage,
  getLocalStorage,
} from "../../localstorage/localStorage";

const Product = (props) => {
  const [count, setCount] = useState(1);

  var addOne = () => {
    if (count >= props.unitsInStock) {
      setCount(props.unitsInStock);
    } else {
      setCount(count + 1);
    }
  };

  var minusOne = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  const addToCart = () => {
    let item = {
      productName: props.name,
      price: props.unitPrice,
      quantity: count,
      id: props.id,
    };
    let orders = [];
    let trig = false;

    let localStorageInit = getLocalStorage("orders");
    if (localStorageInit !== null) {
      if (localStorageInit.length > 0) {
        for (let i = 0; i < localStorageInit.length; i++) {
          if (localStorageInit[i].id == item.id) {
            trig = true;
            localStorageInit[i].quantity =
              localStorageInit[i].quantity + item.quantity;
            orders.push(localStorageInit[i]);
          } else {
            orders.push(localStorageInit[i]);
          }
        }

        if (!trig) {
          orders.push(item);
          insertLocalStorage("orders", orders);
        } 
      } else {
        orders.push(item);
      }
    } else {
      orders.push(item);
    }
    insertLocalStorage("orders", orders);
  };

  return (
    <Col md={6} sm={12} lg={4}>
      <Card
        style={{ width: "18rem", height: "37rem" }}
        className="mt-4 me-auto"
      >
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title style={{ height: "3rem" }}>
            <Link
              to={`/content/products/${props.id}`}
              className="text-decoration-none text-dark"
            >
              {props.name}
            </Link>
          </Card.Title>
          <Card.Text style={{ height: "3rem" }}>
            {props.suppliers.map((supplier, idx) => {
              if (supplier.id === props.supplierId) {
                return (
                  <Link
                    key={idx}
                    to={`/content/suppliers/${supplier.id}`}
                    className="text-decoration-none text-dark"
                  >
                    {supplier.companyName}{" "}
                  </Link>
                );
              } else {
                return "";
              }
            })}
          </Card.Text>
          <Card.Text style={{ height: "2rem" }}>
            Stock: {props.unitsInStock}
          </Card.Text>
          <Card.Text style={{ height: "2rem" }}>
            Price: {props.unitPrice}
          </Card.Text>
          <Card.Text style={{ height: "2rem" }}>Quantity: {count}</Card.Text>

          <div className="mb-3">
            <Button variant="warning" onClick={minusOne}>
              -
            </Button>
            <Button variant="success" onClick={addOne}>
              +
            </Button>
          </div>

          <Button variant="primary" onClick={addToCart}>
            Add to Cart
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Product;
