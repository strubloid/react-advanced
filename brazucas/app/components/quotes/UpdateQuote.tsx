import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postQuote, resetQuotes } from "../../api/QuoteAPI";
import { useState } from "react";
import { toast } from "react-toastify";
import { QuoteFormType } from "../../types/QuoteType";
import styled from "styled-components";

const Container = styled.div`
  padding: 8px;
  max-width: 2xl;
  margin: auto;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 2xl;
  margin-bottom: 4px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 24px;
  max-width: lg;
  margin: auto;
  text-align: left;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label``;

const Input = styled.input``;

const Button = styled.button`
  type: ${(props) => props.type};
  background-color: ${(props) => (props.isLoading ? "#CBD5E0" : "#4299E1")};
  color: ${(props) => (props.isLoading ? "#A0AEC0" : "#fff")};
  padding: 12px 16px;
  border: none;
  cursor: ${(props) => (props.isLoading ? "not-allowed" : "pointer")};
`;

export const UpdateQuote = () => {

    //Loading the query client instance from the context
    const queryClient = useQueryClient();

    // creating a mutation to update a quote
    const createQuoteMutation = useMutation({
        mutationFn: postQuote
    })

    // creating a mutation to reset the quotes
    const resetQuotesMutation = useMutation({
        mutationFn: resetQuotes
    })

    // local state to hold the quote text and author
    const [form, setForm] = useState<QuoteFormType>({
        author: "",
        quote: ""
    })

    // function to handle input changes
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setForm((_form) => ({
            ..._form,
            [event.target.name]: event.target.value
        }))
    }

    // function to handle form submission
    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {

        // preventing the default form submission behavior
        event.preventDefault();

        // destructuring the author and quote from the form state
        const { author, quote } = form;
        // console.log(author, quote)
        if (!author || !quote) {
            alert("Please fill in both the author and quote fields.");
            return;
        }

        await createQuoteMutation.mutateAsync(form, {
            onSuccess: () => {
                setForm({ author: "", quote: "" });
                queryClient.invalidateQueries({ queryKey: ["top_quotes"] });
                toast.success("Quote created successfully!");
            }
        });

    }

    // Reset the quotes to their original state on the server
    const onReset = async (event: React.FormEvent<HTMLFormElement>) => {

        // preventing double click
        event.preventDefault();

        // restarting the quote
        await resetQuotesMutation.mutateAsync(e, {
            onSuccess: () => {
                queryClient.invalidateQueries("top_quotes");
                toast.success("Quote resetted.");
            },
        });
    };

    return (
        <Container>
            <Title>Create quote</Title>
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <Label>Author</Label>
                    <Input
                        type="text"
                        name="author"
                        value={form.author}
                        onChange={onChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Label>Quote</Label>
                    <Input
                        type="text"
                        name="quote"
                        value={form.quote}
                        onChange={onChange}
                    />
                </FormGroup>
                <div style={{ textAlign: "center" }}>
                    <Button
                        type="submit"
                        isLoading={createQuoteMutation.isLoading}
                        disabled={createQuoteMutation.isLoading}
                    >
                        {createQuoteMutation.isLoading
                            ? "Creating quote..."
                            : "Create quote"}
                    </Button>
                    <Button
                        type="button"
                        onClick={onReset}
                        isLoading={resetQuotesMutation.isLoading}
                        disabled={resetQuotesMutation.isLoading}
                    >
                        {resetQuotesMutation.isLoading ? "Resetting..." : "Reset quotes"}
                    </Button>
                </div>
            </Form>
        </Container>
    );
};
