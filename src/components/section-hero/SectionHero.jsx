// Components
import firstLetterToUpperCase from "../../helpers/firstLetterToUpperCase";
import PageTitle from "../page-title/PageTitle";

// Images
import heroThermografie from "../../assets/hero-thermografie.jpg";
import heroLuchtdichtheidsmetingen from "../../assets/hero-luchtdichtheidsmetingen.jpg";

// Styles
import "./section-hero.css";

export default function SectionHero({ section }) {
    const sectionTitle = section === "section-thermografie" ? "thermografie" : "luchtdichtheidsmetingen";
    const heroImage = section === "section-thermografie" ? heroThermografie : heroLuchtdichtheidsmetingen;

    return (
        <section className="hero">
            <article>
                <header>
                    <PageTitle>
                        {
                            firstLetterToUpperCase(sectionTitle)
                        }
                    </PageTitle>
                </header>
                <div className="content-wrapper">
                    <div className="image-wrapper">
                        <img src={heroImage} alt={sectionTitle} />
                    </div>
                <p>Test</p>
                </div>
            </article>
        </section>
    )
}