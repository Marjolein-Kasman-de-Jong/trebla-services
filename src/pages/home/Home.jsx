import { motion } from "framer-motion";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Styles
import "./home.css";

export default function Home() {
  return (
    <motion.main 
      className="home"
      variants={slideInOut}
      initial="hidden"
      animate="visible"
      exit="exit"  
    >
        Home
    </motion.main>
  )
}