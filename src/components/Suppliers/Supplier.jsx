import React from 'react'
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";


const Supplier = (props) => {
    return (
        <div>
            <ListGroup.Item action  > <Image style={{width: "2rem"}} src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" rounded /><Link className="text-decoration-none text-dark" to={`/content/suppliers/${props.id}`}> {props.contactName} - {props.companyName}</Link></ListGroup.Item>
        </div>
        
    )
}

export default Supplier
