import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from '../layout/Header';
import Home from "../components/Home"
import Dashboard from '../layout/Dashboard';
import AdminPanel from './../components/Admin/AdminPanel';
import ProfilePage from '../layout/ProfilePage';
import Container from "react-bootstrap/Container";
import CartList from './../components/Cart/CartList';
import Footer from '../layout/Footer';
const AppRouter = () => {
    return (
        
        <BrowserRouter>
        <div className="d-flex flex-column align-items-between">
        <Header/>
        <Container className="min-vh-100">
        <Switch>
                <Route exact path = "/" component= {Home}/>
                <Route  path = "/content" component= {Dashboard}/>
                <Route  path = "/admin" component= {AdminPanel}/>
                <Route  path = "/profile" component= {ProfilePage}/>
                <Route  path = "/cart" component= {CartList}/>
               

            </Switch>
            
        </Container>
        <Footer />
        </div>
      
        </BrowserRouter>
    )
}

export default AppRouter
