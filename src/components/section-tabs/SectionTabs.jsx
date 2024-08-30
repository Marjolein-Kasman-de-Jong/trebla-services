import { useState } from "react";

// Components
import Paragraph from "../paragraph/Paragraph";

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
      <ul>
        {
          tabsContent.map((tab, index) => {
            return (
              <li
                key={index}
                className={index === activeTab ? "active" : null}
              >
                <button onClick={() => changeActiveTab(index)}>
                  {tab.title}
                </button>
              </li>
            )
          })
        }
      </ul>
      <div>
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
    </section>
  )
}