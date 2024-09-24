// Helpers
import firstLetterToUpperCase from "../../helpers/firstLetterToUpperCase";

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