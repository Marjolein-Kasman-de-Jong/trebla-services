import { useHeader } from "../../context/HeaderContext";
import { motion } from "framer-motion";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Hooks
import useScrollToTop from "../../hooks/useScrollToTop";

// Styles
import "./not-found.css";

export default function NotFound() {
  useScrollToTop();
  
  const { headerHeight } = useHeader();

  return (
    <motion.main 
      className="not-found"
      style={{ paddingTop: headerHeight }}
      variants={slideInOut}
      initial="hidden"
      animate="visible"
      exit="exit" 
    >
        Not Found
    </motion.main>
  )
}