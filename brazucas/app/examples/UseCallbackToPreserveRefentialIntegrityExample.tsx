import { JSX } from "react";
import Ingredients from "../components/ingredient/Ingredients";
import IngredientsInfoHelper from "../components/ingredient/IngredientsInfoHelper";

export const UseCallbackToPreserveRefentialIntegrityExample = (): JSX.Element => {
    return (
        <>
            <Ingredients IngredientsInfoHelper={<IngredientsInfoHelper />} />
        </>
    );
};
