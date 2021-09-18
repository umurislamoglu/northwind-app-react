import React,{useState , useEffect} from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { connect} from "react-redux";
import { editCategoryFromApi } from "../../../../actions/categoryAction";
import { getCategoriesFromApi } from "../../../../actions/categoryAction";




const EditAdminCategory = (props) => {




  const {   getCategoriesFromApi ,editCategoryFromApi  } = props
  useEffect(() => {
    getCategoriesFromApi();
  }, [getCategoriesFromApi])



const category = props.categories.find(
  (category) => category.id === parseInt(props.match.params.id)
)
let categoryName = category.name
let categoryDesc = category.description
let categoryId= category.id

const [newName,setNewName] = useState(categoryName)
const [newDesc,setNewDesc] = useState(categoryDesc)


let updateCategory = {
  id:categoryId,
  name:newName,
  description:newDesc
}
console.log(category)
console.log(updateCategory)
const onCategoryUpdate =(e) => {
  e.preventDefault();
 
    editCategoryFromApi(updateCategory)
    console.log("update yapıldı")
    
  
  props.history.push("/admin/categories/page/1")
}

    return (
      <div>
        {category && (
           <Container>
           <Card>
             <Card.Header className="fw-normal fs-3">Create Category</Card.Header>
             <Card.Body>
               <Form onSubmit={onCategoryUpdate}>
                 <Form.Group className="mb-3" >
                   <Form.Label>Category Name</Form.Label>
                   <Form.Control name="name" type="text" placeholder="Enter category name" value={newName} onChange={(e)=>{setNewName(e.target.value)}}   />
                   
                 </Form.Group>
     
                 <Form.Group className="mb-3" >
                   <Form.Label>Category Description</Form.Label>
                   <Form.Control name="description" type="text" placeholder="Enter category description" value={newDesc} onChange={(e)=>{setNewDesc(e.target.value)}}   />
                 </Form.Group>
              
                 <Button variant="primary" type="submit">
                   Update Category
                 </Button>
               </Form>
             </Card.Body>
           </Card>
         </Container>
        )}
      </div>
       
    )
}

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};





export default connect(mapStateToProps,{getCategoriesFromApi,editCategoryFromApi})(EditAdminCategory);