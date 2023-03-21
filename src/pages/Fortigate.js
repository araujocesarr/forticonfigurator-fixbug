import "../style/styles.css"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Clipboard from "../components/icons/Clipboard";
import { useThemeContext } from "../components/context/ThemeContext";

export default function Fortigate () {
  //change Style
  const {setTheme} = useThemeContext()

  const [checked, setChecked] = useState(false)
  const handleSwitch = () => {
    setTheme((state) => (state === "sdagStyle" ? "darkStyle" : "sdagStyle"))
    setChecked(!checked)
  }
  
  //handle text
  const [text, setText] = useState('');

  const inputHandler = event => {
    setText(event.target.value);
  }
  //handle copy
  const copy = async () => {
    await navigator.clipboard.writeText(data);
    alert('Konfiguration wurde Kopiert');
    console.log(text)
  }

  //handlesubmit:
  function handleSubmit(e) {
    e.preventDefault();
    // Read the form data
    const form = e.target;
    const formData = new FormData(form);
    // You can pass formData as a fetch body directly:
    fetch('/some-api', { method: form.method, body: formData });
    // You can generate a URL out of it, as the browser does by default:
    console.log(new URLSearchParams(formData).toString());
    // You can work with it as a plain object.
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson); // (!) This doesn't include multiple select values
    // Or you can get an array of name-value pairs.
    console.log([...formData.entries()]);
  }

  //handle forti config file
  const [selectedConfig, setSelectedConfig] = useState("60F")
  const [data, setData] = useState(selectedConfig);
  const [content, setContent] = useState()
  
  useEffect(() => {

    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/configFiles/${selectedConfig}`);
        setData(response.data);

        const hostname = "testingmatters";
        const vlan = "99";
        const regexHostname = new RegExp('{hostname}', 'g');
        const regexVlan = new RegExp('{vlan}', 'g');

        const replacedText = response.data
        .replace(regexHostname, hostname)
        .replace(regexVlan, vlan);

        setContent(replacedText)

        console.log(replacedText)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [selectedConfig]);

  return(
    
    <div className="fortigate">
      <div className="configuration">
        <h1>FortiGate Konfigurations Seite!</h1>

        <label>
          Wähle deine Konfigurationsdatei aus:
          <select defaultValue="60F" onChange={e => setSelectedConfig(e.target.value)} >
            <option value="40F">40F</option>
            <option value="60F">60F</option>
            <option value="80F">80F</option>
            <option value="100F">100F</option>
          </select>
        </label>

        <form onSubmit={handleSubmit}>
          <label>
              Hostname:
              <input type="text" name="hostname" />
          </label>
          <input type="submit" value="Submit" />
          <button type="reset">Reset</button>
        </form>
        <button onClick={handleSwitch}>change style</button>
        <Link to="/">Back home</Link>
      </div>

      <div className="textfile">
        <button onClick={copy}><Clipboard />
        </button>

        <label>
          <input type="text" name="email" placeholder="c.hernandez@smartdynamic.ch"/>
          <button>Send</button>
        </label>

        <div className="rawconfig">
          <h3>wähle zuerst eine Konfigurationsdatei aus</h3>
          <h3>Konfig für {selectedConfig}</h3>
          <textarea type="text" spellCheck="false" value={content} onChange={inputHandler}>
          </textarea>
        </div>
      </div>
    </div>
  );
}