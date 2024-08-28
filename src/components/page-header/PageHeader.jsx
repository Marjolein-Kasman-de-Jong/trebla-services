import { useHeader } from "../../context/HeaderContext";

// Components
import CompanyBranding from '../company-branding/CompanyBranding';
import Navbar from '../navbar/Navbar';

// Styles
import "./page-header.css";

export default function PageHeader() {
    const { headerRef } = useHeader();

    return (
        <header ref={headerRef} className="page-header">
            <CompanyBranding />
            <Navbar />
        </header>
    )
}