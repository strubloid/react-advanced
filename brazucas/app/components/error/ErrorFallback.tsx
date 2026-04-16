type ErrorFallbackProps = {
    error: Error;
};

export const ErrorFallback = ({ error }: ErrorFallbackProps) => {

    return (
        <div>
            <h1>Ops... We&apos;ve found some issues!</h1>
            <p>{error.message}</p>
            <p>Please try again later.</p>
        </div>
    );
}
