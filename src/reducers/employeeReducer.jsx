const employees = []

const employeeReducer = (state =employees,actions ) => {

    switch(actions.type){
        
        case "SET_EMPLOYEES":
            return actions.employees;




        default: 
            return state;
    }
}

export default employeeReducer;