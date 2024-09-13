import { useHeader } from "../../context/HeaderContext";
import { motion } from "framer-motion";

// Animations
import slideInOut from "../../animations/slide-in-out";

// Components
import ServiceHighlight from "../../components/service-highlight/ServiceHighlight";
import SectionHero from "../../components/service-page-hero/ServicePageHero";

// Constants
// import sectionHeroContent from "../../constants/sectionHeroContent";

// Styles
import "./home.css";

export default function Home() {
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
        {
          // Object.entries(sectionHeroContent).map(([key]) => {
          //   return <SectionHero key={key} section={key} />;
          // })
        }
        <ServiceHighlight>
          <span className="strong">Trebla Services</span> verricht onderzoek voor particulieren, woningbouwverenigingen, makelaars, aannemers, architecten en verzekeringsmaatschappijen
        </ServiceHighlight>
      </motion.main>
    </>
  )
}