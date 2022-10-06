import {axiosService} from "./axios.services";
import {urls} from "../configs";

const commentsService={
    getAll:()=>axiosService.get(urls.comments)
}

export {commentsService}