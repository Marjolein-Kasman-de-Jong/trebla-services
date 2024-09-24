import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Context
import { useHeader } from "../../context/HeaderContext";

// Hooks
import useScrollToTop from "../../hooks/useScrollToTop";

// Components
import Paragraph from "../../components/paragraph/Paragraph";

// Constants
import notFoundPageData from "../../constants/notFoundPageData";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Styles
import "./not-found.css";

export default function NotFound() {
  useScrollToTop();

  const { title, textContent } = notFoundPageData;

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
      <h2 className="heading-2">
        {title}
      </h2>
      <div className="content-container">
        {
          textContent.map((item) => {
            return typeof (item) === "object" ?
              <ul key={item}>
                {
                  item.map((subitem) => {
                    const isHomepage = subitem.includes("{homepage}");
                    const [before, after] = subitem.split(isHomepage ? "{homepage}" : "{contactformulier}");
                  
                    return (
                      <li key={subitem} className="paragraph-1">
                        {before}
                          <Link to={isHomepage ? "/" : "/contact"}>
                            {isHomepage ? "homepage" : "contactformulier"}
                          </Link>
                        {after}
                      </li>
                    );
                  })
                }
              </ul>
              :
              <Paragraph key={item}>
                {item}
              </Paragraph>
          })
        }
      </div>
    </motion.main>
  )
}