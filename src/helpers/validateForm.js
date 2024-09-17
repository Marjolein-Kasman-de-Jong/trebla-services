const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ' -]+$/;
const doubleSpaceRegex = /\s{2,}/;
const doubleSymbolRegex = /[^\w\s]{2,}/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateForm(input) {
    const [name, value] = input;

    // Validate from_name input
    if (name === "from_name") {
        let valid = false;

        if (
            value.length >= 2 &&                // Input contains no less than 2 characters
            value.length <= 50 &&               // Input contains no more than 50 characters
            nameRegex.test(value) &&            // Input contains only letters, spaces, hyphens, and apostrophes
            !doubleSpaceRegex.test(value) &&    // Input does not contain double spaces
            !doubleSymbolRegex.test(value)      // Input does not contain double symbols
        ) {
            valid = true;
        }

        return valid;
    }

    // Validate reply_to input
    if (name === "reply_to") {
        let valid = false;

        if (
            emailRegex.test(value)              // Input starts with one or more characters that are not whitespace or @, has exactly one @, has valid domain with at least one dot, has valid TLD
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