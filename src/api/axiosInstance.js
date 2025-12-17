import axios from "axios";
import Swal from "sweetalert2";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 10000,
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log("API Request:", config.method?.toUpperCase(), config.url);
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("API Response:", response.status, response.config.url);
    return response;
  },
  (error) => {
    const message =
      error.response?.data?.message || error.message || "Something went wrong";
    Swal.fire({
      icon: "error",
      title: "API Error",
      text: message,
      toast: true,
      position: "top-end",
      timer: 5000,
      showConfirmButton: false,
    });
    return Promise.reject(error);
  }
);

export default axiosInstance;
