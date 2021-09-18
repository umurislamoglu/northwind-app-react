import React from 'react'
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

const Order = (props) => {
    return (
        <div>
        <ListGroup.Item action  > <Link className="text-decoration-none text-dark" to={`/admin/orders/${props.id}`}> ORDER ID: {props.id} - CUSTOMER: {props.customerId}</Link></ListGroup.Item>
    </div>
    )
}

export default Order
