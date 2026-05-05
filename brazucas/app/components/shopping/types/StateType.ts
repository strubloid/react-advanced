type ItemsState = {
    id: string;
    name: string;
};

export type State = {
    newShoppingItemName: string;
    items: ItemsState[];
};
