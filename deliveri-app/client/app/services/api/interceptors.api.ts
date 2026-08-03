import { API_URL } from "@/config/api.config";
import axios from "axios";

const instance = axios.create({
    baseURL: API_URL
})