export const NormalList = ({ items, sourceName, ItemComponent }) => {
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
