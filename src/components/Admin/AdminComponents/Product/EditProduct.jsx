import React , {useState,useEffect}  from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import {getProductsFromApi} from "../../../../actions/productAction"
import {editProductFromApi} from "../../../../actions/productAction"
import { getSuppliersFromApi } from "../../../../actions/supplierAction";
import { getCategoriesFromApi } from "../../../../actions/categoryAction";

const EditProduct = (props) => {

  const {   getProductsFromApi ,editProductFromApi ,getSuppliersFromApi ,getCategoriesFromApi} = props
  useEffect(() => {
    getProductsFromApi();
    getSuppliersFromApi();
    getCategoriesFromApi();
  }, [getProductsFromApi ,getSuppliersFromApi , getCategoriesFromApi])


  const product = props.products.find(
    (product) => product.id === parseInt(props.match.params.id)
  )

  let productId = product.id
  let productName = product.name
  let productSupplierId = product.supplierId
  let productCategoryId = product.categoryId
  let productQuantityPerUnit = product.quantityPerUnit
  let productUnitPrice = product.unitPrice
  let productUnitsInStock = product.unitsInStock
  let productUnitsOnOrder = product.unitsOnOrder
  let productReorderLevel = product.reorderLevel
  let productDiscontinued = product.discontinued


const [newProductName ,setNewProductName ] = useState(productName)
const [newProductSupplierId ,setNewProductSupplierId ] = useState(productSupplierId)
const [newProductCategoryId ,setNewProductCategoryId ] = useState(productCategoryId)
const [newProductQuantityPerUnit,setNewProductQuantityPerUnit ] = useState(productQuantityPerUnit)
const [newProductUnitPrice ,setNewProductUnitPrice ] = useState(productUnitPrice)
const [newProductUnitsInStock ,setNewProductUnitsInStock ] = useState(productUnitsInStock)
// const [newProductUnitsOnOrder ,setNewProductUnitsOnOrder] = useState(productUnitsOnOrder)
// const [newProductReorderLevel ,setNewProductReorderLevel ] = useState(productReorderLevel)
const [newProductDiscontinued ,setNewProductDiscontinued ] = useState(productDiscontinued)


let updateProduct = {
  id:productId,
  supplierId:newProductSupplierId,
  categoryId:newProductCategoryId,
  quantityPerUnit:newProductQuantityPerUnit,
  unitPrice:newProductUnitPrice ,
  unitsInStock:newProductUnitsInStock,
  unitsOnOrder:productUnitsOnOrder,
  reorderLevel:productReorderLevel,
  discontinued:newProductDiscontinued,
  name:newProductName,
  
 
}
console.log(product)
console.log(props)
console.log(updateProduct)


    const onProductUpdate = (e) => {
      e.preventDefault();
 
      editProductFromApi(updateProduct)
      console.log("update yapıldı")
      
    
    props.history.push("/admin/products/page/1")
    }

    return (
        <Container>
        <Card>
          <Card.Header className="fw-normal fs-3">Create Product</Card.Header>
          <Card.Body>
            <Form onSubmit={onProductUpdate}>
              <Form.Group className="mb-3" >
                <Form.Label>Product Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Name" required value={newProductName} onChange={(e)=>{setNewProductName(e.target.value)}}/>
              </Form.Group>
  
              <Form.Group className="mb-3" >
                <Form.Label>Product Price</Form.Label>
                <Form.Control type="text" placeholder="Enter Product Price"  required value={newProductUnitPrice} onChange={(e)=>{setNewProductUnitPrice(e.target.value)}}/>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Quantity Per Unit</Form.Label>
                <Form.Control type="text" placeholder="Enter Quantity Per Unit" required value={newProductQuantityPerUnit} onChange={(e)=>{setNewProductQuantityPerUnit(e.target.value)}}/>
              </Form.Group>
              <Form.Group className="mb-3" >
                <Form.Label>Stock</Form.Label>
                <Form.Control type="text" placeholder="Enter Stock" required value={newProductUnitsInStock} onChange={(e)=>{setNewProductUnitsInStock(e.target.value)}}/>
              </Form.Group>
              <Form.Group className="mb-3" >
             
                <Form.Label>Discount</Form.Label>
                
                <Form.Check 
                
                type="switch"
                id="custom-switch"
                size="lg"
                value = {newProductDiscontinued}
                onChange={(e) => setNewProductDiscontinued(newProductDiscontinued => !newProductDiscontinued)}
              />
                {/* <Form.Control type="boolean" placeholder="Enter Discount" required  value={false}  onChange={() => setDiscount(true)}/> */}
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>Supplier</Form.Label>
              <Form.Select aria-label="Default select example"   value={newProductSupplierId}  onChange={(e) => setNewProductSupplierId(parseInt(e.target.value) )} >
             
                {
                props.suppliers.map((supplier)=>{
                    return <option key={`${supplier.id}`} value={supplier.id}>{supplier.companyName}</option>
                })
              }
                
              </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select aria-label="Default select example" value={newProductCategoryId}  onChange={(e) => setNewProductCategoryId(parseInt(e.target.value) )}  >
              
                {
                props.categories.map((category)=>{
                    return <option key={`${category.id}`} value={category.id}>{category.name}</option>
                })
              }
                
              </Form.Select>
              </Form.Group>
  
              <Button variant="primary" type="submit">
                Update Product
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
      products: state.products,
      categories: state.categories
    };
  };
  
  export default connect(mapStateToProps,{getProductsFromApi,editProductFromApi, getCategoriesFromApi, getSuppliersFromApi})(EditProduct);
