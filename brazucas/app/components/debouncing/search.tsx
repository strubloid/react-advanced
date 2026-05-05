import { searchMeals } from "@app/api/MealAPI";
import React, { useCallback, useMemo, useState } from "react";
import { debounce } from "./debounce";
import { Meal } from "@/app/types/MealType";

const Search = () => {
    const [query, setQuery] = useState("");
    const [meals, setMeals] = useState<Meal[]>([]);

    // using useMemo to create a debounced version of the search
    // function that will only be created once
    const initSearchApiRequest = useMemo(() => {
        return debounce(async (q : string) => {
            setMeals(await searchMeals(q));
        }, 500);
    }, []);

    const onChangeQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        const q = e.target.value;
        setQuery(q);
        initSearchApiRequest(q);
    };

    return (
        <div>
            <form>
                <label>Search meals</label>
                <input type="text" value={query} onChange={onChangeQuery} />
            </form>
            <ul>
                {meals?.map((meal) => {
                    return <li key={meal.idMeal}>{meal.strMeal}</li>;
                })}
            </ul>
        </div>
    );
};

export default Search;
