import { useHeader } from "../../context/HeaderContext";
import { motion } from "framer-motion";

// Components
import SectionHero from "../../components/section-hero/SectionHero";
import SectionTabs from "../../components/section-tabs/SectionTabs";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Constants
import servicePageData from "../../constants/servicePageData";

// Styles
import "./service-page.css";

export default function ServicePage({ servicePage }) {
    const { headerHeight } = useHeader();

    return (
        <motion.main
            className="service-page"
            style={{ paddingTop: headerHeight }}
            variants={slideInOut}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <SectionHero content={servicePageData[servicePage].hero} />
            <SectionTabs tabsContent={servicePageData[servicePage].tabs} />
        </motion.main>
    )
}