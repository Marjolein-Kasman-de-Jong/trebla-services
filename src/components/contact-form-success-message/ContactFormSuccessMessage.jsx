// Images
import { FaCheckCircle } from "react-icons/fa";

// Styles
import "./contact-form-success-message.css";

export default function ContactFormSuccessMessage() {
    return (
        <div className="contact-form-success-message">
            <FaCheckCircle className="checkmark" />
            <p className="paragraph-1 success">
                Uw bericht is succesvol verzonden naar Trebla Services.
            </p>
        </div>
    )
}