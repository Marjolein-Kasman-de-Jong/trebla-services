import { useEffect } from "react";
import { motion } from "framer-motion";

// Context
import { useHeader } from "../../context/HeaderContext";

// Hooks
import useScrollToTop from "../../hooks/useScrollToTop";

// Components
import ServicePageHero from "../../components/service-page-hero/ServicePageHero";
import ServicePageTabs from "../../components/service-page-tabs/ServicePageTabs";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Constants
import servicePageData from "../../constants/servicePageData";

// Styles
import "./service-page.css";

export default function ServicePage({ servicePage }) {
    useScrollToTop();

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
            <ServicePageHero content={servicePageData[servicePage].hero} />
            <ServicePageTabs content={servicePageData[servicePage].tabs} />
        </motion.main>
    )
}