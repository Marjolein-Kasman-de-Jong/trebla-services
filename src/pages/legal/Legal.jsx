import { useHeader } from "../../context/HeaderContext";
import { motion } from "framer-motion";

// Components
import LegalPageHeader from "../../components/legal-page-header/LegalPageHeader";
import LegalPageContent from "../../components/legal-page-content/LegalPageContent";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Constants
import legalPageData from "../../constants/legalPageData";

// Styles
import "./legal.css";

export default function Legal({ legalPage }) {
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