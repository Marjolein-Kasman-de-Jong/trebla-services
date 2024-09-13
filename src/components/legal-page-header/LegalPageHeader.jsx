// Helpers
import firstLetterToUpperCase from "../../helpers/firstLetterToUpperCase";

// Styles
import "./legal-page-header.css";

export default function LegalPageHeader({ content }) {
    return (
        <header className="legal-page-header">
            <h2 className="heading-2 legal-page-title">
                {
                    firstLetterToUpperCase(content)
                }
            </h2>
        </header>
    )
}