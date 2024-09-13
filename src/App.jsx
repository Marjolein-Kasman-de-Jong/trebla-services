import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Context
import { HeaderProvider } from "./context/HeaderContext";

// Pages
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";
import LegalPage from "./pages/legal-page/LegalPage";

// Components
import PageHeader from "./components/page-header/PageHeader";
import PageFooter from "./components/page-footer/PageFooter";

// Constants
import menuItems from "./constants/menuItems";
import legalPageData from "./constants/legalPageData";

// Styles
import "./App.css";

function App() {
  const legalPages = Object.keys(legalPageData);

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

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
            menuItems.map((item) => (
              <Route
                key={item}
                path={`/${item.path}`}
                element={item.component}
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