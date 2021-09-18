import React , {useState, useEffect} from "react";
import { connect } from "react-redux";
import Row from "react-bootstrap/Row";
import Order from "../Orders/Order";
import { OrderPagination } from './../../../../pagination/OrderPagination';
import { getOrdersFromApi } from "../../../../actions/orderAction";
import { getProductsFromApi } from "../../../../actions/productAction";

const AllOrders = (props) => {
  
  const { getOrdersFromApi , getProductsFromApi } = props
  useEffect(() => {
    getOrdersFromApi();
    getProductsFromApi();
  }, [getOrdersFromApi,getProductsFromApi])



  const [currentPage,setCurrentPage] = useState(1)
  const [postPerPage] = useState(50)
  
  const indexOfLastPost = currentPage*postPerPage;
  const indexOfFirstPost = indexOfLastPost-postPerPage;
  const currentOrders = props.orders.slice(indexOfFirstPost,indexOfLastPost)
  const paginate = (pageNumber) => setCurrentPage(pageNumber)



  return (
    <div>
      <Row>
        {currentOrders.map((order, idx) => {
          return <Order key={idx} {...order} products={props.products} />;
        })}
      </Row>
      <div className="d-flex justify-content-center mt-3">
            <OrderPagination postPerPage={postPerPage} totalPosts={props.orders.length} paginate ={paginate}/>
            </div>


    </div>
      
   
   
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    orders: state.orders,
  };
};

export default connect(mapStateToProps,{getOrdersFromApi, getProductsFromApi})(AllOrders);