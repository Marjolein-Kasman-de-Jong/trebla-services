import { motion } from "framer-motion";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Styles
import "./contact.css";

export default function Contact() {
  return (
    <motion.main 
      className="contact"
      variants={slideInOut}
      initial="hidden"
      animate="visible"
      exit="exit" 
    >
        Contact
    </motion.main>
  )
}