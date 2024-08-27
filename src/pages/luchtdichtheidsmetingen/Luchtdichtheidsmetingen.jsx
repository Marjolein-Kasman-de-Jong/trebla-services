import { motion } from "framer-motion";

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
        Luchtdichtheidsmetingen
    </motion.main>
  )
}