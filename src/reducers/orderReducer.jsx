const orders = []

const orderReducer = (state =orders,actions ) => {

    switch(actions.type){

        case "SET_ORDERS":
            return actions.orders;





        default: 
            return state;
    }
}

export default orderReducer;