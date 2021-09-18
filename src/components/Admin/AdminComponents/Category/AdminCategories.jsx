import React, { useState , useEffect} from "react";
import { connect} from "react-redux";
import Row from "react-bootstrap/Row";
import { CategoryPaginationAdmin } from "../../../../pagination/CategoryPaginationAdmin";
import AdminCategory from "./AdminCategory";
import { getCategoriesFromApi,  } from "../../../../actions/categoryAction";

const AdminCategories = (props) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(10);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentCategories = props.categories.slice(
    indexOfFirstPost,
    indexOfLastPost
  );
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const {categories , getCategoriesFromApi} = props
useEffect(() => {
  getCategoriesFromApi()
}, [categories,getCategoriesFromApi])

  return (
    <div>
      {props.categories && (
        <div>
          <Row>
            {currentCategories.map((category, idx) => {
              return (
                <AdminCategory
                  key={idx}
                  {...category}
                
                />
              );
            })}
          </Row>
          <div className="d-flex justify-content-center mt-3">
            <CategoryPaginationAdmin
              postPerPage={postPerPage}
              totalPosts={props.categories.length}
              paginate={paginate}
            />
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};




export default connect(mapStateToProps,{getCategoriesFromApi})(AdminCategories);
