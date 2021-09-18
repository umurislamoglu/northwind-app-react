import axios from "axios"

export const setProducts =(products) => ({
    type: "SET_PRODUCTS",
    products

})

export const getProductsFromApi = () => {

    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: 'https://northwind.now.sh/api/products',
        }).then(function (response) {
            
            const products = []
            response.data.forEach((product) => { products.push(product)})
            
            dispatch(setProducts(products));

        }).catch(function (error) {
            console.error(error);
        });

    }





}
export const searchProducts =(products) => ({
    type: "SEARCH_PRODUCTS",
    products

})

export const searchProductsMethod = (keyword) => {

    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: 'https://northwind.now.sh/api/products',
        }).then(function (response) {
            
            const products = []
            response.data.filter((product) => product.name.toLowerCase().includes(keyword.toLowerCase())).map(filteredName => products.push(filteredName))
            
            dispatch(searchProducts(products));

        }).catch(function (error) {
            console.error(error);
        });

    }





}


export const addProduct = (newProduct) => ({
    type: "ADD_PRODUCT",
    newProduct
 
 })

export const addProductToApi = (newProduct) => {
    return (dispatch) => {
        return axios.post('https://northwind.now.sh/api/products',newProduct)
            .then( 
                dispatch(addProduct(newProduct))
               
            
            )

    }



}


export const removeProduct = (id) => ({
    type:"REMOVE_PRODUCT", 
    id: id
  })
  
  export const removeProductFromApi = (id) => {
    return (dispatch) => {
      return axios.delete(`https://northwind.now.sh/api/products/${id}`)
      .then( dispatch(removeProduct(id)))
       
    
      
     
  }}


  export const editProduct = (updates) => ({
    type:"EDIT_PRODUCT",
    
    updates
  })
  
  export const editProductFromApi = (updates) => {
    return(dispatch) => {
      return axios.put('https://northwind.now.sh/api/products',updates).then(
        dispatch(editProduct(updates))
      )
    }
  }
  
