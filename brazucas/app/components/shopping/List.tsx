import React, { useReducer } from "react";
import ShoppingListHeader from "./Header";
import ShoppingListRow from "./Row";
import styled from "styled-components";
import { State } from "./types/StateType";
import { Action, ShoppingPayload } from "./types/ActionType";
import { useImmerReducer } from "use-immer";

const StyledContainer = styled.div`
  padding-top: 2rem;
  max-width: 4xl;
  margin: 0 auto;
  text-align: left;
`;

const StyledWrapper = styled.div`
  max-width: xs;
`;

const StyledAddItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 0.5rem;
  max-width: xs;
`;

const StyledLabel = styled.label`
  margin-bottom: 0.5rem;
`;

const StyledInput = styled.input`
  width: 100%;
`;

const StyledButton = styled.button`
  align-self: flex-end;
  padding: 0.5rem 1rem;
  background-color: #86c784;
  color: #1a472a;
`;

//Generate an id for new shopping list items
const getUuid = () => "_" + Math.random().toString(36).substr(2, 9);

type ShoppingItems = {
    newShoppingItemName: string;
    items: {
        id: string;
        name: string;
    }[];
};

//Initial state for the shopping list reducer
const shoppingItems: ShoppingItems = {
    newShoppingItemName: "",
    items: [
        {
            id: "1",
            name: "Sea Salt",
        },
        {
            id: "2",
            name: "Apples",
        },
        {
            id: "3",
            name: "Chicken breasts",
        },
    ],
};

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case "UPDATE_NEW_SHOPPING_ITEM_NAME":

            // we replace this approach!
            // return {
            //     ...state,
            //     newShoppingItemName: action.payload,
            // };

            // we just pass the property and the value to update, and let immer handle the immutability
            state.newShoppingItemName = action.payload;

            break;

        case "ADD_ITEM":

            // we replace this approach!
            // return {
            //     ...state,
            //     newShoppingItemName: "",
            //     items: [...state.items, action.payload],
            // };

            // set the name to empty and pushing the action payload
            state.newShoppingItemName = "";
            state.items.push(action.payload);
            break;

        case "UPDATE_ITEM":

            // we replace this approach to:
            // return {
            //     ...state,
            //     items: state.items.map((item, idx) => {
            //         if (idx === action.payload.index) {
            //             return action.payload.item;
            //         }
            //         return item;
            //     }),
            // };

            // we just splice the item in the index with the new item, and let immer handle the immutability
            state.items.splice(action.payload.index, 1, action.payload.item);
            break;

        case "DELETE_ITEM":
            // return {
            //     ...state,
            //     items: state.items.filter((_, idx) => idx !== action.payload.index),
            // };

            // we just splice the item in the index, and let immer handle the immutability
            state.items.splice(action.payload.index, 1);
            break;
    }

    return state;
};

const ShoppingList = (props : unknown) => {

    const [shoppingList, dispatch] = useImmerReducer(reducer, shoppingItems);

    const addItem = () => {
        if (!shoppingList.newShoppingItemName) return;
        dispatch({
            type: "ADD_ITEM",
            payload: {
                id: getUuid(),
                name: shoppingList.newShoppingItemName,
            },
        });
    };

    const deleteItem = (item: { index: number }) => {
        dispatch({
            type: "DELETE_ITEM",
            payload: item,
        });
    };

    const updateItem = (payload : ShoppingPayload) => {
        dispatch({
            type: "UPDATE_ITEM",
            payload,
        });
    };

    const onChangeShoppingListItemName = (e) => {
        dispatch({
            type: "UPDATE_NEW_SHOPPING_ITEM_NAME",
            payload: e.target.value,
        });
    };

    return (
        <StyledContainer>
            <StyledWrapper>
                <ShoppingListHeader shoppingList={shoppingList.items} />
                <div style={{ marginBottom: "1.5rem" }}>
                    {shoppingList.items.map((item, index) => (
                        <ShoppingListRow
                            key={item.id}
                            item={item}
                            index={index}
                            updateItem={updateItem}
                            deleteItem={deleteItem}
                        />
                    ))}
                </div>
                <StyledAddItemContainer>
                    <StyledLabel htmlFor="shoppingItemField">Add item</StyledLabel>
                    <StyledInput
                        type="text"
                        id="shoppingItemField"
                        value={shoppingList.newShoppingItemName}
                        onChange={onChangeShoppingListItemName}
                    />
                    <StyledButton onClick={addItem}>Add</StyledButton>
                </StyledAddItemContainer>
            </StyledWrapper>
        </StyledContainer>
    );
};
export default ShoppingList;
