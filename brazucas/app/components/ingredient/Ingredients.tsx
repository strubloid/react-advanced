import { JSX, useCallback, useMemo, useState } from "react";
import { nanoid } from "nanoid";
import styled from "styled-components";
import IngredientsList from "./IngredientsList";
import IngredientsInfoHelper from "./IngredientsInfoHelper";
import AddIngredient from "./AddIngredient";

const StyledContainer = styled.div`
  margin-top: 2rem;
  max-width: 20rem;
  margin-left: auto;
  margin-right: auto;

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  > div > h2 {
  }
`;

const StyledHeading2 = styled.h2`
  margin-bottom: 1rem;
  font-weight: 600;
`;

const StyledSpaceY4 = styled.div`
  margin-top: 1rem;

  > * + * {
    margin-top: 1rem;
  }
`;
type IngredientsProps = {
    id: string;
    name: string;
}
const initialIngredients: IngredientsProps[] = [
    {
        id: nanoid(),
        name: "500g Chicken Breasts",
    },
    {
        id: nanoid(),
        name: "300 ml milk",
    },
    {
        id: nanoid(),
        name: "1 tbsp salt",
    },
];

const Ingredients = ({ IngredientsInfoHelper } : { IngredientsInfoHelper: JSX.Element}) => {
    console.log("Ingredient rendered");

    // const [ingredient, setIngredient] = useState("");

    const [ingredientCollection, setIngredientsCollection] = useState<IngredientsProps[]>(initialIngredients);

    const addIngredient = (ingredient: string) => {
        setIngredientsCollection((ingredients) => [
            ...ingredients,
            {
                name: ingredient,
                id: nanoid(),
            },
        ]);
    };

    // we will change the delete function to use a hook
    // const deleteIngredient = (id: string) => {
    //     setIngredientsCollection((ingredients) => ingredients.filter((ing) => ing.id !== id));
    // };

    /**
     * Just by usin the useCallback we are able to
     * Ingredient rendered
     * Ingredients.tsx:80 createIngredientsHeaderText called
     * IngredientsInfoHelper.tsx:13 IngredientsInfoHelper rendered
     *
     * () does not load the IngredientsList
     *
     * AddIngredient.tsx:36 AddIngredient rendered
     **/
    const deleteIngredient = useCallback((id: string) => {
        setIngredientsCollection((ingredients) => ingredients.filter((ing) => ing.id !== id));
    }, []);

    const IngredientsHeaderText = useMemo(() => {
        console.log("createIngredientsHeaderText called");
        return <StyledHeading2>Ingredients ({ingredientCollection.length})</StyledHeading2>;
    }, [ingredientCollection.length]);

    return (
        <StyledContainer>
            <div>
                {IngredientsHeaderText}
                {IngredientsInfoHelper}
            </div>

            <StyledSpaceY4>
                <IngredientsList
                    ingredients={ingredientCollection}
                    deleteIngredient={deleteIngredient}
                />

                <AddIngredient
                    addIngredient={addIngredient}
                />
            </StyledSpaceY4>
        </StyledContainer>
    );
};

export default Ingredients;
