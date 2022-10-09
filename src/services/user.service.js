import {axiosServices} from "./axios.services";
import {urls} from "../configs";

const userService = {
    getAll:()=>axiosServices.get(urls.users),
    getById:(id)=>axiosServices.get(`${urls.users}/${id}`)
}

export {userService}