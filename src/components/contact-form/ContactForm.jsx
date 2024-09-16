import { useState, useEffect } from "react";
import emailjs from "emailjs-com";

// Components
import Button from "../button/Button";

// Helpers
import validateForm from "../../helpers/validateForm";

// Styles
import "./contact-form.css";

export default function ContactForm() {
    // Monitor formState
    const [formState, setFormState] = useState({
        from_name: "",
        reply_to: "",
        message: ""
    })

    // Monitor form validity
    const [formIsValid, setFormIsValid] = useState({
        from_name: false,
        reply_to: false,
        message: false
    });

    useEffect(() => {
        Object.entries(formState).forEach(([name, value]) => {
            if (value) {
                const propIsValid = validateForm([name, value]);

                setFormIsValid({
                    ...formIsValid,
                    [name]: propIsValid
                })
            }
        })
    }, [formState])

    // Monitor submit button state
    const [isDisabled, toggleIsDisabled] = useState(true);

    useEffect(() => {
        Object.values(formIsValid).every(value => value === true) && toggleIsDisabled(false);
    }, [formIsValid])

    // Handle input change
    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormState({
            ...formState,
            [name]: value
        })
    }

    // Send email
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('Trebla_Services_Tes', 'template_jtim1j9', e.target, 'EezajjiDyM7CFG1Ej')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
    }

    console.log(formIsValid);       // For debugging purposes

    return (
        <form
            className="contact-form"
            onSubmit={sendEmail}
        >
            <input
                type="text"
                name="from_name"
                id="from_name"
                placeholder="Naam"
                required
                onChange={handleInputChange}
            />
            <input
                type="email"
                name="reply_to"
                id="reply_to"
                placeholder="Email"
                required
                onChange={handleInputChange}
            />
            <textarea
                name="message"
                id="message"
                placeholder="Bericht"
                required
                onChange={handleInputChange}
            >
            </textarea>
            <Button type="submit" isDisabled={isDisabled} />
        </form>
    )
}