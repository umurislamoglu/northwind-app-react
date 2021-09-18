import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { deleteFromLocalStorage ,getLocalStorage } from "../../localstorage/localStorage";

const CartItem = (props) => {
  const { id, productName, price, quantity, setOrderList  } = props;
  const deleteCartItem = (key, id) =>{
    deleteFromLocalStorage( key,id)
    setOrderList(getLocalStorage(key))
  }
  console.log(props)
  
  return (
    <ListGroup.Item className="text-decoration-none text-dark d-flex flex-row justify-content-between" >
      {" "}
      <div>
      <Link
        className="text-decoration-none text-dark"
        to={`/content/products/${id}`}
      >
        {productName}
      </Link>{" "}
      - {price} TL - {quantity} adet{" "}
      </div>
      
      <Button variant="danger" onClick={()=>(deleteCartItem("orders",id))}>Sil</Button>
    </ListGroup.Item>
  );
};

export default CartItem;
