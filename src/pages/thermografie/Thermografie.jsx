import { motion } from "framer-motion";

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
        Thermografie
    </motion.main>
  )
}