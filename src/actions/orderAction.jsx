import axios from "axios"

export const setOrders =(orders) => ({
    type: "SET_ORDERS",
    orders

})

export const getOrdersFromApi = () => {

    return (dispatch) => {
        return axios.request({
            method: 'GET',
            url: 'https://northwind.now.sh/api/orders',
        }).then(function (response) {
            
            const orders = []
            response.data.forEach((order) => { orders.push(order)})
            
            dispatch(setOrders(orders));

        }).catch(function (error) {
            console.error(error);
        });

    }





}