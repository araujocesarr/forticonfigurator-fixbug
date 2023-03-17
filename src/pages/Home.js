import "../style/styles.css"
import { useState } from "react";
import { Link } from "react-router-dom";
import { useThemeContext } from "../components/context/ThemeContext";

import Arrow from "../components/icons/arrow"

export default function Home () {

  const {theme, setTheme} = useThemeContext()

  const [checked, setChecked] = useState(false)
  const handleSwitch = () => {
    setTheme((state) => (state === "sdagStyle" ? "darkStyle" : "sdagStyle"))
    setChecked(!checked)
  }

  return(
    <div className="home" id={theme}>
      <div className="devices">
        <h1>Konfigurator</h1>
        <p>Wähle das Produkt, wofür du eine Konfigurationsdatei erstellen möchtest:</p>
        <Link to="fortigate"><Arrow /> Fortigate</Link>
      </div>
      <div className="contact">
        <p>für Änderungen oder andere Anliegen kann ein Mail an &nbsp;
          <Link to='javascript:void(0)' onClick={() => window.location = 'mailto:c.hernandez@smartdynamic.ch'}>
            c.hernandez@smartdynamic.ch 
          </Link>
        &nbsp; gemacht werden</p>
      </div>
      <div className="themeChanger">
        <p>Wechsle dein Style</p>
        <button onClick={handleSwitch}>change style</button>
      </div>
    </div>
  );
}