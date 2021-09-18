const suppliers = []

const supplierReducer = (state =suppliers,actions ) => {

    switch(actions.type){

        case "SET_SUPPLIERS":
            return actions.suppliers;

            case "SEARCH_SUPPLIERS":
                return actions.suppliers;
            
        case "ADD_SUPPLIER":
            return [
                ...suppliers,
                 actions.newSupplier
            ]
            case "REMOVE_SUPPLIER":
              return suppliers.filter(({ id }) => id !== actions.id)
  
          case "EDIT_SUPPLIER":
              return state.map((supplier)=>{
                if(supplier.id === actions.id) {
                  return{...supplier,
                    ...actions}
                } else {
                  return supplier;
                }
              })
    


        default: 
            return state;
    }
}

export default supplierReducer;