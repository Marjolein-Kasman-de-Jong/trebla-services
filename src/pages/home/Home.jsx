import { useHeader } from "../../context/HeaderContext";
import { motion } from "framer-motion";

// Hooks
import useScrollToTop from "../../hooks/useScrollToTop";

// Components
import ServiceHighlight from "../../components/service-highlight/ServiceHighlight";
import HomeIntroCard from "../../components/home-intro-card/HomeIntroCard";

// Constants
import servicePageData from "../../constants/servicePageData";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Styles
import "./home.css";

export default function Home() {
  useScrollToTop();
  
  const { headerHeight } = useHeader();

  return (
    <>
      <motion.main
        className="home"
        style={{ paddingTop: headerHeight }}
        variants={slideInOut}
        initial="hidden"
        animate="visible"
        exit="exit"
      >
        <ServiceHighlight>
          <span className="strong">Trebla Services</span> is uw specialist in <span className="strong">thermografie</span>, <span className="strong">luchtdichtheidsmetingen</span> en andere non-destructieve onderzoeksmethoden
        </ServiceHighlight>
        <div className="home-intro-card-container">
          {
            Object.entries(servicePageData).map(([key]) => {
              return <HomeIntroCard 
                key={key} 
                data={servicePageData[key].hero} 
              />;
            })
          }
        </div>
        <ServiceHighlight>
          <span className="strong">Trebla Services</span> verricht onderzoek voor particulieren, woningbouwverenigingen, makelaars, aannemers, architecten en verzekeringsmaatschappijen
        </ServiceHighlight>
      </motion.main>
    </>
  )
}