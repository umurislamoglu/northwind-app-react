import axios from "axios"

export const setEmployees =(employees) => ({
    type: "SET_EMPLOYEES",
    employees

})

export const getEmployeesFromApi = () => {
debugger
    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: 'https://northwind.now.sh/api/employee',
        }).then(function (response) {
            debugger;
            const employees = []
            response.data.forEach((employee) => { employees.push(employee)})
            
            dispatch(setEmployees(employees));

        }).catch(function (error) {
            console.error(error);
        });

    }





}