import { Routes, Route } from "react-router-dom";

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
  return (
    <>
      <PageHeader />
        <Routes>
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
      <PageFooter />
    </>
  )
}

export default App;