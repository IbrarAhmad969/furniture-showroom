import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API_URL,
    headers: {
        "Content-Type": "multipart/form-data",
    },
});

api.interceptors.response.use(
    (res) => res,

    (err) => {
        if (err.response) {
            return Promise.reject(err.response.data?.message || "Server Error")
        }
        return Promise.reject("Network Error");
    }
)

export default api;
