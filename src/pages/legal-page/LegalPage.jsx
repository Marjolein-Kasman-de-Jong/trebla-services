import { useHeader } from "../../context/HeaderContext";
import { motion } from "framer-motion";

// Hooks
import useScrollToTop from "../../hooks/useScrollToTop";

// Components
import LegalPageHeader from "../../components/legal-page-header/LegalPageHeader";
import LegalPageContent from "../../components/legal-page-content/LegalPageContent";

// Constants
import legalPageData from "../../constants/legalPageData";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Styles
import "./legal-page.css";

export default function LegalPage({ legalPage }) {
    useScrollToTop();
    
    const { headerHeight } = useHeader();

    return (
        <motion.main
            className="legal-page"
            style={{ paddingTop: headerHeight }}
            variants={slideInOut}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <article>
                <LegalPageHeader content={legalPage} />
                <LegalPageContent content={legalPageData[legalPage]} />
            </article>
        </motion.main>
    )
}