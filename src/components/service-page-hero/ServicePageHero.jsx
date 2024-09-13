// Components
import Paragraph from "../paragraph/Paragraph";

// Helpers
import firstLetterToUpperCase from "../../helpers/firstLetterToUpperCase";

// Styles
import "./service-page-hero.css";

export default function ServicePageHero({ content }) {
    const { title, image, textContent } = content;

    return (
        <section className="service-page-hero">
            <article>
                {/* Hero title */}
                <header className="service-page-hero-header">
                    <h2 className="heading-2">
                        {
                            firstLetterToUpperCase(title)
                        }
                    </h2>
                </header>
                {/* Hero content */}
                <div className="content-wrapper">
                    {/* --Hero image content */}
                    <div className="image-wrapper">
                        <img
                            src={image}
                            alt={title}
                        />
                    </div>
                    {/* --Hero text content */}
                    <div className="text-wrapper">
                        {
                            textContent.map((paragraph, index) => {
                                return (
                                    <Paragraph key={index}>
                                        {paragraph}
                                    </Paragraph>
                                )
                            })
                        }
                    </div>
                </div>
            </article>
        </section>
    )
}