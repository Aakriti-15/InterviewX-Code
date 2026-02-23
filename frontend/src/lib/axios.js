import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "http://localhost:3000/api",
    withCredentials:true, // by adding this field browser will send cookies with every request to server automatically on every single request
});


export default axiosInstance;