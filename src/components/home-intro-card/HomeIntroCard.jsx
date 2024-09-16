// Components
import Button from "../button/Button"

// Helpers
import firstLetterToUpperCase from "../../helpers/firstLetterToUpperCase";

// Styles
import "./home-intro-card.css";

export default function HomeIntroCard({ data }) {
  const { title, textContent, image } = data;

  return (
    <>
      <article className="home-intro-card">
        <div className="text-wrapper">
          <header>
            <h2 className="heading-3">
              {firstLetterToUpperCase(title)}
            </h2>
          </header>
          <p className="paragraph-1">
            {textContent}
          </p>
          <footer>
            <Button linkTo={title} />
          </footer>
        </div>
        <div className="image-wrapper">
          <img 
            src={image} 
            alt={title} 
          />
        </div>
      </article>
    </>
  )
}