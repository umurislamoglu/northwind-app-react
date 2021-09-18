import React , {useEffect} from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Product from "../Products/Product";
import { getProductsFromApi } from "../../actions/productAction";
import { getSuppliersFromApi } from "../../actions/supplierAction";

const CategoryProducts = (props) => {
  let categoryProductList = [];

  const { products  ,getProductsFromApi ,getSuppliersFromApi  } = props
  useEffect(() => {
 
    getProductsFromApi();
    getSuppliersFromApi();
  }, [getProductsFromApi,getSuppliersFromApi])

  products.forEach((product) => {
    if (product.categoryId === parseInt(props.match.params.id)) {
      categoryProductList.push(product);
    }
    return categoryProductList;
  });

  function goBack() {
    props.history.push("/content/categories");
  }

  console.log(props);

  return (
    <Container>
      <Row style={{width:"90%"}}>
        {categoryProductList.map((product, idx) => {
          return <Product key={idx} {...product} suppliers={props.suppliers} />;
        })}
      </Row>
      <div className="d-grid gap-2 mt-3 mb-5" style={{width:"90%"}}>
        <Button variant="warning" onClick={goBack} className="">
          Go Back
        </Button>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    categories: state.categories,
    suppliers: state.suppliers,
  };
};

export default connect(mapStateToProps,{getProductsFromApi,getSuppliersFromApi})(CategoryProducts);
