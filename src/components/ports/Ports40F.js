import React, {useState} from "react";
import Ethernet from "../icons/Ethernet"

import useEffectHandler from "../utilities/UseEffectHandler"

import IntWAN from "../standardconfigs/portconfig/IntWAN";
import Int1 from "../standardconfigs/portconfig/Int1";
import Int2 from "../standardconfigs/portconfig/Int2";
import Int3 from "../standardconfigs/portconfig/Int3";
import IntA from "../standardconfigs/portconfig/IntA";

export default function Ports40F() {

  //user input variables array
  const [portConfigs, setPortConfigs] = useState([
    { portNumber: 1, enable: false, portAlias:'', ipaddress:'', intNetmask: '', https:"", ping:"", addressRangeFrom:'',addressRangeTo:'', dhcpNetmask:'', dnsServer1:'', dnsServer2:'', enableDhcp: "disable"},
    { portNumber: 2, enable: false, portAlias:'', ipaddress:'', intNetmask: '', https:"", ping:"", addressRangeFrom:'',addressRangeTo:'', dhcpNetmask:'', dnsServer1:'', dnsServer2:'', enableDhcp: "disable"},
    { portNumber: 3, enable: false, portAlias:'', ipaddress:'', intNetmask: '', https:"", ping:"", addressRangeFrom:'',addressRangeTo:'', dhcpNetmask:'', dnsServer1:'', dnsServer2:'', enableDhcp: "disable"},
    { portNumber: "A", enable: false, portAlias:'', ipaddress:'', intNetmask: '', https:"", ping:"", addressRangeFrom:'',addressRangeTo:'', dhcpNetmask:'', dnsServer1:'', dnsServer2:'', enableDhcp: "disable"},
    { portNumber: "WAN", enable: false, portAlias:'', ipaddress:'', intNetmask: '', https:"", ping:"", addressRangeFrom:'',addressRangeTo:'', dhcpNetmask:'', dnsServer1:'', dnsServer2:'', enableDhcp: "disable"},
  ]);
  
  const [selectedPort, setSelectedPort] = useState(null);

  // Updated useState hooks
  const [int1, setInt1] = useState(selectedPort === 1 || selectedPort === null);
  const [int2, setInt2] = useState(selectedPort === 2 || selectedPort === null);
  const [int3, setInt3] = useState(selectedPort === 3 || selectedPort === null);
  const [intA, setIntA] = useState(selectedPort === "A" || selectedPort === null);
  const [intWAN, setIntWAN] = useState(selectedPort === "WAN" || selectedPort === null);

  const handlePortClick = (portNumber) => {
    if (portNumber === selectedPort) {
      setSelectedPort(null);
      setInt1(false);
      setInt2(false);
      setInt3(false);
      setIntA(false);
      setIntWAN(false);
    } else {
      setSelectedPort(portNumber);
      setInt1(portNumber === 1);
      setInt2(portNumber === 2);
      setInt3(portNumber === 3);
      setIntA(portNumber === "A");
      setIntWAN(portNumber === "WAN");
    }
  };

  const handleConfigChange = (e, configKey) => {
    const updatedPortConfigs = [...portConfigs];
    const index = updatedPortConfigs.findIndex((config) => config.portNumber === selectedPort);
  
    if (configKey === "enable") {
      updatedPortConfigs[index][configKey] = e.target.checked;
      setInt1(e.target.checked);
    } else {
      updatedPortConfigs[index][configKey] = e.target.value;
    }
  
    if (configKey === "enableDhcp") {
      updatedPortConfigs.forEach((config) => {
        if (config.portNumber === selectedPort) {
          config.enableDhcp = e.target.value;
        } else {
          config.enableDhcp = "disable";
        }
      });
    }
    setPortConfigs(updatedPortConfigs);
  };
  
  useEffectHandler({ int1, Int1, int2, Int2, int3, Int3, intA, IntA, intWAN, IntWAN });

  return (
    <div className="ports">

      {/*Interface chooser*/}
      <div className="port">
        <label className={selectedPort === 1 ? 'active' : ''}  onClick={() => handlePortClick(1)} >
          <p>1</p>
          <Ethernet />
        </label >
        <label className={selectedPort === 2 ? 'active' : ''} onClick={() => handlePortClick(2)}>
          <p>2</p>
          <Ethernet />
        </label>
        <label className={selectedPort === 3 ? 'active' : ''}  onClick={() => handlePortClick(3)}>
          <p>3</p>
          <Ethernet />
        </label>
        <label className={selectedPort === "A" ? 'active' : ''} onClick={() => handlePortClick("A")}>
          <p>A</p>
          <Ethernet />
        </label>
        <label className={selectedPort === "WAN" ? 'active' : ''} onClick={() => handlePortClick("WAN")}>
          <p>WAN</p>
          <Ethernet />
        </label>
      </div>
      {/*Interface Options*/}
      <div className="menu">
        {selectedPort !== null && (
          <div className="submenu">
            <form>
              <ol>
                <li>
                  enable:
                  <input 
                      type="checkbox"
                      name="enable"
                      checked={portConfigs.find(config => config.portNumber === selectedPort).enable} 
                      onChange={e => handleConfigChange(e, 'enable')}
                    />
                </li>
                <li>
                  Port Alias
                  <input 
                    type="text" 
                    name="portAlias"
                    placeholder="LAN_XY"
                    value={portConfigs.find(config => config.portNumber === selectedPort).portAlias} 
                    onChange={e => handleConfigChange(e, 'portAlias')}  
                  />
                </li>
                <li>
                  IP
                  <input
                    type="text" 
                    name="ipaddress"
                    placeholder="192.168.1.0"
                    value={portConfigs.find(config => config.portNumber === selectedPort).ipaddress} 
                    onChange={e => handleConfigChange(e, 'ipaddress')}  
                  />
                </li>
                <li>
                  Subnetz
                  <input 
                    type="text" 
                    name="intNetmask" 
                    placeholder="255.255.255.0"
                    value={portConfigs.find(config => config.portNumber === selectedPort).intNetmask} 
                    onChange={e => handleConfigChange(e, 'intNetmask')}  
                  />
                </li>
                  <div className="adminaccess">
                    <ol>
                    <p>Admin Access:</p>
                      <li>
                        https:
                        <input 
                          type="checkbox"
                          name="https" 
                          checked={portConfigs.find(config => config.portNumber === selectedPort).https} 
                          onChange={e => handleConfigChange(e, 'https')}
                        />
                      </li>
                      <li>
                        Ping:
                        <input 
                          type="checkbox"
                          name="ping"
                          checked={portConfigs.find(config => config.portNumber === selectedPort).ping} 
                          onChange={e => handleConfigChange(e, 'ping')}
                        />
                      </li>
                    </ol>
                  </div>
              </ol>
            {/*activate DHCP*/}
              <div className="object">
                <label>
                DHCP Server
                  <select
                    value={portConfigs.find(config => config.portNumber === selectedPort).enableDhcp}
                    onChange={e => handleConfigChange(e, 'enableDhcp')}
                  >
                    <option value="disable">disable</option>
                    <option value="enable">enable</option>
                  </select>
                </label>
              </div>
              {portConfigs.find(config => config.portNumber === selectedPort).enableDhcp === "enable" && (
                <div className="dhcpmenu">
                  <form>
                    <ol>
                      Adress Range:
                      <li>
                          From:
                          <input 
                            type="text" 
                            name="addressRangeFrom" 
                            placeholder="192.168.1.100"
                            value={portConfigs.find(config => config.portNumber === selectedPort).addressRangeFrom} 
                            onChange={e => handleConfigChange(e, 'addressRangeFrom')}  
                          />
                      </li>
                      <li>
                          To:
                          <input 
                            type="text" 
                            name="addressRangeTo" 
                            placeholder="192.168.1.200"
                            value={portConfigs.find(config => config.portNumber === selectedPort).addressRangeTo} 
                            onChange={e => handleConfigChange(e, 'addressRangeTo')}  
                          />
                      </li>
                      <li>
                          Netmask
                          <input 
                            type="text" 
                            name="dhcpNetmask" 
                            placeholder="255.255.255.0"
                            value={portConfigs.find(config => config.portNumber === selectedPort).dhcpNetmask} 
                            onChange={e => handleConfigChange(e, 'dhcpNetmask')}  
                          />
                      </li>
                      <li>
                          DNS Server 1
                          <input 
                            type="text" 
                            name="dnsServer1" 
                            placeholder="1.1.1.1"
                            value={portConfigs.find(config => config.portNumber === selectedPort).dnsServer1} 
                            onChange={e => handleConfigChange(e, 'dnsServer1')}  
                          />
                      </li>
                      <li>
                          DNS Server 2
                          <input 
                            type="text" 
                            name="dnsServer2"
                            placeholder="8.8.8.8"
                            value={portConfigs.find(config => config.portNumber === selectedPort).dnsServer2} 
                            onChange={e => handleConfigChange(e, 'dnsServer2')}
                          />
                      </li>
                    </ol>
                  </form>
                </div>
                )
              }
            </form>
          </div>
        )}
      </div>

    </div>
  )
}