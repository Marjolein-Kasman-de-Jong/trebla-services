// Components
import Paragraph from "../paragraph/Paragraph";

// Styles
import "./legal-content.css";

export default function LegalContent({ legalContent }) {
    return (
        <div className="legal-content-container">
            {
                legalContent.map((item, index) => {
                    const { title, content } = item;

                    return (
                        <article key={index}>
                            {
                                title &&
                                <h3 className="heading-3">
                                    {title}
                                </h3>
                            }
                            <Paragraph>
                                {content}
                            </Paragraph>
                        </article>
                    )
                })
            }
        </div>
    )
}