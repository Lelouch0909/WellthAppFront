import axios from "axios";

export const API_BASE_URL = "http://localhost:8090/wellthapp/v1";


export const api = axios.create({
    baseURL: API_BASE_URL + "/api",
    headers: {
        "Authorization": `${localStorage.getItem("jwt")}`,
        "Content-Type" : "application/json"
    }
});