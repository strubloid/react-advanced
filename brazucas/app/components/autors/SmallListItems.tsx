import type { AuthorType } from "@/app/data/Authors";

export const SmallAuthorListItems = ({ author }: { author: AuthorType }) => {
    // Destructuring the variables from the author object
    const { name, age } = author;

    return (
        <p>
            Name: {name}, Age: {age}
        </p>
    );
};
