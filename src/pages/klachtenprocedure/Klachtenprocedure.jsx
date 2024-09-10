import  { useHeader } from "../../context/HeaderContext";
import { motion } from "framer-motion";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Styles
import "./klachtenprocedure.css";

export default function Klachtenprocedure() {
  const { headerHeight } = useHeader();

  return (
    <motion.main 
      className="klachtenprocedure"
      style={{ paddingTop: headerHeight }}
      variants={slideInOut}
      initial="hidden"
      animate="visible"
      exit="exit"   
    >
        Klachtenprocedure
    </motion.main>
  )
}