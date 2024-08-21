// Components
import CompanyBranding from '../company-branding/CompanyBranding';

// Styles
import "./page-header.css";

export default function PageHeader() {
    return (
        <header className="page-header">
            <CompanyBranding />
        </header>
    )
}