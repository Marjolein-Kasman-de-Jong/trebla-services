import emailjs from 'emailjs-com';

// Components
import Button from "../button/Button";

// Styles
import "./contact-form.css"

export default function ContactForm() {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('Trebla_Services_Tes', 'template_jtim1j9', e.target, 'EezajjiDyM7CFG1Ej')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
    }

    return (
        <form 
            className="contact-form" 
            onSubmit={sendEmail}
        >
            <input
                type="text"
                name="from_name"
                id="from_name"
                placeholder="Naam"
                required
            />
            <input
                type="email"
                name="reply_to"
                id="reply_to"
                placeholder="Email"
                required
            />
            <textarea
                name="message"
                id="message"
                placeholder="Bericht"
                required
            >
            </textarea>
            <Button type="submit" />
        </form>
    )
}