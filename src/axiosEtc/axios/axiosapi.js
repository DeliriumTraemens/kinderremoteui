import axios from "axios";
import urls from "@/axiosEtc/urls/urls";

const api=axios.create({
    baseURL: urls.INITIAL_URL,
    timeout: 5000,
})

export default api;
