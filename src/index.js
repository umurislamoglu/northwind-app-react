import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/main.scss"
import AppRouter from './routers/AppRouter';
import reportWebVitals from './reportWebVitals';
import ConfigureStore from './store/configureStore';
import { Provider } from 'react-redux';
// import { getProductsFromApi } from './actions/productAction';
// import { getCategoriesFromApi } from './actions/categoryAction';
// import { getOrdersFromApi } from './actions/orderAction';
// import { getSuppliersFromApi } from './actions/supplierAction';

const store = ConfigureStore();

// if(!store.products){store.dispatch(getProductsFromApi())}
// if(!store.categories){store.dispatch(getCategoriesFromApi())}
// if(!store.orders){store.dispatch(getOrdersFromApi())}
// if(!store.suppliers){store.dispatch(getSuppliersFromApi())}

ReactDOM.render(
  <Provider store = {store}>
    <AppRouter />
  </Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
