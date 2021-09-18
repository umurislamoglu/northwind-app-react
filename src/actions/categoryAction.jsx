import axios from "axios"

export const setCategories =(categories) => ({
    type: "SET_CATEGORIES",
    categories

})

export const getCategoriesFromApi = () => {

    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: 'https://northwind.now.sh/api/categories',
        }).then(function (response) {
            
            const categories = []
            response.data.forEach((categorie) => { categories.push(categorie)})
            
            dispatch(setCategories(categories));

        }).catch(function (error) {
            console.error(error);
        });

    }
    
    
}


export const addCategory = (newCategory) => ({
    type: "ADD_CATEGORY",
    newCategory
 
 })

export const addCategoryToApi = (newCategory) => {
    return (dispatch) => {
        return axios.post('https://northwind.now.sh/api/categories',newCategory)
            .then( 
                dispatch(addCategory(newCategory))
               
            
            )

    }



}


export const removeCategory = (id) => ({
    type:"REMOVE_CATEGORY", 
    id: id
  })
  
  export const removeCategoryFromApi = (id) => {
    return (dispatch) => {
      return axios.delete(`https://northwind.now.sh/api/categories/${id}`)
      .then( dispatch(removeCategory(id)))
       
    
      
     
  }}


  export const editCategory = (updates) => ({
    type:"EDIT_CATEGORY",
    
    updates
  })
  
  export const editCategoryFromApi = (updates) => {
    return(dispatch) => {
      return axios.put('https://northwind.now.sh/api/categories',updates).then(
        dispatch(editCategory(updates))
      )
    }
  }
  





