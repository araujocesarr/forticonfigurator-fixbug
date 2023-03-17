import "../style/styles.css"
import Forti60F from "../components/configfiles/Forti60F"
import Configurator from "../components/Configurator";
import Clipboard from "../components/icons/Clipboard";
import { useState } from "react";
import { useThemeContext } from "../components/context/ThemeContext";

export default function Fortigate () {

  const [text, setText] = useState('');

  const inputHandler = event => {
    setText(event.target.value);
  }

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert('Konfiguration wurde Kopiert');
  }
  //ThemeContext
  const {theme} = useThemeContext() 

  return(
    <div className="fortigate" id={theme}>
      <Configurator />

      <div className="textfile">
        <label>
          <input type="text" name="email" placeholder="c.hernandez@smartdynamic.ch"/>
          <input type="submit" value="send config" />
        </label>

        <button onClick={copy} disabled={!text}><Clipboard />
        </button>

        <div className="rawconfig">
          <h3>Fortigate Konfig:</h3>
          <textarea type="text" spellcheck="false" value={Forti60F} onChange={inputHandler}>
          </textarea>
        </div>
      </div>
    </div>
  );
}