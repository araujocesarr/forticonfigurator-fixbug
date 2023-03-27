import "../style/styles.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Clipboard from "../components/icons/Clipboard";
import Download from "../components/icons/Download"

export default function Fortigate () {
 
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

  //handle forti config file
  const [selectedConfig, setSelectedConfig] = useState("60F")
  const [data, setData] = useState(selectedConfig);
  const [content, setContent] = useState()
  //user input variables
  const [hostname, setHostname] = useState('');
  const [vlan, setVlan] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/configFiles/${selectedConfig}`);
        setData(response.data);

        const regexHostname = new RegExp('{hostname}', 'g');
        const regexVlan = new RegExp('{vlan}', 'g');
        const replacedText = response.data
        .replace(regexHostname, hostname)
        .replace(regexVlan, vlan);
        setContent(replacedText)
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [selectedConfig, hostname, vlan]);

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

        <form>
          <div className="object">
            <label>
                Hostname:
                <input type="text" name="hostname" value={hostname} onChange={e => setHostname(e.target.value)} />
            </label>
          </div>
          <div className="object">
            <label>
                Which Vlans you want?:
                <input type="text" name="vlan" value={vlan} onChange={e => setVlan(e.target.value)}/>
            </label>
          </div>
          <div className="object">
            <label>
                Test 
                <input type="text" name="test" />
            </label>
          </div>
          <input type="submit" value="Submit" />
          <button type="reset">Reset</button>
        </form>
      </div>

      <div className="textfile">
        <Link onClick={copy}><Clipboard /></Link>
        <Link to="test.txt" download><Download/></Link>
        <label>
          <input type="text" name="email" placeholder="c.hernandez@smartdynamic.ch"/>
          <button>Send</button>
        </label>

        <div className="rawconfig">

          <h3>Konfig für {selectedConfig}</h3>
          <textarea type="text" spellCheck="false" value={content} onChange={inputHandler}>
          </textarea>
        </div>
      </div>
    </div>
  );
}