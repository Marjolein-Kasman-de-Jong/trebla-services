// Helpers
import handleInputChange from "../../helpers/handleInputChange";

// Styles
import "./contact-form-input.css";

export default function ContactFormInput({ inputField, formState, setFormState, validationError, sanitizationError, setSanitizationError }) {
    const type = (inputField === "from_name" && "text") || (inputField === "reply_to" && "email") || (inputField === "message" && null);
    const placeholder = (inputField === "from_name" && "Naam") || (inputField === "reply_to" && "Email") || (inputField === "message" && "Bericht");

    return (
        <>
            {
                inputField === "message" ?
                    <textarea
                        name={inputField}
                        id={inputField}
                        placeholder={placeholder}
                        required
                        onChange={(e) => handleInputChange(e, formState, setFormState, setSanitizationError)}
                    >
                    </textarea>
                    :
                    <input
                        type={type}
                        name={inputField}
                        id={inputField}
                        placeholder={placeholder}
                        required
                        onChange={(e) => handleInputChange(e, formState, setFormState, setSanitizationError)}
                    />
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