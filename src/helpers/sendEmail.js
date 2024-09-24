import emailjs from "emailjs-com";

function sendEmail(e, formState, sanitizationError, toggleMessageIsSentSuccessfully) {
    e.preventDefault();

    // Get data to send to emailJS from formState
    const templateParams = {
        from_name: formState.from_name,
        reply_to: formState.reply_to,
        message: formState.message,
    }

    // Check for sanitization errors
    Object.values(sanitizationError).every(value => value === "") &&
        // Send email
        emailjs.send('service_0ks0pcv', 'template_888buo3', templateParams, 'F1V9mBTGLKd7X6S5Q')
            .then((result) => {
                console.log(result.text);
                result.status === 200 && toggleMessageIsSentSuccessfully(true);
            }, (error) => {
                console.log(error.text);
            })
}

export default sendEmail;