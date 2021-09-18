import React,{useEffect , useState} from 'react'
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect} from "react-redux";
import {getSuppliersFromApi} from "../../../../actions/supplierAction"
import {editSupplierFromApi} from "../../../../actions/supplierAction"

const EditSupplier = (props) => {

  const {   getSuppliersFromApi ,editSupplierFromApi  } = props
  useEffect(() => {
    getSuppliersFromApi();
  }, [getSuppliersFromApi])


  const supplier = props.suppliers.find(
    (supplier) => supplier.id === parseInt(props.match.params.id)
  )
  let supplierCompanyName = supplier.companyName
  let supplierContactName = supplier.contactName
  let supplierContactTitle = supplier.contactTitle
  let supplierStreet = supplier.address.street
  let supplierCity = supplier.address.city
  let supplierRegion = supplier.address.region
  let supplierPostalCode = supplier.address.postalCode
  let supplierCountry = supplier.address.country
  let supplierPhone = supplier.address.phone
  let supplierId= supplier.id

const [newCompanyName ,setNewCompanyName ] = useState(supplierCompanyName)
const [newContactName,setNewContactName] = useState(supplierContactName)
const [newContactTitle,setNewContactTitle] = useState(supplierContactTitle)
const [newStreet,setNewStreet] = useState(supplierStreet)
const [newCity,setNewCity] = useState(supplierCity)
const [newRegion ,setNewRegion ] = useState(supplierRegion)
const [newPostalCode,setNewPostalCode] = useState(supplierPostalCode)
const [newCountry,setNewCountry] = useState(supplierCountry)
const [newPhone,setNewPhone] = useState(supplierPhone)



let updateSupplier = {
  id:supplierId,
  companyName:newCompanyName,
  contactName:newContactName,
  contactTitle:newContactTitle,
  address:{
    street:newStreet,
    city:newCity,
    region:newRegion,
    postalCode:newPostalCode,
    country:newCountry,
    phone:newPhone
  }
 
}



    const onSupplierUpdate =(e) => {

      e.preventDefault();
 
      editSupplierFromApi(updateSupplier)
      console.log("update yapıldı")
      
    
    props.history.push("/admin/suppliers/page/1")
    }
    return (
        <Container>
        <Card>
          <Card.Header className="fw-normal fs-3">Create Supplier</Card.Header>
          <Card.Body>
            <Form onSubmit={onSupplierUpdate}> 
              <Form.Group className="mb-3" >
                <Form.Label>Supplier Company Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Supplier Company Name" required value={newCompanyName} onChange={(e)=>{setNewCompanyName(e.target.value)}} />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Supplier Contact Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Supplier Contact Name" required value={newContactName} onChange={(e)=>{setNewContactName(e.target.value)}} />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Supplier Contact Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Supplier Contact Title" required value={newContactTitle} onChange={(e)=>{setNewContactTitle(e.target.value)}} />
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Supplier Address Infos</Form.Label>
                <Form.Control className="mb-2" type="text" placeholder="Enter Street" required  value={newStreet} onChange={(e)=>{setNewStreet(e.target.value)}}/>
                <Form.Control className="mb-2" type="text" placeholder="Enter City" required  value={newCity} onChange={(e)=>{setNewCity(e.target.value)}}/>
                <Form.Control className="mb-2" type="text" placeholder="Enter Region" required value={newRegion} onChange={(e)=>{setNewRegion(e.target.value)}} />
                <Form.Control className="mb-2" type="text" placeholder="Enter Postal Code" required value={newPostalCode} onChange={(e)=>{setNewPostalCode(parseInt(e.target.value))}} />
                <Form.Control className="mb-2" type="text" placeholder="Enter Country" required value={newCountry} onChange={(e)=>{setNewCountry(e.target.value)}} />
                <Form.Control className="mb-2" type="text" placeholder="Enter Phone" required value={newPhone} onChange={(e)=>{setNewPhone(e.target.value)}}/>
              </Form.Group>
  
  
              <Button variant="primary" type="submit">
                Update Supplier
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


export default connect(mapStateToProps,{getSuppliersFromApi,editSupplierFromApi})(EditSupplier);
