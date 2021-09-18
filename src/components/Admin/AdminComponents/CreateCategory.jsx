import React,{useState} from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { addCategoryToApi  } from "../../../actions/categoryAction";
import { connect } from "react-redux";


const CreateCategory = (props) => {


  const [name,setName] = useState("")
  const [desc,setDesc] = useState("")
 



  const onNameChange = (e) => {
    setName(e.target.value)
  }

  
  const onDescChange = (e) => {
    setDesc(e.target.value)
  }
  let newCategory = {
    name: name , 
    description: desc
  }

  const onCategorySubmit = (e) => {
    e.preventDefault();
    if(name && desc) {
      props.dispatch(addCategoryToApi(newCategory))
      console.log("Kayıt yapıldı")
      setDesc("")
      setName("")
    } 
    else{
      alert("Hata")
      setDesc("")
      setName("")
    }
    
  }



  

  return (
    <Container>
      <Card>
        <Card.Header className="fw-normal fs-3">Create Category</Card.Header>
        <Card.Body>
          <Form onSubmit={onCategorySubmit}>
            <Form.Group className="mb-3" >
              <Form.Label>Category Name</Form.Label>
              <Form.Control name="name" type="text" placeholder="Enter category name" value={name} required onChange={(onNameChange)} />
              
            </Form.Group>

            <Form.Group className="mb-3" >
              <Form.Label>Category Description</Form.Label>
              <Form.Control name="description" type="text" placeholder="Enter category description" value={desc} required onChange={onDescChange} />
            </Form.Group>
         
            <Button variant="primary" type="submit">
              Create Category
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

const mapDispatchToProps = dispatch => ({
  dispatch
})

export default connect( mapDispatchToProps)(CreateCategory);
