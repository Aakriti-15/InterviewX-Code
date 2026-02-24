import axios from 'axios';


const axiosInstance = axios.create({
    baseURL: "https://interviewx-code-backend.onrender.com/api",
    withCredentials:true,
});

axiosInstance.interceptors.request.use(async (config) => {
  try {
    const token = await window.Clerk?.session?.getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  } catch (error) {
    console.error("Error getting Clerk token", error);
  }
  return config;
});


export default axiosInstance;