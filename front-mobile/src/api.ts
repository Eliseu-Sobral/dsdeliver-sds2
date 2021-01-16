import axios from "axios";

const API_URL = 'https://meu-primeiro-app-eliseu.herokuapp.com'

export function fetchOrders(){

    return axios(`${API_URL}/orders`);


}

export function confirmDelivery (OrderId: number) {
    return axios.put(`${API_URL}/orders/${OrderId}/delivered`);
}