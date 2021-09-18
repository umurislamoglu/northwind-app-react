import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import productReducer from "../reducers/productReducer";
import categoryReducer from "../reducers/categoryReducer";
import orderReducer from "../reducers/orderReducer";
import employeeReducer from "../reducers/employeeReducer";
import supplierReducer from "./../reducers/supplierReducer";
import authReducer from "./../reducers/authReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function ConfigureStore() {
  const store = createStore(
    combineReducers({
      products: productReducer,
      categories: categoryReducer,
      employees: employeeReducer,
      orders: orderReducer,
      suppliers: supplierReducer,
      auth: authReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
}
