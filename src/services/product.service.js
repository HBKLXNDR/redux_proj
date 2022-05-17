import {axiosService} from "./axios.service";
import {urls} from "../constants";

const productService={
    getAllL:()=>axiosService.get(urls.product),
    deleteById: (id) => axiosService.delete(`${urls.product}/${id}`),
    getProductById: (id)=>axiosService.get(`${urls.product}/${id}`)
}

export {
    productService
}