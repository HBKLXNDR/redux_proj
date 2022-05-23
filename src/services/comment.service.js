import {axiosService} from "./axios.service";
import {urls} from "../constants";

const commentService =
    {
        getAll: () => axiosService.get(urls.comments),
        getCommentByID: (id) => axiosService.get(`${urls.comments}/${id}`),
        deleteById: (id) => axiosService.delete(`${urls.comments}/${id}`),
        create: (comment) => axiosService.post(urls.comments, comment),
        updateById: (id, comment) => axiosService.put(`${urls.comments}/${id}`, comment)
    }

export {
    commentService
}