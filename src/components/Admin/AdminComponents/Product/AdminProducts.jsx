import React,{useState, useEffect} from 'react'
import { connect } from 'react-redux'
import { ProductPaginationAdmin } from './../../../../pagination/ProductPaginationAdmin';
import AdminProduct from "./AdminProduct"
import Row from "react-bootstrap/Row";
import { getProductsFromApi} from "../../../../actions/productAction"

const AdminProducts = (props) => {
   const { products, getProductsFromApi} = props
    
     
   useEffect(() => {
      getProductsFromApi()
    }, [getProductsFromApi , products])

    const [currentPage,setCurrentPage] = useState(1)
    const [postPerPage] = useState(20)
    
    const indexOfLastPost = currentPage*postPerPage;
    const indexOfFirstPost = indexOfLastPost-postPerPage;
    const currentProducts = products.slice(indexOfFirstPost,indexOfLastPost)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

   

    return (
        <div>
        <Row>
          {currentProducts.map((product, idx) => {
            return <AdminProduct key={idx} {...product}   />;
          })}
        </Row>
        <div className="d-flex justify-content-center mt-3">
              <ProductPaginationAdmin postPerPage={postPerPage} totalPosts={products.length} paginate ={paginate}/>
              </div>    
  
  
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
      products: state.products,
     
    };
  };
  
export default connect(mapStateToProps,{getProductsFromApi})(AdminProducts);

