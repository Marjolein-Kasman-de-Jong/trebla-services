import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Context
import { HeaderProvider } from "./context/HeaderContext";

// Pages
import Home from "./pages/home/Home";
import ServicePage from "./pages/service-page/ServicePage";
import LegalPage from "./pages/legal-page/LegalPage";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/not-found/NotFound";

// Components
import PageHeader from "./components/page-header/PageHeader";
import PageFooter from "./components/page-footer/PageFooter";

// Constants
import servicePageData from "./constants/servicePageData";
import legalPageData from "./constants/legalPageData";

// Styles
import "./App.css";

function App() {
  const servicePages = Object.keys(servicePageData);
  const legalPages = Object.keys(legalPageData);
  const location = useLocation();

  return (
    <HeaderProvider>
      <PageHeader />
      <AnimatePresence mode="wait">
        <Routes
          location={location}
          key={location.key}
        >
          <Route
            path="/"
            element={<Home />}
          />
          {
            servicePages.map((servicePage) => (
              <Route
                key={servicePage}
                path={`/${servicePage}`}
                element={<ServicePage servicePage={servicePage} />}
              />
            ))
          }
          {
            legalPages.map((legalPage) => (
              <Route
                key={legalPage}
                path={`/${legalPage}`}
                element={<LegalPage legalPage={legalPage} />}
              />
            ))
          }
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </AnimatePresence>
      <PageFooter />
    </HeaderProvider>
  )
}

export default App;