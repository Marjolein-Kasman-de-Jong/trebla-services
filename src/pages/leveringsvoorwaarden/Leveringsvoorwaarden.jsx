import { useHeader } from "../../context/HeaderContext";
import { motion } from "framer-motion";

// Components
import SectionHero from "../../components/section-hero/SectionHero";
import LegalContent from "../../components/legal-content/LegalContent";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Constants
import leveringsvoorwaardenContent from "../../constants/leveringsvoorwaardenContent";

// Styles
import "./leveringsvoorwaarden.css";

export default function Leveringsvoorwaarden() {
    const { headerHeight } = useHeader();

    return (
        <motion.main
            className="leveringsvoorwaarden"
            style={{ paddingTop: headerHeight }}
            variants={slideInOut}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <SectionHero section="section-leveringsvoorwaarden" />
            <LegalContent legalContent={leveringsvoorwaardenContent} />
        </motion.main>
    )
}