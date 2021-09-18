import React,{useState,useEffect} from 'react'
import { connect } from 'react-redux'
import { SupplierPaginationAdmin } from './../../../../pagination/SupplierPaginationAdmin';
import Row from "react-bootstrap/Row";
import AdminSupplier from "./AdminSupplier"
import { getSuppliersFromApi } from '../../../../actions/supplierAction';




const AdminSuppliers = (props) => {

  const {suppliers, getSuppliersFromApi   } = props
  useEffect(() => {
    getSuppliersFromApi();
  }, [suppliers,getSuppliersFromApi])

    const [currentPage,setCurrentPage] = useState(1)
    const [postPerPage] = useState(20)
    
    const indexOfLastPost = currentPage*postPerPage;
    const indexOfFirstPost = indexOfLastPost-postPerPage;
    const currentSuppliers = suppliers.slice(indexOfFirstPost,indexOfLastPost)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)
  
    return (
        <div>
        <Row>
          {currentSuppliers.map((supplier, idx) => {
            return <AdminSupplier key={idx} {...supplier}   />;
          })}
        </Row>
        <div className="d-flex justify-content-center mt-3">
              <SupplierPaginationAdmin postPerPage={postPerPage} totalPosts={suppliers.length} paginate ={paginate}/>
              </div>    
  
  
      </div>
    )
}

const mapStateToProps = (state) => {
    return {
      suppliers: state.suppliers,
     
    };
  };
  
export default connect(mapStateToProps,{getSuppliersFromApi})(AdminSuppliers);
