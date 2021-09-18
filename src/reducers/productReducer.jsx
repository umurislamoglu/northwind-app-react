const products = []

const productReducer = (state =products,actions ) => {

    switch(actions.type){

        case "SET_PRODUCTS":
            return actions.products;

        case "SEARCH_PRODUCTS":
            return actions.products;

        case "ADD_PRODUCT":
            return [
                ...products,
                 actions.newProduct
            ];
        
        case "REMOVE_PRODUCT":
            return state.filter(({id}) =>{
            return id !== actions.id
            })

        case "EDIT_PRODUCT":
            return state.map((product)=>{
              if(product.id === actions.id) {
                return{...product,
                  ...actions}
              } else {
                return product;
              }
            })


        default: 
            return state;
    }
}

export default productReducer;