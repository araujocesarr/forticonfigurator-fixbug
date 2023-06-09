import { Link } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
// Style
import "../style/styles.css"
// External Dependencies
import Clipboard from "../components/icons/Clipboard";
import Download from "../components/icons/Download"
import Mail from "../components/icons/Mail"
// Internal Components
import Ports40F from "../components/ports/Ports40F";
import Ports60F from "../components/ports/Ports60F";
import Ports80F from "../components/ports/Ports80F";
import Ports100F from "../components/ports/Ports100F";
import Policy from "../components/standardconfigs/Policy"
import SipAlg from "../components/standardconfigs/SipAlg"
import Services from "../components/standardconfigs/Services";
import VPNUser from "../components/standardconfigs/VPNUser";

import { GlobalVarContext } from "../components/context/GlobalVarContext";
import Int1 from "../components/standardconfigs/portconfig/Int1"
import DHCPServ1 from "../components/standardconfigs/dhcpconfig/DHCPServ1";
import Int2 from "../components/standardconfigs/portconfig/Int2"
import DHCPServ2 from "../components/standardconfigs/dhcpconfig/DHCPServ2";
import Int3 from "../components/standardconfigs/portconfig/Int3"
import DHCPServ3 from "../components/standardconfigs/dhcpconfig/DHCPServ3";
import IntA from "../components/standardconfigs/portconfig/IntA"
import DHCPServA from "../components/standardconfigs/dhcpconfig/DHCPServA";
import IntWAN from "../components/standardconfigs/portconfig/IntWAN"

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

  const { int_1, enableDhcp_1, portAlias_1, ipaddress_1, intNetmask_1, https_1, ping_1, defaultGateway_1, addressRangeFrom_1, addressRangeTo_1, dhcpNetmask_1, dnsServer1_1, dnsServer2_1,
    int_2, enableDhcp_2,
    int_3, enableDhcp_3,
    int_A, enableDhcp_A,
    int_WAN
   } = useContext(GlobalVarContext);

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
      case "policy": setPolicy(checked);
        break;
      case "services": setServices(checked);
        break;
      case "vpnUser": setVpnUser(checked);
        break;
      case "sipAlg": setSipAlg(checked);
      break;
      default:
      break;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/configFiles/${selectedConfig}`);
        console.log(response)
        const regexHostname = new RegExp('{hostname}', 'g');
        const regexIdleTime = new RegExp('{idletimeout}', 'g');

        // poort 1
        const regexPortAlias_1 = new RegExp('{portAlias_1}', 'g')
        const regexIpaddress_1 = new RegExp('{ipaddress_1}', 'g')
        const regexIntNetmask_1 = new RegExp('{intNetmask_1}', 'g')
        const regexDefaultGateway_1 = new RegExp('{defaultGateway_1}', 'g')
        const regexDhcpNetmask_1 = new RegExp('{dhcpNetmask_1}', 'g')
        const regexAddressRangeFrom_1 = new RegExp('{addressRangeFrom_1}', 'g')
        const regexAddressRangeTo_1 = new RegExp('{addressRangeTo_1}', 'g')
        const regexDnsServer1_1 = new RegExp('{dnsServer1_1}', 'g')
        const regexDnsServer2_1 = new RegExp('{dnsServer2_1}', 'g')

        const replacedText = response.data
          //replace data comming from "Fortigate.js"
          .replace(regexHostname, hostname)
          .replace(regexIdleTime, idleTime)
          .replace('{policy}', policy ? Policy : '')
          .replace('{services}', services ? Services : '')
          .replace('{vpnuser}', vpnUser ? VPNUser : '')
          .replace('{sipalg}', sipAlg ? SipAlg : '')
          
          .replace('{int_1}', int_1 ? Int1 : '')
          .replace('{dhcp_1}', enableDhcp_1 ? DHCPServ1 : '')
          .replace(regexPortAlias_1, portAlias_1)
          .replace(regexIpaddress_1, ipaddress_1)
          .replace(regexIntNetmask_1, intNetmask_1)
          .replace('{https_1}', https_1 ? "https" : '')
          .replace('{ping_1}', ping_1 ? "ping" : '')
          .replace(regexDefaultGateway_1, defaultGateway_1)
          .replace(regexDhcpNetmask_1, dhcpNetmask_1)
          .replace(regexAddressRangeFrom_1, addressRangeFrom_1)
          .replace(regexAddressRangeTo_1, addressRangeTo_1)
          .replace(regexDnsServer1_1, dnsServer1_1)
          .replace(regexDnsServer2_1, dnsServer2_1)

          .replace('{int_2}', int_2 ? Int2 : '')
          .replace('{dhcp_2}', enableDhcp_2 ? DHCPServ2 : '')
          .replace('{int_3}', int_3 ? Int3 : '')
          .replace('{dhcp_3}', enableDhcp_3 ? DHCPServ3 : '')
          .replace('{int_A}', int_A ? IntA : '')
          .replace('{dhcp_A}', enableDhcp_A ? DHCPServA : '')
          .replace('{int_WAN}', int_WAN ? IntWAN : '')
          setContent(replacedText)
        } catch (error) {
          console.log(error);
        }
        console.log(defaultGateway_1);
      };
      fetchData();

  }, [selectedConfig, hostname, policy, services, vpnUser, sipAlg, idleTime,
    int_1, enableDhcp_1, portAlias_1,  ipaddress_1, intNetmask_1, https_1, ping_1, defaultGateway_1, addressRangeFrom_1, addressRangeTo_1, dhcpNetmask_1, dnsServer1_1, dnsServer2_1,
    int_2, enableDhcp_2,
    int_3, enableDhcp_3,
    int_A, enableDhcp_A,
    int_WAN
   ]);

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

        {/*change values of config file*/}
        <div className="rawconfig">
          <h3>Konfig für {selectedConfig}</h3>
          <textarea type="text" spellCheck="false" value={content} onChange={inputHandler} />
        </div>
      </div>
    </div>
  );
}