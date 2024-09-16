import { useNavigate } from "react-router-dom";

// Images
import companyLogo from "/company-logo.jpg";

// Styles
import "./company-branding.css";

export default function CompanyBranding() {
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate('/');
    }

    return (
        <div className="company-branding">
            {/* Company name */}
            <h1 className="heading-1" onClick={handleClick}>
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