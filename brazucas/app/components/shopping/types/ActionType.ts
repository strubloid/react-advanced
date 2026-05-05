export type ShoppingItem = { id: string; name: string };

export type ShoppingPayload = {
    index: number;
    item: ShoppingItem;
};

export type Action =
  | { type: "UPDATE_NEW_SHOPPING_ITEM_NAME"; payload: string }
  | { type: "ADD_ITEM"; payload: ShoppingItem }
  | { type: "UPDATE_ITEM"; payload: ShoppingPayload }
  | { type: "DELETE_ITEM"; payload: ShoppingPayload };
