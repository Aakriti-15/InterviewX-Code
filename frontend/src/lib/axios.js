import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: "https://interviewx-code-backend.onrender.com/api",
    withCredentials:true,
});


export default axiosInstance;