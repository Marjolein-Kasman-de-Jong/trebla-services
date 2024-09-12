import { useHeader } from "../../context/HeaderContext";
import { motion } from "framer-motion";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Styles
import "./leveringsvoorwaarden.css";

export default function Leveringsvoorwaarden() {
  const { headerHeight } = useHeader();
  const pdfUrl = "./public/Leveringsvoorwaarden-Trebla-Services.pdf";

  return (
    <motion.main
      className="leveringsvoorwaarden"
      style={{ paddingTop: headerHeight }}
      variants={slideInOut}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      Leveringsvoorwaarden
      
    </motion.main>
  )
}