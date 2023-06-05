import React, {useState} from "react";
import Ethernet from "../icons/Ethernet"

import IntWAN from "../standardconfigs/portconfig/IntWAN";
import Int1 from "../standardconfigs/portconfig/Int1";
import Int2 from "../standardconfigs/portconfig/Int2";
import Int3 from "../standardconfigs/portconfig/Int3";
import IntA from "../standardconfigs/portconfig/IntA";

export default function Ports40F() {

  const [selectedPort, setSelectedPort] = useState(null);
  const [isActive, setIsActive] = useState(null)
  const [enableDhcp, setEnableDhcp] = useState("disable")
  console.log(enableDhcp)


  //user input variables array
  const [portConfigs, setPortConfigs] = useState([
    { portNumber: 1, activate:'', portAlias_1:'', ipaddress_1:'', intNetmask_1: '', https_1:"", ping_1:"", addressRangeFrom_1:'',addressRangeTo_1:'', dhcpNetmask_1:'', dnsServer1_1:'', dnsServer2_1:''},
    { portNumber: 2, activate:'', portAlias:'', ipaddress:'', Netmask: '', https:"", ping:"", addressRangeFrom:'',addressRangeTo:'', netmask:'', dnsServer1:'', dnsServer2:''},
    { portNumber: 3, activate:'', portAlias:'', ipaddress:'', Netmask: '', https:"", ping:"", addressRangeFrom:'',addressRangeTo:'', netmask:'', dnsServer1:'', dnsServer2:''},
    { portNumber: "A", activate:'', portAlias:'', ipaddress:'', Netmask: '', https:"", ping:"", addressRangeFrom:'',addressRangeTo:'', netmask:'', dnsServer1:'', dnsServer2:''},
    { portNumber: "WAN", activate:'', portAlias:'', ipaddress:'', Netmask: '', https:"", ping:"", addressRangeFrom:'',addressRangeTo:'', netmask:'', dnsServer1:'', dnsServer2:''},
  ]);
  
  const handlePortClick = (portNumber) => {
    if (portNumber === selectedPort) {
      setSelectedPort(null);
      setIsActive(false);
    } else {
      setSelectedPort(portNumber);
      setIsActive(true);
    }
  }

  const handleConfigChange = (e, configKey) => {
    const updatedPortConfigs = [...portConfigs];
    const index = updatedPortConfigs.findIndex(config => config.portNumber === selectedPort);
    updatedPortConfigs[index][configKey] = e.target.value;

    if (configKey === 'activate') {
      updatedPortConfigs[index][configKey] = e.target.checked;
    }
    setPortConfigs(updatedPortConfigs);
  }

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
                      name="activate"
                      checked={portConfigs.find(config => config.portNumber === selectedPort).activate} 
                      onChange={e => handleConfigChange(e, 'activate')}
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
                    name="ipNetmask" 
                    placeholder="192.168.1.0"
                    value={portConfigs.find(config => config.portNumber === selectedPort).ip} 
                    onChange={e => handleConfigChange(e, 'ip')}  
                  />
                </li>
                <li>
                  Subnetz
                  <input 
                    type="text" 
                    name="subnet" 
                    placeholder="255.255.255.0"
                    value={portConfigs.find(config => config.portNumber === selectedPort).subnet} 
                    onChange={e => handleConfigChange(e, 'subnet')}  
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
                  <select defaultValue="disable" onChange={e => setEnableDhcp(e.target.value)}>
                    <option>disable</option>
                    <option>enable</option>
                  </select>
                </label>
              </div>
              {enableDhcp !== "disable" && (
                <div className="dhcpmenu">
                  <form>
                    <ol>
                      Adress Range:
                      <li>
                          From:
                          <input 
                            type="text" 
                            name="addressRange" 
                            placeholder="192.168.1.100"
                            value={portConfigs.find(config => config.portNumber === selectedPort).ipAddress} 
                            onChange={e => handleConfigChange(e, 'addressRangeFrom')}  
                          />
                      </li>
                      <li>
                          To:
                          <input 
                            type="text" 
                            name="addressRange" 
                            placeholder="192.168.1.200"
                            value={portConfigs.find(config => config.portNumber === selectedPort).ipAddress} 
                            onChange={e => handleConfigChange(e, 'addressRangeTo')}  
                          />
                      </li>
                      <li>
                          Netmask
                          <input 
                            type="text" 
                            name="netmask" 
                            placeholder="255.255.255.0"
                            value={portConfigs.find(config => config.portNumber === selectedPort).netmask} 
                            onChange={e => handleConfigChange(e, 'netmask')}  
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