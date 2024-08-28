import { useHeader } from "../../context/HeaderContext";
import { motion } from "framer-motion";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Styles
import "./home.css";

export default function Home() {
  const { headerHeight } = useHeader();

  return (
    <motion.main 
      className="home"
      style={{ paddingTop: headerHeight }}
      variants={slideInOut}
      initial="hidden"
      animate="visible"
      exit="exit"  
    >
        Home
    </motion.main>
  )
}