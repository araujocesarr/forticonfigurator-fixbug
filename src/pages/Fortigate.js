import "../style/styles.css"
import { Link } from "react-router-dom";
import { useState } from "react";

import Clipboard from "../components/icons/Clipboard";
import Download from "../components/icons/Download"
import Mail from "../components/icons/Mail"

import Ports40F from "../components/ports/Ports40F";
import Ports60F from "../components/ports/Ports60F";
import Ports80F from "../components/ports/Ports80F";
import Ports100F from "../components/ports/Ports100F";
import Policy from "../components/standardconfigs/Policy"
import SipAlg from "../components/standardconfigs/SipAlg"
import Services from "../components/standardconfigs/Services";
import VPNUser from "../components/standardconfigs/VPNUser";

import useEffectHandler from "../components/utilities/UseEffectHandler";

export default function Fortigate () {

  //config changer
  const inputHandler = event => {
    setText(event.target.value);
  }
  
  //handle copy
  const copy = async () => {
    await navigator.clipboard.writeText(content);
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

  //const to handle forti config file
  const [text, setText] = useState('');
  const [hostname, setHostname] = useState('');
  const [idleTime, setIdleTime] = useState("");
  const [selectedConfig, setSelectedConfig] = useState("40F")
  const [data, setData] = useState(selectedConfig);
  const [content, setContent] = useState("")
  const [portConfig, setPortConfig] = useState(null);
  const [policy, setPolicy] = useState(true);
  const [services, setServices] = useState(true);
  const [vpnUser, setVpnUser] = useState(true);
  const [sipAlg, setSipAlg] = useState(true);

  //handleCheckbox state change
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "policy":
        setPolicy(checked);
        break;
      case "services":
        setServices(checked);
        break;
      case "vpnUser":
        setVpnUser(checked);
        break;
      case "sipAlg":
        setSipAlg(checked);
        break;
      default:
        break;
    }
  };
 
  //Config fetcher & variable writer
  useEffectHandler({selectedConfig, hostname, policy, services, vpnUser, sipAlg, idleTime,
    Policy, Services, VPNUser, SipAlg, setContent })

  return(    
    <div className="fortigate">
      <div className="configuration">
        <h1>Forticonfigurator</h1>

        {/*consig choose dropdown*/}
        <label>
          Wähle deine Konfigurationsdatei aus:
          <select defaultValue="40F" onChange={e => setSelectedConfig(e.target.value)} >
            <option value="40F">40F</option>
            <option value="60F">60F</option>
            <option value="80F">80F</option>
            <option value="100F">100F</option>
          </select>
        </label>

        <form>
          {/*hosname field*/}
          <div className="object">
            <label>
              Hostname: 
              <input 
                type="text" 
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
                  name="policy"
                  checked={policy}
                  onChange={handleCheckboxChange}
                />
              </li>

              <li>
                SDAG Services:
                <input 
                  type="checkbox"
                  name="services"
                  checked={services}
                  onChange={handleCheckboxChange}
                />
              </li>

              <li>
                VPN User:
                <input 
                  type="checkbox"
                  name="vpnUser" 
                  checked={vpnUser}
                  onChange={handleCheckboxChange}
                />
              </li>
              <li>
                shutdown SIP ALG:
                <input 
                  type="checkbox"
                  name="sipAlg"
                  checked={sipAlg}
                  onChange={handleCheckboxChange}
                />
              </li>
            </ol>
          </div>
          {/*idletimeout field*/}
          <div className="object">
            <label>
              idletimeout:
              <input type="text"
                name="idleTime" 
                value={idleTime} 
                placeholder="in minuten"
                onChange={e => setIdleTime(e.target.value)} 
              />
            </label>
          </div>
          
          <button type="reset" value="Reset Form">Reset</button>
        </form>
      </div>

        {/*functions(download, copy & send Mail) and config file*/}
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