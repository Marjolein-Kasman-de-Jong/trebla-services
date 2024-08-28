import { useHeader } from "../../context/HeaderContext";
import { motion } from "framer-motion";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Styles
import "./contact.css";

export default function Contact() {
  const { headerHeight } = useHeader();

  return (
    <motion.main 
      className="contact"
      style={{ paddingTop: headerHeight }}
      variants={slideInOut}
      initial="hidden"
      animate="visible"
      exit="exit" 
    >
        Contact
    </motion.main>
  )
}