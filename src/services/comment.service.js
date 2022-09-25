import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const commentService = {
    getAll: () => axiosServices.get(urls.comments),
    createComment: (comment) => axiosServices.post(urls.comments, comment)
}

export {commentService}