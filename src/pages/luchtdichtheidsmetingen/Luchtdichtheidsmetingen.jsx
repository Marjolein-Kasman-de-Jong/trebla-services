import { motion } from "framer-motion";

// Components
import SectionHero from "../../components/section-hero/SectionHero";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Styles
import "./luchtdichtheidsmetingen.css";

export default function Luchtdichtheidsmetingen() {
  return (
    <motion.main 
      className="luchtdichtheidsmetingen"
      variants={slideInOut}
      initial="hidden"
      animate="visible"
      exit="exit"   
    >
        <SectionHero section="section-luchtdichtheidsmetingen" />
    </motion.main>
  )
}