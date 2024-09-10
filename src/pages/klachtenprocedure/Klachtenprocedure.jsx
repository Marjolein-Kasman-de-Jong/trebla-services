import { useHeader } from "../../context/HeaderContext";
import { motion } from "framer-motion";

// Components
import SectionHero from "../../components/section-hero/SectionHero";
import LegalContent from "../../components/legal-content/LegalContent";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Constants
import klachtenprocedureContent from "../../constants/klachtenprocedureContent";

// Styles
import "./klachtenprocedure.css";

export default function Klachtenprocedure() {
    const { headerHeight } = useHeader();

    return (
        <motion.main
            className="klachtenprocedure"
            style={{ paddingTop: headerHeight }}
            variants={slideInOut}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <SectionHero section="section-klachtenprocedure" />
            <LegalContent legalContent={klachtenprocedureContent} />
        </motion.main>
    )
}