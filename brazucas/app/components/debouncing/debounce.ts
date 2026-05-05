// Type for a function that can be debounced
export type DebounceInputFunction<Args extends unknown[] = unknown[]> = (...args: Args) => void | Promise<void>;

// Type for the debounced function
export type DebouncedFunction<Args extends unknown[] = unknown[]> = (...args: Args) => void;

// Generic debounce implementation
export function debounce<Args extends unknown[]>(
    fn: DebounceInputFunction<Args>,
    delay: number
): DebouncedFunction<Args> {
    let timerId: ReturnType<typeof setTimeout>;

    return (...args: Args) => {
        if (timerId) {
            clearTimeout(timerId);
        }
        timerId = setTimeout(() => {
            void fn(...args);
        }, delay);
    };
}
