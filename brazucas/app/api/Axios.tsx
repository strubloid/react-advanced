import axios, { AxiosInstance } from "axios";

// defining the default params for the axios instance
const AxiosParams = {
    baseURL : process.env.NEXT_PUBLIC_NODE_ENV === "development" ? process.env.NEXT_PUBLIC_BACKEND_URL : "/",
    timeout: 1000,
};

console.log("AxiosParams: ", AxiosParams);

// creating the axios instance with the default params
const instance = axios.create(AxiosParams);

// defining the API object with the methods we want to use in our app
const API = (axios: AxiosInstance) => {
    return {
        get: (url: string, config = {}) => axios.get(url, config),
        delete: (url: string, config = {}) => axios.delete(url, config),
        post: (url: string, data: unknown, config = {}) => axios.post(url, data, config),
        patch: (url: string, data: unknown, config = {}) => axios.patch(url, data, config),
        put: (url: string, data: unknown, config = {}) => axios.put(url, data, config),

    }
}

export default API(instance);
