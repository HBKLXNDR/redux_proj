import {axiosService} from "./axios.service";
import {urls} from "../constants";

const productService={
    getAllL:()=>axiosService.get(urls.product)
}

export {
    productService
}