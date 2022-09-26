import {axiosService} from "./axios.service";
import {urls} from "../config";

const postService = {
    getPost: (id)=> axiosService.get(`${urls.posts}/?postId=${id}`)
}

export {postService}