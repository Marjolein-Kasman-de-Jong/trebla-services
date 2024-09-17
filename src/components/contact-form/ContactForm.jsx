import { useState, useEffect } from "react";

// Components
import Button from "../button/Button";

// Helpers
import handleInputChange from "../../helpers/handleInputChange";
import sendEmail from "../../helpers/sendEmail";
import setSubmitButtonState from "../../helpers/setSubmitButtonState";
import setFormValidationState from "../../helpers/setFormValidationState";

// Constants
import validationErrorMessages from "../../constants/validationErrorMessages";

// Styles
import "./contact-form.css";

export default function ContactForm() {
    // Monitor form state
    const [formState, setFormState] = useState({
        from_name: "",
        reply_to: "",
        message: ""
    })

    // Form validation state
    const [formIsValid, toggleFormIsValid] = useState({
        from_name: false,
        reply_to: false,
        message: false
    })

    const [validationError, setValidationError] = useState({
        from_name: "",
        reply_to: "",
        message: ""
    })

    useEffect(() => {
        setFormValidationState(formState, formIsValid, toggleFormIsValid, validationError, setValidationError, validationErrorMessages);
    }, [formState])

    // Sanitization error state    
    const [sanitizationError, setSanitizationError] = useState({
        from_name: "",
        reply_to: "",
        message: ""
    })

    // Submit button state
    const [isDisabled, toggleIsDisabled] = useState(true);

    useEffect(() => {
        setSubmitButtonState(formIsValid, toggleIsDisabled);
    }, [formIsValid])

    return (
        <form
            className="contact-form"
            onSubmit={(e) => sendEmail(e, formState, sanitizationError)}
        >
            <input
                type="text"
                name="from_name"
                id="from_name"
                placeholder="Naam"
                required
                onChange={(e) => handleInputChange(e, formState, setFormState, setSanitizationError)}
            />
            {
                sanitizationError.from_name ?
                    <p className="paragraph-1 error">
                        {sanitizationError.from_name}
                    </p>
                    :
                    validationError.from_name ?
                        <p className="paragraph-1 error">
                            {validationError.from_name}
                        </p>
                        :
                        null
            }
            <input
                type="email"
                name="reply_to"
                id="reply_to"
                placeholder="Email"
                required
                onChange={(e) => handleInputChange(e, formState, setFormState, setSanitizationError)}
            />
            {
                sanitizationError.reply_to ?
                    <p className="paragraph-1 error">
                        {sanitizationError.reply_to}
                    </p>
                    :
                    validationError.reply_to ?
                        <p className="paragraph-1 error">
                            {validationError.reply_to}
                        </p>
                        :
                        null
            }
            <textarea
                name="message"
                id="message"
                placeholder="Bericht"
                required
                onChange={(e) => handleInputChange(e, formState, setFormState, setSanitizationError)}
            >
            </textarea>
            {
                sanitizationError.message ?
                    <p className="paragraph-1 error">
                        {sanitizationError.message}
                    </p>
                    :
                    validationError.message ?
                        <p className="paragraph-1 error">
                            {validationError.message}
                        </p>
                        :
                        null
            }
            <Button
                type="submit"
                isDisabled={isDisabled}
            />
        </form>
    )
}