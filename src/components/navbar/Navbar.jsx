import { Link } from "react-router-dom";

// Helpers
import firstLetterToUpperCase from "../../helpers/firstLetterToUpperCase";

// Constants
import menuItems from "../../constants/menuItems";

// Styles
import "./navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                {menuItems.map((item, index) => (
                    <li 
                        key={index} 
                        className="nav-item"
                    >
                        <Link 
                            to={`/${item.path}`} 
                            className="nav-link link-1"
                        >
                            {firstLetterToUpperCase(item.path)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}