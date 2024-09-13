import { useState } from "react";
import { motion } from "framer-motion";

// Components
import Paragraph from "../paragraph/Paragraph";
import Image from "../image/Image";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Styles
import "./service-page-tabs.css";

export default function ServicePageTabs({ content }) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeText, setActiveText] = useState(content[0].content);
  const [activeImages, setActiveImages] = useState(content[0].images);

  // Change active tab
  const changeActiveTab = (tabIndex) => {
    setActiveTab(tabIndex);
    setActiveText(content[tabIndex].content);
    setActiveImages(content[tabIndex].images || null);
  }

  return (
    <section className="tabs">
      {/* Tab buttons */}
      <header>
        <ul>
          {
            content.map((tab, index) => {
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
      {/* Tab content */}
      <motion.div
        key={activeTab}
        className="service-page-tab"
        mode="wait"
        variants={slideInOut}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {/* --Tab text content */}
        <div className="text-wrapper">
          {
            activeText.map((item, index) => {
              return (
                <Paragraph key={index}>
                  {item}
                </Paragraph>
              )
            })
          }
        </div>
        {/* --Tab image content */}
        <div className="images-wrapper">
          {
            activeImages.map((item, index) => {
              return (
                <Image key={index} item={item} />
              )
            })
          }
        </div>
      </motion.div>
    </section>
  )
}