// Components
import firstLetterToUpperCase from "../../helpers/firstLetterToUpperCase";
import SectionHeroTitle from "../section-hero-title/SectionHeroTitle";

// Images
import sectionHeroThermografie from "../../assets/hero-thermografie.jpg";
import sectionHeroLuchtdichtheidsmetingen from "../../assets/hero-luchtdichtheidsmetingen.jpg";

// Styles
import "./section-hero.css";

export default function SectionHero({ section }) {
    const sectionHeroTitle = section === "section-thermografie" ? "thermografie" : "luchtdichtheidsmetingen";
    const sectionHeroImage = section === "section-thermografie" ? sectionHeroThermografie : sectionHeroLuchtdichtheidsmetingen;

    return (
        <section className="hero">
            <article>
                <header>
                    <SectionHeroTitle>
                        {
                            firstLetterToUpperCase(sectionHeroTitle)
                        }
                    </SectionHeroTitle>
                </header>
                <div className="content-wrapper">
                    <div className="image-wrapper">
                        <img src={sectionHeroImage} alt={sectionHeroTitle} />
                    </div>
                <p>Test</p>
                </div>
            </article>
        </section>
    )
}