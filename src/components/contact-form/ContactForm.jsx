import { useState, useEffect } from "react";

// Components
import ContactFormInput from "../contact-form-input/ContactFormInput";
import Button from "../button/Button";

// Helpers
import sendEmail from "../../helpers/sendEmail";
import setSubmitButtonState from "../../helpers/setSubmitButtonState";
import setFormValidationState from "../../helpers/setFormValidationState";

// Constants
import validationErrorMessages from "../../constants/validationErrorMessages";

// Styles
import "./contact-form.css";

export default function ContactForm() {
    // Form state
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
            {/* Input fields */}
            {
                Object.keys(formState).map((item) => {
                    return (
                        <ContactFormInput 
                            key={item} 
                            inputField={item} 
                            formState={formState} 
                            setFormState={setFormState} 
                            validationError={validationError} 
                            sanitizationError={sanitizationError} 
                            setSanitizationError={setSanitizationError} 
                        />
                    )
                })
            }
            {/* Submit button */}
            <Button
                type="submit"
                isDisabled={isDisabled}
            />
        </form>
    )
}