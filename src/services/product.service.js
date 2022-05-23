import {axiosService} from "./axios.service";
import {urls} from "../constants";

const productService = {
    getAll: () => axiosService.get(urls.products),
    deleteById: (id) => axiosService.delete(`${urls.products}/${id}`),
    getById: (id) => axiosService.get(`${urls.products}/${id}`),
    create: (product) => axiosService.post(urls.products, product),
    updateById: (id, product) => axiosService.put(`${urls.products}/${id}`, product)
}

export {
    productService
}


