// Helpers
import firstLetterToUpperCase from "../../helpers/firstLetterToUpperCase";

// Styles
import "./legal-page-header.css";

export default function LegalPageHeader({ content }) {
    return (
        <header>
            <h2 className="heading-2">
                {
                    firstLetterToUpperCase(content)
                }
            </h2>
        </header>
    )
}