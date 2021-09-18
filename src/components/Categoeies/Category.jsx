import React from 'react'
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

const Category = (props) => {
    return (
        <div>
            <ListGroup.Item action className="mt-3" > <Image style={{width: "5rem"}} src={props.picture} rounded /><Link className="text-decoration-none text-dark fs-3" to={`/content/categories/${props.id}`}> {props.name} - {props.description}</Link></ListGroup.Item>
        </div>
        
    )
}

export default Category
