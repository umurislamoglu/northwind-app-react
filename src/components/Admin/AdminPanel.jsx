import React from 'react'
import AdminSidebar from "./AdminLayout/AdminSidebar"
import AdminContent from "./AdminLayout/AdminContent"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const AdminPanel = () => {
    return (
        <div>
            <Row className="mt-5">
            <Col md={2}><AdminSidebar/></Col>
            <Col md={10}><AdminContent/></Col>
            </Row>
        
        </div>
    )
}

export default AdminPanel
