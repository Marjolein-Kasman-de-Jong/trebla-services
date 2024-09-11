import { useHeader } from "../../context/HeaderContext";
import { motion } from "framer-motion";

// Components
import SectionHero from "../../components/section-hero/SectionHero";
import LegalContent from "../../components/legal-content/LegalContent";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Constants
import disclaimerContent from "../../constants/disclaimerContent";

// Styles
import "./disclaimer.css";

export default function Disclaimer() {
    const { headerHeight } = useHeader();

    return (
        <motion.main
            className="disclaimer"
            style={{ paddingTop: headerHeight }}
            variants={slideInOut}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <SectionHero section="section-disclaimer" />
            <LegalContent legalContent={disclaimerContent} />
        </motion.main>
    )
}