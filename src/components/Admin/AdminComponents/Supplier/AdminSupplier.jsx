import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { removeSupplierFromApi } from "../../../../actions/supplierAction";
import { connect } from "react-redux";


const AdminSupplier = (props) => {

  const deleteSupplier = (id) => {
    props.removeSupplierFromApi(id);
    
  
  }
  
 
    return (
        <div>
        <ListGroup.Item className="mt-3">
          <Row className="d-flex flex-row justify-content-evenly">
            <Col>
              {" "}
              {props.contactName} - {props.companyName}
            </Col>
  
            <Col className="d-flex flex-row-reverse">
            <Button className="mx-3" size="sm" variant="danger" onClick={()=>deleteSupplier(props.id)}>Delete</Button>
            <Link to ={`/admin/suppliers/${props.id}`} > <Button className="mx-3" size="sm" variant="warning" >Update</Button></Link>
              
            </Col>
          </Row>
        </ListGroup.Item>
      </div>
    )
}

export default connect(null, {removeSupplierFromApi})(AdminSupplier);

