import { useState } from "react";
import { motion } from "framer-motion";

// Components
import Paragraph from "../paragraph/Paragraph";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Styles
import "./section-tabs.css";

export default function SectionTabs({ tabsContent }) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeContent, setActiveContent] = useState(tabsContent[0].content);
  const [activeImages, setActiveImages] = useState(tabsContent[0].images);

  function changeActiveTab(tabIndex) {
    setActiveTab(tabIndex);
    setActiveContent(tabsContent[tabIndex].content);
    setActiveImages(tabsContent[tabIndex].images || null);
  }

  return (
    <section className="tabs">
      <header>
        <ul>
          {
            tabsContent.map((tab, index) => {
              return (
                <li
                  key={index}
                  className={index === activeTab ? "active" : null}
                >
                  <button
                    onClick={() => changeActiveTab(index)}
                  >
                    <h3 className="heading-3">
                      {tab.title}
                    </h3>
                  </button>
                </li>
              )
            })
          }
        </ul>
      </header>
      <motion.div
        key={activeTab}
        className="motion-div"
        mode="wait"
        variants={slideInOut}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <div className="text-wrapper">
          {
            activeContent.map((item, index) => {
              return (
                <Paragraph key={index}>
                  {item}
                </Paragraph>
              )
            })
          }
        </div>
        <div className="images-wrapper">
          {
            activeImages.map((item, index) => {
              const { image, alt } = item;

              return (
                <img key={index} src={image} alt={alt} />
              )
            })
          }
        </div>
      </motion.div>
    </section>
  )
}