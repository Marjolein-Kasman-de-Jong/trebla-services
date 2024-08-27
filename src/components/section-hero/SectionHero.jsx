// Components
import Paragraph from "../paragraph/Paragraph";

// Helpers
import firstLetterToUpperCase from "../../helpers/firstLetterToUpperCase";

// Constants
import sectionHeroContent from "../../constants/sectionHeroContent";

// Styles
import "./section-hero.css";

export default function SectionHero({ section }) {
    const content = sectionHeroContent[section]

    return (
        <section className="hero">
            <article>
                <header>
                    <h2 className="heading-2 section-hero-title">
                        {
                            firstLetterToUpperCase(content.title)
                        }
                    </h2>
                </header>
                <div className="content-wrapper">
                    <div className="image-wrapper">
                        <img 
                            src={content.image} 
                            alt={content.title} 
                        />
                    </div>
                    {
                        content.textContent.map((paragraph, index) => {
                            return (
                                <Paragraph key={index}>
                                    {paragraph}
                                </Paragraph>
                            )
                        })
                    }
                </div>
            </article>
        </section>
    )
}