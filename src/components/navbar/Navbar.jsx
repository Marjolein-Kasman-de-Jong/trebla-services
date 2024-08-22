import { Link } from "react-router-dom";

// Helpers
import firstLetterToUpperCase from "../../helpers/firstLetterToUpperCase";

// Constants
import menuItems from "../../constants/menuItems";

// Styles
import "./navbar.css";

export default function Navbar() {
    console.log(menuItems)
    return (
        <nav className="navbar">
            <ul>
                {menuItems.map((item, index) => (
                    <li key={index} className="nav-item">
                        <Link to={`/${item.path}`} className="nav-link link-1">
                            {/* {item.path.charAt(0).toUpperCase() + item.path.slice(1)} */}
                            {firstLetterToUpperCase(item.path)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}