import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Context
import { useHeader } from "../../context/HeaderContext";

// Helpers
import firstLetterToUpperCase from "../../helpers/firstLetterToUpperCase";

// Constants
import servicePageData from "../../constants/servicePageData";

// Styles
import "./navbar.css";

export default function Navbar() {
    // Monitor navbar component height
    const { navbarRef } = useHeader();

    // Show/hide navbar
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const handleScroll = () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY) {
            setShowNavbar(false);
        } else {
            setShowNavbar(true);
        }

        setLastScrollY(currentScrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    // Get nav items from servicePageData
    const navItems = Object.keys(servicePageData);

    return (
        <nav ref={navbarRef} className={`navbar ${showNavbar ? "visible" : "hidden"}`}>
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
                        to={"/contact"}
                        className="nav-link link-1"
                    >
                        {firstLetterToUpperCase("contact")}
                    </Link>
                </li>
            </ul>
        </nav>
    )
}