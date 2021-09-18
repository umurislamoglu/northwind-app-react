import axios from "axios"

export const setSuppliers =(suppliers) => ({
    type: "SET_SUPPLIERS",
    suppliers

})

export const getSuppliersFromApi = () => {

    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: 'https://northwind.now.sh/api/suppliers',
        }).then(function (response) {
            
            const suppliers = []
            response.data.forEach((supplier) => { suppliers.push(supplier)})
            
            dispatch(setSuppliers(suppliers));

        }).catch(function (error) {
            console.error(error);
        });

    }





}

export const searchSuppliers =(suppliers) => ({
    type: "SEARCH_SUPPLIERS",
    suppliers

})

export const searchSuppliersMethod = (keyword) => {

    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: 'https://northwind.now.sh/api/suppliers',
        }).then(function (response) {
            
            const suppliers = []
            response.data.filter((supplier) => supplier.companyName.toLowerCase().includes(keyword.toLowerCase())).map(filteredName => suppliers.push(filteredName))
            
            dispatch(searchSuppliers(suppliers));

        }).catch(function (error) {
            console.error(error);
        });

    }





}



export const addSupplier = (newSupplier) => ({
    type: "ADD_SUPPLIER",
    newSupplier
 
 })

export const addSupplierToApi = (newSupplier) => {
    return (dispatch) => {
        return axios.post('https://northwind.now.sh/api/suppliers',newSupplier)
            .then( 
                dispatch(addSupplier(newSupplier))
               
            
            )

    }



}

export const removeSupplier = (id) => ({
    type:"REMOVE_SUPPLIER", 
    id: id
  })
  
  export const removeSupplierFromApi = (id) => {
    return (dispatch) => {
      return axios.delete(`https://northwind.now.sh/api/suppliers/${id}`)
      .then( dispatch(removeSupplier(id)))
       
    
      
     
  }}


  export const editSupplier = (updates) => ({
    type:"EDIT_SUPPLIER",
    
    updates
  })
  
  export const editSupplierFromApi = (updates) => {
    return(dispatch) => {
      return axios.put('https://northwind.now.sh/api/suppliers',updates).then(
        dispatch(editSupplier(updates))
      )
    }
  }
  


