import React from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import { connect } from "react-redux";
import { removeCategoryFromApi } from "../../../../actions/categoryAction";


const AdminCategory = (props) => {
 
  const deleteCategory = (id) => {
    props.removeCategoryFromApi(id);
    
  
  }
  
  return (
    
    <div>
      <ListGroup.Item className="mt-3">
        <Row className="d-flex flex-row justify-content-evenly">
          <Col>
            {" "}
            {props.name} - {props.description}
          </Col>

          <Col className="d-flex flex-row-reverse">
          <Button className="mx-3" size="sm" variant="danger" onClick={()=>deleteCategory(props.id)}>Delete</Button>
          <Link to ={`/admin/categories/${props.id}`} > <Button className="mx-3" size="sm" variant="warning" >Update</Button></Link>
            
          </Col>
        </Row>
      </ListGroup.Item>
    </div>
  );
};


export default connect(null, {removeCategoryFromApi})(AdminCategory);

