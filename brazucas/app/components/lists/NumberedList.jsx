export const NumberedList = ({ items, sourceName, ItemComponent }) => {
    // This will be responsible to generate an unique key for each item
    const getItemKey = (id, sourceName, componentName, index) => {
        return `${id}-${sourceName}-${componentName}-${index}`;
    };

    // this will be the responsible to build the props for the ItemComponent
    const buildItemProps = (sourceName, item) => {
        return { [sourceName]: item };
    };

    return (
        <>
            {items.map((item, index) => (
                <>
                    <h3>Number: {index + 1}</h3>
                    <ItemComponent key={getItemKey(item.id, sourceName, ItemComponent.name, index)} {...buildItemProps(sourceName, item)} />
                </>
            ))}
        </>
    );
};
