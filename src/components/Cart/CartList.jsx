import React,{useState,useEffect} from "react";
import Container from "react-bootstrap/Container";
import ListGroup from "react-bootstrap/ListGroup";
import CartItem from "./CartItem";
import {getLocalStorage} from "../../localstorage/localStorage"


const CartList = () => {

  const [orderList,setOrderList] = useState([])
useEffect(() => {
  setOrderList(getLocalStorage("orders")) 
  
}, [])


  
  return (
    
    <Container className="mt-5">
      <ListGroup variant="flush">
      {
      orderList.length>0?orderList.map((order, idx) => {
          return <CartItem key={idx} {...order} setOrderList={setOrderList}/>;
        }):"Listede ürün yok"
      
      }
      </ListGroup>
    </Container>



    );
};

export default CartList;
