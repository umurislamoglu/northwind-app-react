import React,{useState, useEffect} from "react";
import { connect } from "react-redux";
import ListGroup from "react-bootstrap/ListGroup";
import Container from "react-bootstrap/Container";
import Supplier from "./Supplier";
import { SupplierPagination } from "../../pagination/SupplierPagination";
import { getSuppliersFromApi, searchSuppliersMethod } from "../../actions/supplierAction";
import { getProductsFromApi   } from "../../actions/productAction";

import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";


const Suppliers = (props) => {


  const { getSuppliersFromApi,getProductsFromApi ,searchSuppliersMethod  } = props
  useEffect(() => {
    getSuppliersFromApi();
    getProductsFromApi();
  }, [getSuppliersFromApi,getProductsFromApi])


  const [currentPage,setCurrentPage] = useState(1)
  const [postPerPage] = useState(15)
  const[keyword,setKeyword] = useState("")
  
  const indexOfLastPost = currentPage*postPerPage;
  const indexOfFirstPost = indexOfLastPost-postPerPage;
  const currentSuppliers = props.suppliers.slice(indexOfFirstPost,indexOfLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)




  const onChange =(e) => {
    setKeyword(e.target.value);
    
    
  }


  const onSubmit = (e)=> {
    e.preventDefault();
    if(!keyword){
      getSuppliersFromApi()
      
      
    }else{
      searchSuppliersMethod(keyword)
    setKeyword("")
    
      
    }
    
   
}


  return (
    <Container>
       <Form className="d-flex" onSubmit = {onSubmit}>
              <FormControl
                type="search"
                placeholder="Search Suppliers"
                className="m-2"
                aria-label="Search"
                value={keyword}
                onChange={onChange}
              />
             
            </Form>
      <ListGroup variant="flush">
        {currentSuppliers.map((supplier, idx) => {
          return <Supplier key={idx} {...supplier} />;
        })}
      </ListGroup>
      <div className="d-flex justify-content-center mt-3">
            <SupplierPagination postPerPage={postPerPage} totalPosts={props.suppliers.length} paginate ={paginate}/>
            </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    suppliers: state.suppliers,
  };
};

export default connect(mapStateToProps , { getSuppliersFromApi , getProductsFromApi ,searchSuppliersMethod })(Suppliers);
