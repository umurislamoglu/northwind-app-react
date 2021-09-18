import React , {useEffect} from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { connect } from "react-redux";
import { getCategoriesFromApi  } from "../../actions/categoryAction";

const ProductDetails = (props) => {

  const {    getCategoriesFromApi   } = props
  useEffect(() => {
    getCategoriesFromApi();
    
  }, [getCategoriesFromApi])



  let product = [];
  let category = [];
  let supplier = [];
console.log(props)
  
  product = props.products.find(
    (product) => product.id === parseInt(props.match.params.id)
  );
  supplier = product?props.suppliers.find(
    (supplier) => supplier.id === product.supplierId
  ):null;
  category = product?props.categories.find(
    (category) => category.id === product.categoryId
  ):null;
  function goBack() {
    props.history.goBack();
  }
  return (
    <div>
{
  product &&  supplier && category && (
<Container>

      <Card style={{ width: "90%" }} className="mb-5">
        <Card.Img
          variant="top"
          src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
        />
        <Card.Body>
          <Container>
            <Card.Title
              style={{ height: "3rem" }}
              className="fs-3 d-flex justify-content-center"
            >
              {product.name}
            </Card.Title>
            <Card.Text className="d-flex justify-content-center">
              Awesome Product
            </Card.Text>
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Stock:</span>
              <span className="fs-4 text-black">{product.unitsInStock}</span>
            </Card.Text>
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Price:</span>
              <span className="fs-4 text-black">{product.unitPrice}</span>
            </Card.Text>
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Category:</span>
              <span className="fs-4 text-black">{category.name}</span>
            </Card.Text>
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Category description:</span>
              <span className="fs-4 text-black">{category.description}</span>
            </Card.Text>
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Supplier:</span>
              <span className="fs-4 text-black">{supplier.companyName}</span>
            </Card.Text>
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Supplier Contact Name:</span>
              <span className="fs-4 text-black">{supplier.contactName}</span>
            </Card.Text>
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Supplier Phone Number:</span>
              <span className="fs-4 text-black">{supplier.address.phone}</span>
            </Card.Text>
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Supplier Adress:</span>
              <span className="fs-4 text-black">{supplier.address.street}</span>
            </Card.Text>
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Supplier City:</span>
              <span className="fs-4 text-black">
                {supplier.address.city}/{supplier.address.region}
              </span>
            </Card.Text>
            <Card.Text
              style={{ height: "2rem" }}
              className="d-flex flex-row justify-content-between"
            >
              <span className="text-muted fs-4">Supplier Country:</span>
              <span className="fs-4 text-black">
                {supplier.address.country}
              </span>
            </Card.Text>
          </Container>
        </Card.Body>
        <Card.Footer className="d-flex flex-row justify-content-evenly">
          <Button variant="warning" onClick={goBack} className="col-5 px-auto">
            Go Back
          </Button>
          <Button variant="success" className="col-5 px-auto">Add to Cart</Button>
        </Card.Footer>
      </Card>
    </Container>
  )
}

    </div>
    
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    suppliers: state.suppliers,
    categories: state.categories,
  };
};

export default connect(mapStateToProps, {getCategoriesFromApi})(ProductDetails);
