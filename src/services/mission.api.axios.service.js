import axios from "axios";

let axiosInstance = axios.create({
    baseURL: 'https://api.spacexdata.com/v3/launches/'
})

const getLaunchesAxios = () => {
    return axiosInstance.get()
}

export {getLaunchesAxios}