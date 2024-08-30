import  { useHeader } from "../../context/HeaderContext";
import { motion } from "framer-motion";

// Components
import SectionHero from "../../components/section-hero/SectionHero";
import SectionTabs from "../../components/section-tabs/SectionTabs";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Helpers
import thermografieTabsContent from "../../constants/thermografieTabsContent";

// Styles
import "./thermografie.css";

export default function Thermografie() {
  const { headerHeight } = useHeader();

  return (
    <motion.main 
      className="thermografie"
      style={{ paddingTop: headerHeight }}
      variants={slideInOut}
      initial="hidden"
      animate="visible"
      exit="exit" 
    >
      <SectionHero section="section-thermografie" />
      <SectionTabs tabsContent={thermografieTabsContent} />
    </motion.main>
  )
}