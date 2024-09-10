// Pages
import Leveringsvoorwaarden from "../pages/leveringsvoorwaarden/Leveringsvoorwaarden";
import Klachtenprocedure from "../pages/klachtenprocedure/Klachtenprocedure";
import Disclaimer from "../pages/disclaimer/Disclaimer";

const documenten = [
    { 
      path: "leveringsvoorwaarden",
      component: <Leveringsvoorwaarden /> 
    },
    { 
      path: "klachtenprocedure", 
      component: <Klachtenprocedure /> 
    },
    {
      path: "disclaimer",
      component: <Disclaimer />
    }
];

export default documenten;