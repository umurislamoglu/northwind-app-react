import React from "react";
// import Button from "react-bootstrap/Button";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import ListGroup from "react-bootstrap/ListGroup";
import Nav from "react-bootstrap/Nav";
// import { NavLink } from "react-router-dom";

const Sidebar = () => {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    // <>
    //   <Button variant="" className="btn btn-lg" onClick={handleShow}>
    //     <i class="fas fa-bars"></i>
    //   </Button>

    //   <Offcanvas show={show} onHide={handleClose}>
    //     <Offcanvas.Header closeButton>
    //       <Offcanvas.Title>CONTENT</Offcanvas.Title>
    //     </Offcanvas.Header>
    //     <Offcanvas.Body>
          
    //       <ListGroup variant="flush">
    //         <ListGroup.Item onClick={handleClose}><NavLink to="/content/categories" className="text-decoration-none text-dark">Categories</NavLink></ListGroup.Item>
    //         <ListGroup.Item onClick={handleClose}><NavLink to="/content/products" className="text-decoration-none text-dark">Products</NavLink></ListGroup.Item>
    //         <ListGroup.Item onClick={handleClose}><NavLink to="/content/suppliers" className="text-decoration-none text-dark">Suppliers</NavLink></ListGroup.Item>
    //         <ListGroup.Item onClick={handleClose}><NavLink to="/content/employees" className="text-decoration-none text-dark">Employees</NavLink></ListGroup.Item>
            
    //       </ListGroup>
    //     </Offcanvas.Body>
    //   </Offcanvas>
    // </>

    <Nav
      variant=""
      className="flex-column list-group list-group-flush"

    >
      <Nav.Item className="list-group-item list-group-item-action" >
        <Nav.Link eventKey={1} href="/content/categories" className="text-decoration-none text-dark fs-4 fw-light" >Categories</Nav.Link>
      </Nav.Item >
      <Nav.Item  className="list-group-item list-group-item-action">
        <Nav.Link eventKey={2} href="/content/products/page/1" className="text-decoration-none text-dark fs-4 fw-light">Products</Nav.Link>
      </Nav.Item>
      <Nav.Item  className="list-group-item list-group-item-action">
        <Nav.Link eventKey={3} href="/content/suppliers/page/1" className="text-decoration-none text-dark fs-4 fw-light">Suppliers</Nav.Link>
      </Nav.Item>
     
    </Nav>
  );
};

export default Sidebar;
