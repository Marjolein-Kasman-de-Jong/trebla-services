import validateForm from "./validateForm";

function setFormValidationState(
    formState, 
    formIsValid, 
    toggleFormIsValid, 
    validationError, 
    setValidationError, 
    validationErrorMessages
) {
    Object.entries(formState).forEach(([name, value]) => {
        if (value) {
            const propIsValid = validateForm([name, value]);

            if (propIsValid) {
                setValidationError({
                    ...validationError,
                    [name]: ""
                })
            } else {
                setValidationError({
                    ...validationError,
                    [name]: validationErrorMessages[name]
                })
            }

            toggleFormIsValid({
                ...formIsValid,
                [name]: propIsValid
            })
        }
    })
}

export default setFormValidationState;