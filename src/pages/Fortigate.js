import "../style/styles.css"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Clipboard from "../components/icons/Clipboard";
import Download from "../components/icons/Download"
import Mail from "../components/icons/Mail"
import Ports40F from "../components/ports/Ports40F";
import Ports60F from "../components/ports/Ports60F";
import Ports80F from "../components/ports/Ports80F";
import Ports100F from "../components/ports/Ports100F";

export default function Fortigate () {
 
  const inputHandler = event => {
    setText(event.target.value);
  }
  
  //handle copy
  const copy = async () => {
    await navigator.clipboard.writeText(data);
    alert('Konfiguration wurde Kopiert');
  }

  //handle Download
  function downloadFile(){
    const element = document.createElement("a");
    const file = new Blob([content], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "config.txt";
    document.body.appendChild(element); // Required for this to work in FireFox
    element.click();
  }
  //handle forti config file
  const [text, setText] = useState('');
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
        <h1>Forticonfigurator</h1>

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
              <input type="text" 
                name="hostname" 
                value={hostname} 
                placeholder="SDAGFW01"
                onChange={e => setHostname(e.target.value)} 
              />
            </label>
          </div>

          {selectedConfig === '40F' && <Ports40F />}
          {selectedConfig === '60F' && <Ports60F />}
          {selectedConfig === '80F' && <Ports80F />}
          {selectedConfig === '100F' && <Ports100F />}
          <div className="sdagstandards">
            <p>Which SDAG Standards you want to activate?</p>
            <ol>
              <li>
                Policies:
                <input 
                  type="checkbox"
                  name="https"
                  defaultChecked="yes"
                />
              </li>

              <li>
                Services:
                <input 
                  type="checkbox"
                  name="https"
                  defaultChecked="yes" 
                />
              </li>

              <li>
                VPN User:
                <input 
                  type="checkbox"
                  name="https" 
                  defaultChecked="yes"
                />
              </li>
              <li>
                SIP ALG:
                <input 
                  type="checkbox"
                  name="https"
                  defaultChecked="yes"
                />
              </li>
            </ol>
          </div>
          <button type="reset" value="Reset Form">Reset</button>
        </form>
      </div>

      <div className="textfile">
        <Link onClick={copy}><Clipboard /></Link>
        <Link onClick={downloadFile} download><Download/></Link>
        <Link to='#' onClick={() => window.location = 'mailto:'}><Mail /></Link>

        <div className="rawconfig">
          <h3>Konfig für {selectedConfig}</h3>
          <textarea type="text" spellCheck="false" value={content} onChange={inputHandler} />
        </div>
      </div>
    </div>
  );
}