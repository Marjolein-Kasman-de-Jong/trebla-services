import { motion } from "framer-motion";

// Components
import SectionHero from "../../components/section-hero/SectionHero";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Styles
import "./thermografie.css";

export default function Thermografie() {
  return (
    <motion.main 
      className="thermografie"
      variants={slideInOut}
      initial="hidden"
      animate="visible"
      exit="exit" 
    >
      <SectionHero section="section-thermografie" />
    </motion.main>
  )
}