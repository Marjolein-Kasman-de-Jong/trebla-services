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
                            {
                                content.length > 1 ?
                                    <ol>
                                        {
                                            content.map((item, index) => {
                                                return (
                                                    <li
                                                        key={index}
                                                        className="paragraph-1"
                                                    >
                                                        {
                                                            typeof (item) === "object" ?
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
                                        {content}
                                    </Paragraph>
                            }
                        </article>
                    )
                })
            }
        </div>
    )
}