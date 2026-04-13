export const NormalList = ({ items, sourceName, ItemComponent }) => {
    return (
        <>
            {items.map((item, index) => {
                const itemProps = { [sourceName]: item };
                return <ItemComponent key={item.id} {...itemProps} />;
            })}
        </>
    );
};
