import React , {useState,useEffect} from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
// import Form from "react-bootstrap/Form";
// import FormControl from "react-bootstrap/FormControl";
import LoginButton from "./LoginButton";
import ProfileNav from "./ProfileNav";
import { connect } from "react-redux";
import { firebase } from "../firebase/firebaseConfig";
// import { getProductsFromApi, searchProductsMethod } from "../actions/productAction";


const Header = (props) => {

  
  const [user,setUser] = useState();
  // const[keyword,setKeyword] = useState("")




  useEffect(()=>{
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
       setUser(user);
      } 
      else{
        setUser("");
      }
    });
  },[user])

  // const onChange =(e) => {
  //   setKeyword(e.target.value);
    
    
  // }


  // const onSubmit = (e)=> {
  //   e.preventDefault();
  //   if(!keyword){
  //     props.dispatch(getProductsFromApi())
      
      
  //   }else{
  //     props.dispatch(searchProductsMethod(keyword))
  //   setKeyword("")
    
      
  //   }
    
   
// }

  

  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <NavLink to="/" className="text-decoration-none text-light">
              Northwind
            </NavLink>
          </Navbar.Brand>

          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light m-2">
              Home
            </NavLink>
            <NavLink
              to="/content/categories"
              className="text-decoration-none text-light m-2"
            >
              Content
            </NavLink>
            <NavLink
              to="/admin"
              className="text-decoration-none text-light m-2"
            >
              Admin
            </NavLink>
            
          </Nav>
         
            {
              user?<ProfileNav user={user} />:<LoginButton/>
            }
            
          
        
          
            
        </Container>
      </Navbar>
    </div>
  );
};

const mapStateToProps = (state) => {
   
  return {
      auth : state.auth
    }
  }

export default connect(mapStateToProps)(Header);
