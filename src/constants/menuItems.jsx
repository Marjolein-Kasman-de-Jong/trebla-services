// Pages
import Thermografie from "../pages/thermografie/Thermografie";
import Luchtdichtheidsmetingen from "../pages/luchtdichtheidsmetingen/Luchtdichtheidsmetingen";
import Contact from "../pages/contact/Contact";

const menuItems = [
    { 
      path: "thermografie",
      component: <Thermografie /> 
    },
    { 
      path: "luchtdichtheidsmetingen", 
      component: <Luchtdichtheidsmetingen /> 
    },
    { 
      path: "contact", 
      component: <Contact /> 
    },
];

export default menuItems;