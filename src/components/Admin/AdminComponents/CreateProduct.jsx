import React, {useState , useEffect} from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { addProductToApi } from "../../../actions/productAction";
import { getSuppliersFromApi } from "../../../actions/supplierAction";
import { getCategoriesFromApi } from "../../../actions/categoryAction";

const CreateProduct = (props) => {

  const { getSuppliersFromApi ,getCategoriesFromApi , history, addProductToApi  } = props
  
  
  
  
  useEffect(() => {
    
    getCategoriesFromApi();
    getSuppliersFromApi();
    
  }, [getCategoriesFromApi,getSuppliersFromApi])



  const [name,setName] = useState("")
  const [price,setPrice] = useState(0)
  const [quantityPerUnit,setQuantityPerUnit] = useState("")
  const [stock,setStock] = useState(0)
  const [discount,setDiscount] = useState(false)
  const [supplierId,setSupplierId] = useState(4)
  const [categoryId,setCategoryId] = useState(2)

  let newProduct = {
       
        supplierId: supplierId,
        categoryId: categoryId,
        quantityPerUnit: quantityPerUnit,
        unitPrice: price,
        unitsInStock: stock,
        unitsOnOrder: 0,
        reorderLevel: 0,
        discontinued: discount,
        name: name
  }

  



  const SubmitProduct = (e) => {
  e.preventDefault()
    
  if(supplierId && categoryId && quantityPerUnit && price && stock  && name) {
    addProductToApi(newProduct);
    console.log("Kayıt yapıldı");
    console.log(newProduct);
    setName("");
    setPrice(0);
    setQuantityPerUnit("");
    setStock(0);
    setDiscount(false);
    setSupplierId();
    setCategoryId();
  }
   
    
    history.push("/admin/products/page/1")

  
 
    
  }

  // if(supplierId && categoryId && quantityPerUnit && price && stock  && name) {}


  
  return (
    <Container>
      <Card>
        <Card.Header className="fw-normal fs-3">Create Product</Card.Header>
        <Card.Body>
          <Form onSubmit={SubmitProduct}>
            <Form.Group className="mb-3" >
              <Form.Label>Product Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Product Name" required   onChange={(e) => setName(e.target.value)}/>
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Product Price</Form.Label>
              <Form.Control type="text" placeholder="Enter Product Price"  required   onChange={(e) => setPrice(parseInt(e.target.value))}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Quantity Per Unit</Form.Label>
              <Form.Control type="text" placeholder="Enter Quantity Per Unit" required  onChange={(e) => setQuantityPerUnit(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" >
              <Form.Label>Stock</Form.Label>
              <Form.Control type="text" placeholder="Enter Stock" required   onChange={(e) => setStock(parseInt(e.target.value))} />
            </Form.Group>
            <Form.Group className="mb-3" >
           
              <Form.Label>Discount</Form.Label>
              
              <Form.Check 
              
              type="switch"
              id="custom-switch"
              size="lg"
              onChange={(e) => setDiscount(discount => !discount)}
            />
              {/* <Form.Control type="boolean" placeholder="Enter Discount" required  value={false}  onChange={() => setDiscount(true)}/> */}
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Supplier</Form.Label>
            <Form.Select aria-label="Default select example" value={supplierId}  onChange={(e) => setSupplierId(parseInt(e.target.value) )}>
           
              {
              props.suppliers.map((supplier)=>{
                  return <option key={`${supplier.id}`} value={supplier.id}>{supplier.companyName}</option>
              })
            }
              
            </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
            <Form.Label>Category</Form.Label>
            <Form.Select aria-label="Default select example" value={categoryId}  onChange={(e) => setCategoryId(parseInt(e.target.value) )}>
            
              {
              props.categories.map((category)=>{
                  return <option key={`${category.id}`} value={category.id}>{category.name}</option>
              })
            }
              
            </Form.Select>
            </Form.Group>

            <Button variant="primary" type="submit">
              Create Product
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

const mapStateToProps = (state) => {
    return {
      suppliers: state.suppliers,
      categories: state.categories,
      

    };
  };
  
  export default connect(mapStateToProps,{getSuppliersFromApi,getCategoriesFromApi,addProductToApi})(CreateProduct);
