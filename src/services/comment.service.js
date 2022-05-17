import {axiosService} from "./axios.service";
import {urls} from "../constants";

const commentService =
    {
        getAll: () => axiosService.get(urls.comment),
        getCommentByID:(id)=>axiosService.get(`${urls.comment}/${id}`),
        deleteCommentsByID: (id)=>axiosService.delete(`${urls.comment}/${id}`)
    }

export {
    commentService
}