// Helpers
import handleInputChange from "../../helpers/handleInputChange";

// Styles
import "./contact-form-input.css";

export default function ContactFormInput({ inputField, formState, setFormState, validationError, sanitizationError, setSanitizationError }) {
    const inputFieldAttributes = {
        from_name: {
            type: "text",
            placeholder: "Naam"
        },
        reply_to: {
            type: "email",
            placeholder: "Email"
        },
        message: {
            type: null,
            placeholder: "Bericht"
        }
    }

    const { type, placeholder } = inputFieldAttributes[inputField];

    const inputFieldProps = {
        type: type,
        name: inputField,
        id: inputField,
        placeholder: placeholder,
        required: true,
        onChange: (e) => handleInputChange(
            e, 
            formState, 
            setFormState, 
            setSanitizationError
        )
    }

    return (
        <>
            {
                inputField === "message" ?
                    <textarea {...inputFieldProps}></textarea>
                    :
                    <input {...inputFieldProps} />
            }
            {
                (sanitizationError[inputField] || validationError[inputField]) &&
                (
                    <p className="paragraph-1 error">
                        {sanitizationError[inputField] || validationError[inputField]}
                    </p>
                )
            }
        </>
    )
}