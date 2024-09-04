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

  function changeActiveTab(tabIndex) {
    setActiveTab(tabIndex);
    setActiveContent(tabsContent[tabIndex].content);
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
        mode="wait"
        variants={slideInOut}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        {
          activeContent.map((item, index) => {
            return (
              <Paragraph key={index}>
                {item}
              </Paragraph>
            )
          })
        }
      </motion.div>
    </section>
  )
}