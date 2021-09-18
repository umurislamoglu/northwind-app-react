import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AllOrders from "../AdminComponents/Orders/AllOrders"
import CreateProduct from "../AdminComponents/CreateProduct"
import CreateSupplier from "../AdminComponents/CreateSupplier"
import CreateCategory from "../AdminComponents/CreateCategory"
import OrderDetails from "../AdminComponents/Orders/OrderDetails"
import EditAdminCategory from "../AdminComponents/Category/EditAdminCategory";
import AdminCategories from "../AdminComponents/Category/AdminCategories";
import AdminProducts from './../AdminComponents/Product/AdminProducts';
import EditProduct from './../AdminComponents/Product/EditProduct';
import AdminSuppliers from './../AdminComponents/Supplier/AdminSuppliers';
import EditSupplier from './../AdminComponents/Supplier/EditSupplier';

const AdminContent = (props) => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route exact path = "/admin/orders/page/:page" component= {AllOrders}/>
            <Route exact path = "/admin/orders/:id" component= {OrderDetails}/>
            <Route exact path = "/admin/categories/page/:page" component= {AdminCategories}/>
            <Route exact path = "/admin/categories/:id" component= {EditAdminCategory}/>
            <Route exact path = "/admin/products/page/:page" component= {AdminProducts}/>
            <Route exact path = "/admin/products/:id" component= {EditProduct}/>
            <Route exact path = "/admin/suppliers/page/:page" component= {AdminSuppliers}/>
            <Route exact path = "/admin/suppliers/:id" component= {EditSupplier}/>
            <Route exact path = "/admin/product/create" component= {CreateProduct}/>
            <Route exact path = "/admin/supplier/create" component= {CreateSupplier}/>
            <Route exact path = "/admin/category/create" component= {()=><CreateCategory />}/>
           







        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AdminContent;
