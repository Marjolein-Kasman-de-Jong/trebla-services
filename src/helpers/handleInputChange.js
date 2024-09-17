import DOMPurify from "dompurify";

// Constants
import sanitizationErrorMessage from "../constants/satitizationErrorMessage";

function handleInputChange(e, formState, setFormState, setSanitizationError) {
    const { name, value } = e.target;

    // Escape HTML
    let sanitizedValue = DOMPurify.sanitize(value, { ALLOWED_TAGS: [], ALLOWED_ATTR: [] });

    // Check input for dangerous scripts
    if (/script|onerror|onload/i.test(value)) {
        setSanitizationError(prevState => ({
            ...prevState,
            [name]: sanitizationErrorMessage
        }));
    } else {
        setSanitizationError(prevState => ({
            ...prevState,
            [name]: ""
        }));
    }
    
    setFormState({
        ...formState,
        [name]: sanitizedValue.trim()
    });
}

export default handleInputChange;