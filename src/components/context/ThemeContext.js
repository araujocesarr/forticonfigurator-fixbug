import { createContext, useContext, useEffect, useState } from "react";

export const ThemeContext = createContext()

export const ThemeContextProvider = ({ children }) => {

  const [ theme, setTheme ] = useState(() =>
  localStorage.getItem("theme") || "SDAG" )

  const values = { theme, setTheme }

  useEffect (() => { 
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={values}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useThemeContext = () => {
  const context = useContext(ThemeContext)
  return context
}
