import { useState, useEffect } from "react";
import DOMPurify from "dompurify";
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

    const [sanitizationError, setSanitizationError] = useState({
        from_name: "",
        reply_to: "",
        message: ""
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

        // Escape HTML
        let sanitizedValue = DOMPurify.sanitize(value, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });

        // Check input for dangerous scripts
        if (/script|onerror|onload/i.test(value)) {
            setSanitizationError(prevState => ({
                ...prevState,
                [name]: "Malicious content detected."
            }));
        } else {
            setSanitizationError(prevState => ({
                ...prevState,
                [name]: ""
            }));
        }

        setFormState({
            ...formState,
            [name]: sanitizedValue
        })
    }

    // Send email
    const sendEmail = (e) => {
        e.preventDefault();

        // Get data to send to emailJS from formState
        const templateParams = {
            from_name: formState.from_name,
            reply_to: formState.reply_to,
            message: formState.message,
        };

        !sanitizationError &&
            emailjs.send('Trebla_Services_Tes', 'template_jtim1j9', templateParams, 'EezajjiDyM7CFG1Ej')
                .then((result) => {
                    console.log(result.text);
                }, (error) => {
                    console.log(error.text);
                })
    }

    console.log(formIsValid);       // For debugging purposes
    console.log(sanitizationError)

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
            {
                sanitizationError.from_name &&
                    <p className="error">
                        {sanitizationError.from_name}
                    </p>
            }
            <input
                type="email"
                name="reply_to"
                id="reply_to"
                placeholder="Email"
                required
                onChange={handleInputChange}
            />
            {
                sanitizationError.reply_to &&
                    <p className="error">
                        {sanitizationError.reply_to}
                    </p>
            }
            <textarea
                name="message"
                id="message"
                placeholder="Bericht"
                required
                onChange={handleInputChange}
            >
            </textarea>
            {
                sanitizationError.message &&
                    <p className="error">
                        {sanitizationError.message}
                    </p>
            }
            <Button
                type="submit"
                isDisabled={isDisabled}
            />
        </form>
    )
}