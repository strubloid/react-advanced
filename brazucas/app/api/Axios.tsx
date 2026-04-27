import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// defining the default params for the axios instance
const AxiosParams = {
    baseURL : process.env.NEXT_PUBLIC_NODE_ENV === "development" ? process.env.NEXT_PUBLIC_BACKEND_URL : "/",
    timeout: 1000,
};

// console.log("AxiosParams: ", AxiosParams);

// type for the config with the optional abort callback
export type AbortableConfig = AxiosRequestConfig & {
    abort?: (cancel: () => void) => void;
    url?: string;
    body?: unknown;
};

// type for any axios method (get/delete use 2 args, post/put/patch use 3)
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AxiosMethod = (url: string, ...args: any[]) => Promise<AxiosResponse>;

// args: [url, config] for get/delete  OR  [url, body, config] for post/put/patch
type ExecutorArgs = [string, AbortableConfig] | [string, unknown, AbortableConfig];

// type for an error that was aborted by the user
type AbortedError = Error & { aborted?: boolean };

// creating the axios instance with the default params
const instance = axios.create(AxiosParams);

// This will say when something was aborted by the user, so we can handle it in the UI
export const didAbort = ( error: unknown ): error is AbortedError => axios.isCancel(error);

// creating a function that return a cancel token source to be used in the abortableRequest function
const getCancelSource = () => axios.CancelToken.source();

// export const isApiError : boolean = (error = axios.isAxiosError(error));
export const isApiError = (error: unknown): boolean => axios.isAxiosError(error);

// creating a function that allow us to abort a request in case we got another update of the request params
const abortableRequest = (fn: AxiosMethod) => {

    const executor = async (...args: ExecutorArgs) => {

        // getting the config from the args — always the last element
        const originalConfig = args[args.length - 1] as AbortableConfig;

        // destructuring the abort from it
        const { abort, ...config } = originalConfig;

        // checking if the abort is a defined function
        if (typeof abort === "function") {
            const  {cancel, token} = getCancelSource();
            config.cancelToken = token;
            abort(cancel);
        }

        try {

            // args.length > 2 means [url, body, config] (post/put/patch)
            if (args.length > 2) {
                const [url, body] = args;
                return await fn(url, body, config);
            } else {
                const [url] = args;
                return await fn(url, config);
            }

        } catch (error) {
            if(didAbort(error)) {
                error.aborted = true;
            }

            throw error;
        }
    };

    return executor;
}

// defining the API object with the methods we want to use in our app
const API = (axios: AxiosInstance) => {
    return {
        get: (url: string, config = {}) => abortableRequest(axios.get)(url, config),
        delete: (url: string, config = {}) => abortableRequest(axios.delete)(url, config),
        post: (url: string, data: unknown, config = {}) => abortableRequest(axios.post)(url, data, config),
        patch: (url: string, data: unknown, config = {}) => abortableRequest(axios.patch)(url, data, config),
        put: (url: string, data: unknown, config = {}) => abortableRequest(axios.put)(url, data, config),

    }
}

export default API(instance);
