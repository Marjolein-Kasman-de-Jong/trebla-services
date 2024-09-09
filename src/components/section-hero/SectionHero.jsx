import { useLocation } from 'react-router-dom';

// Components
import Paragraph from "../paragraph/Paragraph";
import Button from '../button/Button';

// Helpers
import firstLetterToUpperCase from "../../helpers/firstLetterToUpperCase";

// Constants
import sectionHeroContent from "../../constants/sectionHeroContent";

// Styles
import "./section-hero.css";

export default function SectionHero({ section }) {
    const location = useLocation();
    const content = sectionHeroContent[section];

    return (
        <section className="hero">
            <article>
                <header className="section-hero-header">
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
                    <div className="text-wrapper">
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
                </div>
                {
                    location.pathname === "/" &&
                        <footer className="section-hero-footer">
                            <Button />
                        </footer>
                }
            </article>
        </section>
    )
}