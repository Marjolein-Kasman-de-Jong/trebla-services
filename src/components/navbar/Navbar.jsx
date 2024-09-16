import { Link } from "react-router-dom";

// Helpers
import firstLetterToUpperCase from "../../helpers/firstLetterToUpperCase";

// Constants
import servicePageData from "../../constants/servicePageData";

// Styles
import "./navbar.css";

export default function Navbar() {
    const navItems = Object.keys(servicePageData);

    return (
        <nav className="navbar">
            <ul>
                {navItems.map((navItem, index) => (
                    <li
                        key={index}
                        className="nav-item"
                    >
                        <Link
                            to={`/${navItem}`}
                            className="nav-link link-1"
                        >
                            {firstLetterToUpperCase(navItem)}
                        </Link>
                    </li>
                ))}
                <li
                    className="nav-item"
                >
                    <Link
                        to={`/contact`}
                        className="nav-link link-1"
                    >
                        {firstLetterToUpperCase("contact")}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}