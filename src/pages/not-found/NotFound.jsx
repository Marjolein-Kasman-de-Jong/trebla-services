import { motion } from "framer-motion";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Styles
import "./not-found.css";

export default function NotFound() {
  return (
    <motion.main 
      className="not-found"
      variants={slideInOut}
      initial="hidden"
      animate="visible"
      exit="exit" 
    >
        Not Found
    </motion.main>
  )
}