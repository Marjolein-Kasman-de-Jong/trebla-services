// Components
import Paragraph from "../paragraph/Paragraph";

// Styles
import "./legal-page-content.css";

export default function LegalPageContent({ content }) {
    return (
        <div className="legal-content-container">
            {
                content.map((item, index) => {
                    const { title, textContent } = item;

                    return (
                        <div key={index}>
                            {/* Legal content title */}
                            {
                                title &&
                                <h3 className="heading-3">
                                    {title}
                                </h3>
                            }
                            {/* Legal content text */}
                            {
                                textContent.length > 1 ?
                                    <ol>
                                        {
                                            textContent.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="paragraph-1"
                                                    >
                                                        {
                                                            typeof(item) === "object" ?
                                                                <>
                                                                    {
                                                                        item[0]
                                                                    }
                                                                    <ul>
                                                                        {
                                                                            item[1].map((subitem, index) => {
                                                                                return (
                                                                                    <li key={index}>
                                                                                        {
                                                                                            subitem
                                                                                        }
                                                                                    </li>
                                                                                )
                                                                            })
                                                                        }
                                                                    </ul>
                                                                </>
                                                                :
                                                                item
                                                        }
                                                    </li>
                                                )
                                            })
                                        }
                                    </ol>
                                    :
                                    <Paragraph>
                                        {textContent}
                                    </Paragraph>
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}