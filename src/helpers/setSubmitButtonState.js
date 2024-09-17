function setSubmitButtonState(formIsValid, toggleIsDisabled) {
    Object.values(formIsValid).every(value => value === true) && 
        toggleIsDisabled(false);
}

export default setSubmitButtonState;