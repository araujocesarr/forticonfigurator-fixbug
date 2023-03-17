import "../style/styles.css"
import Forti60F from "../components/configfiles/Forti60F"
import Configurator from "../components/Configurator";
import Clipboard from "../components/icons/Clipboard";
import { useState } from "react";

export default function Fortigate () {

  const [text, setText] = useState('');

  const inputHandler = event => {
    setText(event.target.value);
  }

  const copy = async () => {
    await navigator.clipboard.writeText(text);
    alert('Konfiguration wurde Kopiert');
  }

  return(
    <div className="fortigate">
      <Configurator />

      <div className="textfile">
        <button onClick={copy} disabled={!text}><Clipboard />
        </button>

        <label>
          <input type="text" name="email" placeholder="c.hernandez@smartdynamic.ch"/>
          <button>Send</button>
        </label>

        <div className="rawconfig">
          <h3>Fortigate Konfig:</h3>
          <textarea type="text" spellCheck="false" value={Forti60F} onChange={inputHandler}>
          </textarea>
        </div>
      </div>
    </div>
  );
}