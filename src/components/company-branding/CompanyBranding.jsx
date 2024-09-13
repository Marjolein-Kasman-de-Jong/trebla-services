// Images
import companyLogo from "/company-logo.jpg";

// Styles
import "./company-branding.css";

export default function CompanyBranding() {
    return (
        <div className="company-branding">
            {/* Company name */}
            <h1 className="heading-1">
                Trebla Services
            </h1>
            {/* Company description */}
            <div className="company-description">
                <p className="paragraph-2">
                    Thermografie & Luchtdichtheid<br />
                    by Vanderbilt
                </p>
                {/* Company logo */}
                <div className="logo-wrapper">
                    <img
                        src={companyLogo}
                        alt="Trebla Services logo"
                    />
                </div>
            </div>
        </div>
    )
}