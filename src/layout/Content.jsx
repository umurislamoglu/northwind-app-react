import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Products from '../components/Products/Products';
import ProductDetails from '../components/Products/ProductDetails';
import Suppliers from "../components/Suppliers/Suppliers"
import SupplierDetails from "../components/Suppliers/SupplierDetails"
import Employees from "../components/Employees/Employees"
import EmployeeDetails from './../components/Employees/EmployeeDetails';
import Categories from './../components/Categoeies/Categories';
import CategoryProducts from './../components/Categoeies/CategoryProducts';



const Content = () => {
    return (
        <div>
            
    <BrowserRouter>
         
         <Switch>
             
             <Route exact path = "/content/products" component= {Products}/>
             <Route path = "/content/products/page/:page" component= {Products}/>
             
             <Route exact path = "/content/products/:id" component= {ProductDetails}/>
             <Route exact path = "/content/suppliers" component= {Suppliers}/>
             <Route path = "/content/suppliers/page/:page" component= {Suppliers}/>
             <Route exact path = "/content/suppliers/:id" component= {SupplierDetails}/>
             <Route exact path = "/content/categories" component= {Categories}/>
             <Route exact path = "/content/categories/:id" component= {CategoryProducts}/>
             <Route exact path = "/content/employees" component= {Employees}/>
             <Route exact path = "/content/employees/:id" component= {EmployeeDetails}/>

         </Switch>
    </BrowserRouter>

        </div>
    )
}

export default Content
