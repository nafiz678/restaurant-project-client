import axios from "axios";


export const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
    // withCredentials: true
})
axios.post("/carts")
const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;