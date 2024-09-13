import { useState } from "react";
import { motion } from "framer-motion";

// Components
import Paragraph from "../paragraph/Paragraph";
import Image from "../image/Image";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Styles
import "./section-tabs.css";

export default function SectionTabs({ content }) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeContent, setActiveContent] = useState(content[0].content);
  const [activeImages, setActiveImages] = useState(content[0].images);

  function changeActiveTab(tabIndex) {
    setActiveTab(tabIndex);
    setActiveContent(content[tabIndex].content);
    setActiveImages(content[tabIndex].images || null);
  }

  return (
    <section className="tabs">
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
      <motion.div
        key={activeTab}
        className="service-page-tab"
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