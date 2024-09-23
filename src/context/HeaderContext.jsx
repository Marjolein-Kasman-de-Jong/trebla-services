import { createContext, useContext, useRef, useState, useEffect } from "react";

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  // Page header component height
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Company branding component height
  const companyBrandingRef = useRef(null);
  const [companyBrandingHeight, setCompanyBrandingHeight] = useState(0); 
   
  // Navbar component height
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);

  // Update page header component height
  useEffect(() => {
    const updateHeaderHeight = () => {
      setHeaderHeight(companyBrandingRef.current.offsetHeight + navbarRef.current.offsetHeight)
    }

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    }
  }, [companyBrandingHeight, navbarHeight])

  // Update company branding component height
  useEffect(() => {
    const updateCompanyBrandingHeight = () => {
      if (companyBrandingRef.current) {
        setCompanyBrandingHeight(companyBrandingRef.current.offsetHeight);
      }
    }

    updateCompanyBrandingHeight();
    window.addEventListener('resize', updateCompanyBrandingHeight);

    return () => {
      window.removeEventListener('resize', updateCompanyBrandingHeight);
    }
  }, [companyBrandingHeight])

  // Update navbar component height 
  useEffect(() => {
    const updateNavbarHeight = () => {
      if (navbarRef.current) {
        setNavbarHeight(navbarRef.current.offsetHeight);
      }
    }

    updateNavbarHeight();
    window.addEventListener('resize', updateNavbarHeight);

    return () => {
      window.removeEventListener('resize', updateNavbarHeight);
    }
  }, [navbarHeight])

  return (
    <HeaderContext.Provider value={{ headerHeight, headerRef, companyBrandingHeight, companyBrandingRef, navbarHeight, navbarRef }}>
      {children}
    </HeaderContext.Provider>
  )
}

export const useHeader = () => useContext(HeaderContext);
