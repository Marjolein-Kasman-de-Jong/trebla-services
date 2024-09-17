import { nameRegex, doubleSpaceRegex, doubleSymbolRegex, emailRegex, onlySpecialCharsRegex } from "../constants/regex";

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
            emailRegex.test(value)              
        ) {
            valid = true;
        }

        return valid;
    }

    // Validate message input
    if (name === "message") {
        let valid = false;

        if (
            value.length >= 10 &&               
            value.length <= 500 &&              
            !doubleSpaceRegex.test(value) &&    
            !doubleSymbolRegex.test(value) &&   
            !onlySpecialCharsRegex.test(value)  
        ) {
            valid = true;
        }

        return valid;
    }
}

export default validateForm;