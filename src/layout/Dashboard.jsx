import React from 'react'
import Content from './Content';
import Sidebar from './Sidebar';
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";



const Dashboard = () => {
    return (
        <Row className="mt-5">
        <Col md={2}><Sidebar/></Col> 
        <Col md={10}><Content/></Col>
        
       </Row>
       
       
  
           
    )
}

export default Dashboard
