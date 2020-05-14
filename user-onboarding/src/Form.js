import React, { useState } from "react";
import * as yup from "yup";

const formSchema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().min(6, "").required(),
    terms: yup.boolean().oneOf([true])
});

const Form = props => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        password: "",
        terms: false
    });

    const handleChange = event => {
        const value = event.target.type === "checkbox"? event.target.checked : event.target.value;
        setFormState({
            ...formState,
            [event.target.name]: value
        });
    }

    const handleSubmit = event => {
        event.preventDefault();
        console.log(formState);
        setFormState({
            name: "",
            email: "",
            password: "",
            terms: false
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
            </label>
            <button>Submit form</button>
        </form>
    );
}

export default Form;