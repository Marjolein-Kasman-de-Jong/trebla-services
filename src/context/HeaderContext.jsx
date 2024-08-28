import React, { createContext, useContext, useRef, useState, useEffect } from 'react';

const HeaderContext = createContext();

export const HeaderProvider = ({ children }) => {
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    }

    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);

    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
    }
  }, [])

  return (
    <HeaderContext.Provider value={{ headerHeight, headerRef }}>
      {children}
    </HeaderContext.Provider>
  )
}

export const useHeader = () => useContext(HeaderContext);
