// Helpers
import handleInputChange from "../../helpers/handleInputChange";

// Styles
import "./contact-form-input.css";

export default function ContactFormInput({ inputField, formState, setFormState, validationError, sanitizationError, setSanitizationError }) {
    const type = (inputField === "from_name" && "text") || (inputField === "reply_to" && "email") || (inputField === "message" && null);
    const placeholder = (inputField === "from_name" && "Naam") || (inputField === "reply_to" && "Email") || (inputField === "message" && "Bericht");

    const inputFieldProps = {
        type: type,
        name: inputField,
        id: inputField,
        placeholder: placeholder,
        required: true,
        onChange: (e) => handleInputChange(e, formState, setFormState, setSanitizationError)
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
            (sanitizationError[inputField] || validationError[inputField]) && (
                <p className="paragraph-1 error">
                    {sanitizationError[inputField] || validationError[inputField]}
                </p>
            )
        }
    </>
)
}