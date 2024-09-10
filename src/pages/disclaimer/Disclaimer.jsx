import  { useHeader } from "../../context/HeaderContext";
import { motion } from "framer-motion";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Styles
import "./disclaimer.css";

export default function Disclaimer() {
  const { headerHeight } = useHeader();

  return (
    <motion.main 
      className="Disclaimer"
      style={{ paddingTop: headerHeight }}
      variants={slideInOut}
      initial="hidden"
      animate="visible"
      exit="exit"   
    >
        Disclaimer
    </motion.main>
  )
}