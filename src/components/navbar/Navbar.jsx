import { NavLink } from "react-router-dom";

// Styles
import "./navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <ul>
                <li className="nav-item">
                    <NavLink to="/thermografie" className="nav-link link-1">
                        Thermografie
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/luchtdichtheidsmetingen" className="nav-link link-1">
                        Luchtdichtheidsmetingen
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" className="nav-link link-1">
                        Contact
                    </NavLink></li>
            </ul>
        </nav>
    )
}