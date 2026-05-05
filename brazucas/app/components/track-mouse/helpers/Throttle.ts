export function Throttle<T extends (...args: Parameters<T>) => void>(
    func: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timeId: ReturnType<typeof setTimeout>;
    let inThrottle = false;
    let lastTime = 0;

    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            lastTime = Date.now();
            inThrottle = true;
            func(...args);
        } else {
            clearTimeout(timeId);
            timeId = setTimeout(() => {
                if (Date.now() - lastTime >= delay) {
                    func(...args);
                    lastTime = Date.now();
                }
            }, Math.max(delay - (Date.now() - lastTime), 0));
        }
    };
}
