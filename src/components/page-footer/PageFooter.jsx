import { Link } from "react-router-dom";

// Constants
import legalPageData from "../../constants/legalPageData";

// Helpers
import firstLetterToUpperCase from "../../helpers/firstLetterToUpperCase";
import getCurrentYear from "../../helpers/getCurrentYear";

// Styles
import "./page-footer.css";

export default function PageFooter() {
  const navItems = Object.keys(legalPageData);

  return (
    <footer className="page-footer">
      <ul>
        {navItems.map((navItem, index) => (
          <li
            key={index}
            className="nav-item"
          >
            <Link
              to={`/${navItem}`}
              className="link-2"
            >
              {firstLetterToUpperCase(navItem)}
            </Link>
          </li>
        ))}
      </ul>
      <p className="paragraph-4">Trebla Services {getCurrentYear()}</p>
    </footer>
  )
}