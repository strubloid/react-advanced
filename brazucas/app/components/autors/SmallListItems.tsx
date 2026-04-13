export const SmallAuthorListItems = ({ author }) => {
    // Destructuring the variables from the author object
    const { name, age } = author;

    return (
        <p>
            Name: {name}, Age: {age}
        </p>
    );
};
