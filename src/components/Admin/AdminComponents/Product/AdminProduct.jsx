import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import { removeProductFromApi } from "../../../../actions/productAction";

const AdminProduct = (props) => {

  const deleteProduct = (id) => {
    props.removeProductFromApi(id);
    
  
  }


    return (
        <div>
             <ListGroup.Item className="mt-3">
          <Row className="d-flex flex-row justify-content-evenly">
            <Col>
              {" "}
              {props.name}
            </Col>
  
            <Col className="d-flex flex-row-reverse">
            <Button className="mx-3" size="sm" variant="danger" onClick={()=>deleteProduct(props.id)}>Delete</Button>
              <Link to ={`/admin/products/${props.id}`} > <Button className="mx-3" size="sm" variant="warning" >Update</Button></Link>
              
            </Col>
          </Row>
        </ListGroup.Item>
        </div>
    )
}
export default connect(null, {removeProductFromApi})(AdminProduct);

