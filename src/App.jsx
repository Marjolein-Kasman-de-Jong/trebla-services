import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/home/Home";
import Thermografie from "./pages/thermografie/Thermografie";
import Luchtdichtheidsmetingen from "./pages/luchtdichtheidsmetingen/Luchtdichtheidsmetingen";
import Contact from "./pages/contact/Contact";
import NotFound from "./pages/not-found/NotFound";

// Components
import PageHeader from "./components/page-header/PageHeader";
import PageFooter from "./components/page-footer/PageFooter";

// Styles
import "./App.css";

function App() {
  return (
    <>
      <PageHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/thermografie" element={<Thermografie />} />
        <Route path="/luchtdichtheidsmetingen" element={<Luchtdichtheidsmetingen />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <PageFooter />
    </>
  )
}

export default App;