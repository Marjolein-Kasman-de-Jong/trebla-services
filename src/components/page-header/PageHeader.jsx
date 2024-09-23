// Components
import CompanyBranding from '../company-branding/CompanyBranding';
import Navbar from '../navbar/Navbar';

// Styles
import "./page-header.css";

export default function PageHeader() {
    return (
        <header className="page-header">
            <CompanyBranding />
            <Navbar />
        </header>
    )
}