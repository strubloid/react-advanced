import { didAbort } from "@/app/api/Axios";
import { searchMeals } from "@/app/api/MealAPI";
import { useEffect, useRef, useState } from "react";

// loading the toastify library to show the error messages in a toast
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";

// type for the abort ref that holds the cancel function
type AbortRef = { abort?: () => void };

export const useFetchMeals = (query: string) => {

    // const [meals, setMeals] = useState<Meal[]>([]);
    const [meals, setMeals] = useState([]);
    const abortRef = useRef<AbortRef>({});

    const handleQuoteError = (error: unknown) => {
        if (didAbort(error)){
            // request aborted
            toast.error("Request aborted");
        } else {
            // normal errors
            toast.error("Error fetching meals");
        }
    }

    const fetchMeals = async (query: string) => {

        try {

            // aborting the previous request if it exists
            abortRef?.current?.abort?.();

            // fetching the meals using the searchMeals function
            const meals = await searchMeals(query, {
                abort : (abort: () => void) => (abortRef.current.abort = abort)
            });

            // setting the meals in the state
            setMeals(meals ?? []);

        } catch (error) {
            console.error(error);
            handleQuoteError(error);
        }
    }

    return {
        meals,
        fetchMeals
    };

}

// second component to show the meals search, using the useFetchMeals hook
const Container = styled.div`
  padding-top: 8px;
  max-width: 2xl;
  margin: auto;
`;

const Form = styled.form`
  margin-bottom: 8px;
`;

const Fieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 4px;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 4px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 2xl;
  margin-bottom: 4px;
`;

const MealContainer = styled.div`
  max-height: 60;
  overflow-y: auto;
`;

const MealItem = styled.div`
  padding: 1px;
  background-color: ${(props) => (props.odd ? "#815959" : "transparent")};
`;

export const SearchMeals = () => {
    const [query, setQuery] = useState("");
    const { meals, fetchMeals } = useFetchMeals(query);

    useEffect (() => {
        fetchMeals(query);
    }, [query]);

    return (
        <Container>
            <ToastContainer />
            <Form>
                <Fieldset>
                    <Label htmlFor="meal">Find your lovely meal</Label>
                    <Input
                        type="text"
                        autoComplete="off"
                        value={query}
                        onChange={({ target }) => setQuery(target.value)}
                        id="meal"
                    />
                </Fieldset>
            </Form>
            <div>
                <Title>Meals</Title>
                <MealContainer>
                    {meals.map((meal, index) => (
                        <MealItem odd={index % 2 !== 0} key={meal.idMeal}>
                            <p>{meal.strMeal}</p>
                        </MealItem>
                    ))}
                </MealContainer>
            </div>
        </Container>
    );
}
