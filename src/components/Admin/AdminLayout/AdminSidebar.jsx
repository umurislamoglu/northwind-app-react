import React from "react";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const AdminSidebar = () => {
 

  return (
    

    <Nav
      variant=""
      className="flex-column list-group list-group-flush"

    >
      <Nav.Item className="list-group-item list-group-item-action" >
        <Nav.Link eventKey={1} href= "/admin/orders/page/1"  className="text-decoration-none text-dark fs-4 fw-light" >Orders</Nav.Link>
      </Nav.Item >
      <Nav.Item className="list-group-item list-group-item-action" >
        <Nav.Link eventKey={2} href= "/admin/categories/page/1"  className="text-decoration-none text-dark fs-4 fw-light" >Categories</Nav.Link>
      </Nav.Item >
      <Nav.Item className="list-group-item list-group-item-action" >
        <Nav.Link eventKey={3} href= "/admin/suppliers/page/1"  className="text-decoration-none text-dark fs-4 fw-light" >Suppliers</Nav.Link>
      </Nav.Item >
      <Nav.Item className="list-group-item list-group-item-action" >
        <Nav.Link eventKey={3} href= "/admin/products/page/1"  className="text-decoration-none text-dark fs-4 fw-light" >Products</Nav.Link>
      </Nav.Item >
      
     
      <NavDropdown title="Create" id="basic-nav-dropdown" className="list-group-item list-group-item-action text-decoration-none text-muted fs-4 fw-light">
        <NavDropdown.Item eventKey="4.1" className="text-decoration-none text-dark fs-4 fw-light" href="/admin/product/create">Product</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2" className="text-decoration-none text-dark fs-4 fw-light" href="/admin/supplier/create">Supplier</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3" className="text-decoration-none text-dark fs-4 fw-light" href="/admin/category/create">Category</NavDropdown.Item>
       
      </NavDropdown>
    </Nav>
  );
};

export default AdminSidebar;
