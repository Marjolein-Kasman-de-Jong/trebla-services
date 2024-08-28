import { Routes, Route, useLocation } from "react-router-dom";
import { HeaderProvider } from "./context/HeaderContext";
import { AnimatePresence } from "framer-motion";

// Pages
import Home from "./pages/home/Home";
import NotFound from "./pages/not-found/NotFound";

// Components
import PageHeader from "./components/page-header/PageHeader";
import PageFooter from "./components/page-footer/PageFooter";

// Constants
import menuItems from "./constants/menuItems";

// Styles
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <HeaderProvider>
      <PageHeader />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.key}>
          <Route
            path="/"
            element={<Home />}
          />
          {menuItems.map((item) => (
            <Route
              key={item.path}
              path={`/${item.path}`}
              element={item.component}
            />
          ))}
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