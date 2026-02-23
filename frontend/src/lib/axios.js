import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: window.location.hostname !== 'localhost'
    ? "https://interviewx-code-backend.onrender.com/api"
    : "http://localhost:3000/api",
    withCredentials:true,
});


export default axiosInstance;