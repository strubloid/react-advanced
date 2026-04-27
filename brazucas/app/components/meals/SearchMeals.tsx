import { useEffect, useState } from "react";

// loading the toastify library to show the error messages in a toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styled from "styled-components";
import { useFetchMeals } from "./hooks/useFetchMeals";

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

const MealItem = styled.div<{ 'data-odd': boolean }>`
  padding: 1px;
  background-color: ${(props) => (props['data-odd'] ? "#815959" : "transparent")};
`;

export const SearchMeals = () => {
    const [query, setQuery] = useState("");
    const { meals, fetchMeals } = useFetchMeals();

    useEffect (() => {
        fetchMeals(query);
    }, [query, fetchMeals]);

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
                    {meals && meals.map((meal, index) => (
                        <MealItem data-odd={index % 2 !== 0} key={meal.idMeal}>
                            <p>{meal.strMeal}</p>
                        </MealItem>
                    ))}
                </MealContainer>
            </div>
        </Container>
    );
}
