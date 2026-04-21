export type WithAsyncResult<ApiResponse> = {
    response: ApiResponse | null;
    error: Error | unknown | null;
};

export async function withAsync<ApiResponse>(f: () => Promise<ApiResponse>): Promise<WithAsyncResult<ApiResponse>> {
    try {

        // checking that we have a function as an argument, if not we throw an error
        if(typeof f !== "function") {
            throw new Error("The argument passed to withAsync must be a function!");
        }

        const response = await f();
        // console.log("Data from withAsync: ", response);

        return {
            response : response,
            error: null
        };

    } catch (error) {
        // console.error("Error in withAsync: ", error);
        return  {
            error,
            response: null,
        }
    }
}
