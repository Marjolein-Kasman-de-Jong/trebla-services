import { useState } from "react";
import { motion } from "framer-motion";

// Context
import { useHeader } from "../../context/HeaderContext";

// Hooks
import useScrollToTop from "../../hooks/useScrollToTop";

// Components
import ContactForm from "../../components/contact-form/ContactForm";
import ContactFormSuccessMessage from "../../components/contact-form-success-message/ContactFormSuccessMessage";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Styles
import "./contact.css";

export default function Contact() {
  useScrollToTop();
  
  const { headerHeight } = useHeader();

  const [messageIsSentSuccessfully, toggleMessageIsSentSuccessfully] = useState(false);

  return (
    <motion.main 
      className="contact"
      style={{ paddingTop: headerHeight }}
      variants={slideInOut}
      initial="hidden"
      animate="visible"
      exit="exit" 
    >
        <h2 className="heading-2">
          Contact
        </h2>
        {
          messageIsSentSuccessfully ?
            <ContactFormSuccessMessage />
            :
            <ContactForm toggleMessageIsSentSuccessfully={toggleMessageIsSentSuccessfully} />
        }
        
    </motion.main>
  )
}