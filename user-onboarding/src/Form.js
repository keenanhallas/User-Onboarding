import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";
import styled from "styled-components";

const formSchema = yup.object().shape({
    name: yup.string().required("You must enter your name."),
    email: yup.string().email("You must enter a valid email address.").required("You must enter an email address."),
    password: yup.string().min(6, "Your password must be at least 6 characters.").required("You must enter a password."),
    terms: yup.boolean().oneOf([true], "You must agree to the terms of service.")
});

const Form = props => {
    const ErrorMessage = styled.p`
        color: red;
    `;

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        terms: false
    });

    const [errorState, setErrorState] = useState({
        name: "",
        email: "",
        password: "",
        terms: ""
    });

    const handleChange = event => {
        validate(event);
        const value = event.target.type === "checkbox"? event.target.checked : event.target.value;
        setFormState({
            ...formState,
            [event.target.name]: value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(formState);
        console.log(errorState);
        setFormState({
            name: "",
            email: "",
            password: "",
            terms: false
        });
    }

    const validate = event => {
        event.persist();
        const value = event.target.type === "checkbox"? event.target.checked : event.target.value;
        yup.reach(formSchema, event.target.name)
            .validate(value)
            .then(valid => {
                setErrorState({
                    ...errorState,
                    [event.target.name]: ""
                });
            })
            .catch(err => {
                setErrorState({
                    ...errorState,
                    [event.target.name]: err.errors[0]
                });
            });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">
                Name:
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                />
                {errorState.name ? <ErrorMessage>{errorState.name}</ErrorMessage> : null}
            </label>
            <label htmlFor="email">
                Email:
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                />
                {errorState.email ? <ErrorMessage>{errorState.email}</ErrorMessage> : null}
            </label>
            <label htmlFor="password">
                Password:
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                />
                {errorState.password ? <ErrorMessage>{errorState.password}</ErrorMessage> : null}
            </label>
            <label htmlFor="terms">
                I agree to the terms of service
                <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formState.terms}
                    onChange={handleChange}
                />
                {errorState.terms ? <ErrorMessage>{errorState.terms}</ErrorMessage> : null}
            </label>
            <button>Submit form</button>
        </form>
    );
}

export default Form;