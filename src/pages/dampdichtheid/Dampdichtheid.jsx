import  { useHeader } from "../../context/HeaderContext";
import { motion } from "framer-motion";

// Components
import SectionHero from "../../components/section-hero/SectionHero";
import SectionTabs from "../../components/section-tabs/SectionTabs";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Constants
import dampdichtheidTabsContent from "../../constants/dampdichtheidTabsContent";

// Styles
import "./dampdichtheid.css";

export default function Dampdichtheid() {
  const { headerHeight } = useHeader();

  return (
    <motion.main 
      className="dampdichtheid"
      style={{ paddingTop: headerHeight }}
      variants={slideInOut}
      initial="hidden"
      animate="visible"
      exit="exit"   
    >
        <SectionHero section="section-dampdichtheid" />
        <SectionTabs tabsContent={dampdichtheidTabsContent} />
    </motion.main>
  )
}