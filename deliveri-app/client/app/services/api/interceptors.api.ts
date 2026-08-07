import { API_URL } from "@/config/api.config";
import axios from "axios";
import { getAccessToken } from "./helper.api";

const instance = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type' : 'application/json'
    }
})

instance.interceptors.request.use(async (config) => {
    const accesToken = await getAccessToken()

    if(config.headers && accesToken ) 
        config.headers.Authorization = `Bearer ${accesToken}`
    
    return config
})

