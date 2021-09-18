import React, {useState} from 'react'
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addSupplierToApi } from "../../../actions/supplierAction";
import { connect } from "react-redux";


const CreateSupplier = (props) => {


  const [companyName,setCompanyName] = useState("")
  const [contactName,setContactName] = useState("")
  const [title,setTitle] = useState("")
  const [street,setStreet] = useState("")
  const [city,setCity] = useState("")
  const [region,setRegion] = useState("")
  const [postalCode,setPostalCode] = useState(0)
  const [country,setCountry] = useState("")
  const [phone,setPhone] = useState("")

  let newSupplier = {
       
    
    
    companyName: companyName,
    contactName: contactName,
    contactTitle: title,
    address: {
        street: street,
        city: city,
        region: region,
        postalCode: postalCode,
        country: country,
        phone: phone
    }
}


const onSupplierSubmit = (e) => {
  e.preventDefault()
  if(companyName && contactName && contactName && street && city  && postalCode && country && phone ) {
    props.dispatch(addSupplierToApi(newSupplier))
    console.log("Kayıt yapıldı")
    console.log(newSupplier)
    setCompanyName("")
    setContactName("")
    setTitle("")
    setStreet("")
    setCity("")
    setRegion("")
    setPostalCode(0)
    setCountry("")
    setPhone("")
  } 

  
}



    return (
        <Container>
      <Card>
        <Card.Header className="fw-normal fs-3">Create Supplier</Card.Header>
        <Card.Body>
          <Form onSubmit={onSupplierSubmit}> 
            <Form.Group className="mb-3" >
              <Form.Label>Supplier Company Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Supplier Company Name" required onChange={(e) => setCompanyName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Supplier Contact Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Supplier Contact Name" required onChange={(e) => setContactName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Supplier Contact Title</Form.Label>
              <Form.Control type="text" placeholder="Enter Supplier Contact Title" required onChange={(e) => setTitle(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Supplier Address Infos</Form.Label>
              <Form.Control className="mb-2" type="text" placeholder="Enter Street" required onChange={(e) => setStreet(e.target.value)}/>
              <Form.Control className="mb-2" type="text" placeholder="Enter City" required onChange={(e) => setCity(e.target.value)}/>
              <Form.Control className="mb-2" type="text" placeholder="Enter Region" required onChange={(e) => setRegion(e.target.value)}/>
              <Form.Control className="mb-2" type="text" placeholder="Enter Postal Code" required onChange={(e) => setPostalCode(parseInt(e.target.value))}/>
              <Form.Control className="mb-2" type="text" placeholder="Enter Country" required onChange={(e) => setCountry(e.target.value)}/>
              <Form.Control className="mb-2" type="text" placeholder="Enter Phone" required onChange={(e) => setPhone(e.target.value)}/>
            </Form.Group>


            <Button variant="primary" type="submit">
              Create Supplier
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    )
}  

const mapStateToProps = (state) => {
  return {
    suppliers: state.suppliers,
  };
};

export default connect(mapStateToProps)(CreateSupplier);