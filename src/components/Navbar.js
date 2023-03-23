import React, {useEffect}from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useThemeContext } from "../components/context/ThemeContext";
import Gear from "../components/icons/Gear"

export default function Navbar() {
  //Settingshandling
  const [menuOpen, setMenuOpen] = useState(
    localStorage.getItem("menuOpen") || "true" );

  const handleMenuClick = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    localStorage.setItem("menuOpen", menuOpen);
  }, [menuOpen]);

  //Themehandling
  const {theme, setTheme} = useThemeContext()
  const [checked, setChecked] = useState(false)
  const handleSwitch = () => {
    setTheme((state) => (state === "SDAG" ? "Dark" : "SDAG"))
    setChecked(!checked)
  }

  //use Location for Logo or Back Home Component
  const location = useLocation()
  const isStartPage = location.pathname === "/"

  return(
    <div className="navbar" id={theme}>
      <div className="navbarWrapper">
        <div className="navigation">
          { isStartPage ? (
            <p>Smart Dynamic AG</p>
          ) : (
            <Link to="/">Back home</Link>
          )}

        </div>

        <div className="settings" onClick={handleMenuClick}>
          <Gear/>
          {menuOpen && 
            <div className="settingItems">
              <p>change style:</p>
              <button onClick={handleSwitch}>{theme === "SDAG" ? "Dark" : "SDAG"}</button>
            </div>
          }
        </div>
      </div>
    </div>
  )
}