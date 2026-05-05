import { useEffect, useState } from "react";

import styled from "styled-components";

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledInputContainer = styled.div``;

const StyledInput = styled.input`
  width: 100%;
`;

const StyledText = styled.div``;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 0.75rem;
`;

const StyledButton = styled.button`
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

type ShoppingListRowProps = {
    item: {
        id: string;
        name: string;
    };
    index: number;
    updateItem: (payload: { index: number; item: { id: string; name: string } }) => void;
    deleteItem: (payload: { index: number }) => void;
};

const useEditShoppingItem = (props: ShoppingListRowProps) => {
    const { item, updateItem, index } = props;
    const [name, setName] = useState(item.name);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        setName(props.item.name);
    }, [props.item]);

    const onSaveItem = () => {
        updateItem({
            index,
            item: {
                ...item,
                name,
            },
        });
        setIsEditing(false);
    };
    const onEditItem = () => {
        setIsEditing(true);
    };
    const cancelEdit = () => {
        setIsEditing(false);
        setName(props.item.name);
    };
    return {
        name,
        isEditing,
        cancelEdit,
        setName,
        onSaveItem,
        onEditItem,
    };
};
const ShoppingListRow = (props: ShoppingListRowProps) => {
    const { item, deleteItem, index } = props;
    const { name, isEditing, cancelEdit, setName, onSaveItem, onEditItem } =
    useEditShoppingItem(props);

    return (
        <StyledContainer>
            <StyledInputContainer>
                {isEditing ? (
                    <StyledInput
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                ) : (
                    <StyledText>{item.name}</StyledText>
                )}
            </StyledInputContainer>
            <StyledButtonContainer>
                {isEditing ? (
                    <>
                        <StyledButton onClick={onSaveItem}>Save</StyledButton>
                        <StyledButton onClick={cancelEdit}>Cancel</StyledButton>
                    </>
                ) : (
                    <>
                        <StyledButton onClick={onEditItem}>Edit</StyledButton>
                        <StyledButton onClick={() => deleteItem({ index })}>
              Delete
                        </StyledButton>
                    </>
                )}
            </StyledButtonContainer>
        </StyledContainer>
    );
};
export default ShoppingListRow;
