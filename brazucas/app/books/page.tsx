import delay from "../components/demo2/Delay";
import { Books } from "../components/demo2/Books";

export default function Page() {
    // created fresh on every request, same as loader() running on each navigation
    const bookCountPromise = delay(10, 1000) as Promise<number>;
    const authorsPromise = delay("Codelicks", 2000) as Promise<string>;

    return <Books bookCountPromise={bookCountPromise} authorsPromise={authorsPromise} />;
}
