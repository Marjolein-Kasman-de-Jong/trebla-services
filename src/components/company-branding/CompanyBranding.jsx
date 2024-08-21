// Images
import companyLogo from '../../../public/company-logo.jpg';

// Styles
import "./company-branding.css";

export default function CompanyBranding() {
    return (
        <div className="company-branding">
            <h1 className="heading-1">
                Trebla Services
            </h1>
            <div className="company-description">
                <p className="paragraph-2">
                    Thermografie & Luchtdichtheid<br />
                    by Vanderbilt
                </p>
                <div className="logo-wrapper">
                    <img src={companyLogo} alt="Trebla Services logo" />
                </div>
            </div>
        </div>
    )
}