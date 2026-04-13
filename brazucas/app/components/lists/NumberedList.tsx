type NumberedListProps = {
    items: any[]; // Array of items to be rendered
    sourceName: string; // The name of the source (e.g., "author" or "book")
    ItemComponent: React.ComponentType<any>; // The component used to render each item
};

export const NumberedList = ({ items, sourceName, ItemComponent }: NumberedListProps) => {
    // This will be responsible to generate an unique key for each item
    const getItemKey = (id: number, sourceName: string, componentName: string, index: number) => {
        return `${id}-${sourceName}-${componentName}-${index}`;
    };

    // this will be the responsible to build the props for the ItemComponent
    const buildItemProps = (sourceName: string, item: any) => {
        return { [sourceName]: item };
    };

    return (
        <>
            {items.map((item, index) => (
                <div key={getItemKey(item.id, sourceName, ItemComponent.name, index)}>
                    <h3>Number: {index + 1}</h3>
                    <ItemComponent {...buildItemProps(sourceName, item)} />
                </div>
            ))}
        </>
    );
};
