const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
const doubleSpaceRegex = /\s{2,}/;
const doubleSymbolRegex = /[^\w\s]{2,}/;

function validateForm(input) {
    const [name, value] = input;

    // Validate from_name input
    if (name === "from_name") {
        let valid = false;

        if (
            value.length >= 2 &&
            value.length <= 50 &&
            nameRegex.test(value) &&
            !doubleSpaceRegex.test(value) &&
            !doubleSymbolRegex.test(value)
        ) {
            valid = true;
        }

        return valid;
    }

    // Validate reply_to input
    if (name === "reply_to") {
        let valid = false;

        if (
            true
        ) {
            valid = true;
        }

        return valid;
    }

    // Validate message input
    if (name === "message") {
        let valid = false;

        if (
            true
        ) {
            valid = true;
        }

        return valid;
    }
}

export default validateForm;