export const IDLE = "IDLE";
export const LOADING = "LOADING";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

// This is the array of the default API status, we can use it to create a type for the API status
export const DefaultAPIStatus = [IDLE, LOADING, SUCCESS, ERROR] as const;

// This is the type for these status
export type APIStatysType = typeof DefaultAPIStatus[number];

// This is the type for the API status, we can use it to create a type for the API status
export const ApiStatus = {
    IDLE,
    LOADING,
    SUCCESS,
    ERROR,
} as const;
