type NormalListProps = {
    items: any[]; // Array of items to be rendered
    sourceName: string; // The name of the source (e.g., "author" or "book")
    ItemComponent: React.ComponentType<any>; // The component used to render each item
};

export const NormalList = ({ items, sourceName, ItemComponent }: NormalListProps) => {
    return (
        <>
            {items.map((item, index) => {
                const itemProps = { [sourceName]: item };
                const itemKey = `${item.id}-${sourceName}-${ItemComponent.name}-${index}`;
                return <ItemComponent key={itemKey} {...itemProps} />;
            })}
        </>
    );
};
