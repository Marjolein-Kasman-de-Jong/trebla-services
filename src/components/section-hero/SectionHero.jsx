import { useLocation } from 'react-router-dom';

// Components
import Paragraph from "../paragraph/Paragraph";
import Button from '../button/Button';

// Helpers
import firstLetterToUpperCase from "../../helpers/firstLetterToUpperCase";

// Constants
import servicePageData from '../../constants/servicePageData';

// Styles
import "./section-hero.css";

export default function SectionHero({ content }) {
    const location = useLocation();

    const { title, image, textContent } = content;

    return (
        <section className="hero">
            <article>
                <header className="section-hero-header">
                    <h2 className="heading-2 section-hero-title">
                        {
                            firstLetterToUpperCase(title)
                        }
                    </h2>
                </header>
                {
                    (image || textContent) &&
                    <div className="content-wrapper">
                        {
                            image &&
                            <div className="image-wrapper">
                                <img
                                    src={image}
                                    alt={title}
                                />
                            </div>
                        }
                        <div className="text-wrapper">
                            {
                                textContent &&
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
                }
                {
                    location.pathname === "/" &&
                    <footer className="section-hero-footer">
                        <Button linkTo={title} />
                    </footer>
                }
            </article>
        </section>
    )
}