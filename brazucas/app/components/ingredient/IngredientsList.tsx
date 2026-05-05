import styled from "styled-components";
import { memo } from "react";

const StyledContainer = styled.div`
  text-align: left;
`;

const StyledList = styled.ul`
  border-color: #d1d5db; /* Replace with your desired color */
  border-width: 0;
  border-style: solid;
  border-top-width: 1px; /* Add this line for the first item */
`;

const StyledListItem = styled.li`
  padding-top: 0.75rem; /* Adjust as needed */
  padding-bottom: 0.75rem; /* Adjust as needed */
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledButton = styled.button`
  cursor: pointer;
`;

type IngredientsListProps = {
    ingredients: {
        id: string;
        name: string;
    }[];
    deleteIngredient: (id: string) => void;
};

const IngredientsList = (props: IngredientsListProps) => {
    console.log("IngredientsList rendered");
    const { ingredients, deleteIngredient } = props;
    return (
        <StyledContainer>
            <StyledList>
                {ingredients.map((ingredient) => (
                    <StyledListItem key={ingredient.id}>
                        <span>{ingredient.name}</span>
                        <StyledButton onClick={() => deleteIngredient(ingredient.id)}>
              X
                        </StyledButton>
                    </StyledListItem>
                ))}
            </StyledList>
        </StyledContainer>
    );
};

type AreIngredientsEqual = (
    prevProps: IngredientsListProps,
    nextProps: IngredientsListProps
) => boolean;

/**
 * This will check if ingredients changed or nor before we try to re-render a component.
 * @param prevProps previous props of the component
 * @param nextProps next props of the component
 * @returns boolean indicating whether the ingredients are equal or not
 */
const areIngredientsEqual: AreIngredientsEqual = (prevProps, nextProps) => {
    return prevProps.ingredients === nextProps.ingredients;
}

export default memo(IngredientsList);

// now memo will be checking if the ingredients array reference changed or not.
// export default memo(IngredientsList, areIngredientsEqual);

// export default IngredientsList;
// Ingredient rendered
// Ingredients.tsx:75 createIngredientsHeaderText called
// IngredientsInfoHelper.tsx:13 IngredientsInfoHelper rendered
// IngredientsList.tsx:36 IngredientsList rendered
// AddIngredient.tsx:36 AddIngredient rendered

// Ingredient rendered
// Ingredients.tsx:75 createIngredientsHeaderText called
// IngredientsInfoHelper.tsx:13 IngredientsInfoHelper rendered
// IngredientsList.tsx:36 IngredientsList rendered  **** after memo, still existed
// AddIngredient.tsx:36 AddIngredient rendered

// after the areIndredientsEqual Function you can see the ingredients component isnt re-rendered.
// Ingredient rendered
// Ingredients.tsx:75 createIngredientsHeaderText called
// IngredientsInfoHelper.tsx:13 IngredientsInfoHelper rendered

// AddIngredient.tsx:36 AddIngredient rendered
