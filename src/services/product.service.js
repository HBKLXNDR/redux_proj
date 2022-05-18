import {axiosService} from "./axios.service";
import {urls} from "../constants";

const productService = {
    getAllL: () => axiosService.get(urls.product),
    deleteById: (id) => axiosService.delete(`${urls.product}/${id}`),
    getProductById: (id) => axiosService.get(`${urls.product}/${id}`),
    create: (product) => axiosService.post(urls.product, product),
    updateProductById: (id, product) => axiosService.put(`${ursl.product}/${id}`, product)
}

export {
    productService
}