import { motion } from 'framer-motion';

// Animations
import slideIn from '../../animations/slide-in';

// Images
import companyLogo from "/company-logo.jpg";

// Styles
import "./company-branding.css";

export default function CompanyBranding() {
    return (
        <div className="company-branding">
            <motion.h1
                className="heading-1"
                variants={slideIn}
                initial="hidden"
                animate="visible"
            >
                Trebla Services
            </motion.h1>
            <div className="company-description">
                <p className="paragraph-2">
                    Thermografie & Luchtdichtheid<br />
                    by Vanderbilt
                </p>
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