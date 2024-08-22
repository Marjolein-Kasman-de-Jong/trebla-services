import { Link } from "react-router-dom";

// Styles
import "./navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li className="nav-item">
                    <Link to="/thermografie" className="nav-link link-1">
                        Thermografie
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/luchtdichtheidsmetingen" className="nav-link link-1">
                        Luchtdichtheidsmetingen
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link link-1">
                        Contact
                    </Link></li>
            </ul>
        </nav>
    )
}