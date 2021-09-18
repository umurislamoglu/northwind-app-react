import React , {useState , useEffect} from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Product from "../Products/Product";
import { Pagination } from "../../pagination/Pagination";
import { getProductsFromApi , searchProductsMethod } from "../../actions/productAction";
import { getSuppliersFromApi } from "../../actions/supplierAction";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";

const Products = (props) => {

  const { products ,suppliers,  getSuppliersFromApi,getProductsFromApi ,searchProductsMethod  } = props
  useEffect(() => {
    getSuppliersFromApi();
    getProductsFromApi();
  }, [getSuppliersFromApi,getProductsFromApi])
  
  const [currentPage,setCurrentPage] = useState(1)
  const [postPerPage] = useState(9)
  const[keyword,setKeyword] = useState("")

  
  const indexOfLastPost = currentPage*postPerPage;
  const indexOfFirstPost = indexOfLastPost-postPerPage;
  const currentProducts = products.slice(indexOfFirstPost,indexOfLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)

  const onChange =(e) => {
    setKeyword(e.target.value);
    
    
  }

  const onSubmit = (e)=> {
    e.preventDefault();
    if(!keyword){
     getProductsFromApi()
      
      
    }else{
      searchProductsMethod(keyword)
    setKeyword("")
    
      
    }
    
   
}


  return (
    <div>
       <Form className="d-flex" onSubmit = {onSubmit}>
              <FormControl
                type="search"
                placeholder="Search Products"
                className="m-2"
                aria-label="Search"
                value={keyword}
                onChange={onChange}
              />
             
            </Form>
      <Row>
        {currentProducts.map((product, idx) => {
          return <Product key={idx} {...product} suppliers={suppliers} />;
        })}
      </Row>
      <div className="d-flex justify-content-center mt-3">
            <Pagination postPerPage={postPerPage} totalPosts={products.length} paginate ={paginate}/>
            </div>


    </div>
      
   
   
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    suppliers: state.suppliers,
  };
};

export default connect(mapStateToProps, {getProductsFromApi , getSuppliersFromApi , searchProductsMethod})(Products);
