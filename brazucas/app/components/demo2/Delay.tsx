/**
 * This will delay the data by the specified interval and then resolve the
 * promise with the data.
 * @param data - The data to be delayed.
 * @param interval - The interval in milliseconds to delay the data. If not provided, it will default to 0, meaning no delay.
 * @returns A promise that resolves with the data after the specified interval.
 */
const delay = (data: unknown, interval: number | undefined) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(data);
        }, interval);
    });
};

export default delay;
