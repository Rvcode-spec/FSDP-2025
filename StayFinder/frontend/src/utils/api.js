import axios  from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL || "https://stayfinder-backend-or9t.onrender.com"
})

export default API;