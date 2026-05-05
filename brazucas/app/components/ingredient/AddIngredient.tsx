import { useState } from "react";
import styled from "styled-components";

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 1.5rem;

  label {
  }

  input {
    width: 100%;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled.button`
  background-color: #1f6feb;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  min-width: 5rem;
`;

type AddIngredientProps = {
    addIngredient: (ingredient: string) => void;
};

const AddIngredient = (props: AddIngredientProps) => {

    console.log("AddIngredient rendered");

    // we get the ingredient state inside of this component
    const [ingredient, setIngredient] = useState("");

    // load the addIngredient from the props
    const { addIngredient } = props;

    return (
        <form className="">
            <StyledFieldset>
                <label>Add ingredient</label>
                <input
                    type="text"
                    value={ingredient}
                    onChange={(e) => setIngredient(e.target.value)}
                />
            </StyledFieldset>
            <StyledButtonContainer>
                <StyledButton
                    onClick={(e) => {
                        e.preventDefault();
                        if (!ingredient) return;
                        addIngredient(ingredient);
                        setIngredient("");
                    }}
                >
          Add
                </StyledButton>
            </StyledButtonContainer>
        </form>
    );
};

export default AddIngredient;
