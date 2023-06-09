import React, {useState, useContext} from "react";
import Ethernet from "../icons/Ethernet"
import { GlobalVarContext } from "../context/GlobalVarContext";

export default function Ports40F() {

  const [selectedPort, setSelectedPort] = useState(null);
  const [submenuOpen, setSubmenuOpen] = useState(false);
  // Global Variables
  const {int_1, setInt_1 } = useContext(GlobalVarContext);
  const {enableDhcp_1, setEnableDhcp_1} = useContext(GlobalVarContext);
  const {portAlias_1, setPortAlias_1} = useContext(GlobalVarContext);
  const {ipaddress_1, setIpaddress_1} = useContext(GlobalVarContext);
  const {intNetmask_1, setIntNetmask_1} = useContext(GlobalVarContext);
  const {https_1, setHttps_1} = useContext(GlobalVarContext);
  const {ping_1, setPing_1} = useContext(GlobalVarContext);
  const {defaultGateway_1, setDefaultGateway_1} = useContext(GlobalVarContext);
  const {addressRangeFrom_1, setAddressRangeFrom_1} = useContext(GlobalVarContext);
  const {addressRangeTo_1, setAddressRangeTo_1}  = useContext(GlobalVarContext);
  const {dhcpNetmask_1, setDhcpNetmask_1} = useContext(GlobalVarContext);
  const {dnsServer1_1, setDnsServer1_1} = useContext(GlobalVarContext);
  const {dnsServer2_1, setDnsServer2_1} = useContext(GlobalVarContext);

  const {int_2, setInt_2 } = useContext(GlobalVarContext);
  const {enableDhcp_2, setEnableDhcp_2} = useContext(GlobalVarContext);
  const {portAlias_2, setPortAlias_2} = useContext(GlobalVarContext);
  const {ipaddress_2, setIpaddress_2} = useContext(GlobalVarContext);
  const {intNetmask_2, setIntNetmask_2} = useContext(GlobalVarContext);
  const {https_2, setHttps_2} = useContext(GlobalVarContext);
  const {ping_2, setPing_2} = useContext(GlobalVarContext);
  const {addressRangeFrom_2, setAddressRangeFrom_2} = useContext(GlobalVarContext);
  const {addressRangeTo_2, setAddressRangeTo_2}  = useContext(GlobalVarContext);
  const {dhcpNetmask_2, setDhcpNetmask_2} = useContext(GlobalVarContext);
  const {dnsServer1_2, setDnsServer1_2} = useContext(GlobalVarContext);
  const {dnsServer2_2, setDnsServer2_2} = useContext(GlobalVarContext);

  const {int_3, setInt_3 } = useContext(GlobalVarContext);
  const {enableDhcp_3, setEnableDhcp_3} = useContext(GlobalVarContext);
  const {portAlias_3, setPortAlias_3} = useContext(GlobalVarContext);
  const {ipaddress_3, setIpaddress_3} = useContext(GlobalVarContext);
  const {intNetmask_3, setIntNetmask_3} = useContext(GlobalVarContext);
  const {https_3, setHttps_3} = useContext(GlobalVarContext);
  const {ping_3, setPing_3} = useContext(GlobalVarContext);
  const {addressRangeFrom_3, setAddressRangeFrom_3} = useContext(GlobalVarContext);
  const {addressRangeTo_3, setAddressRangeTo_3}  = useContext(GlobalVarContext);
  const {dhcpNetmask_3, setDhcpNetmask_3} = useContext(GlobalVarContext);
  const {dnsServer1_3, setDnsServer1_3} = useContext(GlobalVarContext);
  const {dnsServer2_3, setDnsServer2_3} = useContext(GlobalVarContext);

  const {int_A, setInt_A } = useContext(GlobalVarContext);
  const {enableDhcp_A, setEnableDhcp_A} = useContext(GlobalVarContext);
  const {portAlias_A, setPortAlias_A} = useContext(GlobalVarContext);
  const {ipaddress_A, setIpaddress_A} = useContext(GlobalVarContext);
  const {intNetmask_A, setIntNetmask_A} = useContext(GlobalVarContext);
  const {https_A, setHttps_A} = useContext(GlobalVarContext);
  const {ping_A, setPing_A} = useContext(GlobalVarContext);
  const {addressRangeFrom_A, setAddressRangeFrom_A} = useContext(GlobalVarContext);
  const {addressRangeTo_A, setAddressRangeTo_A}  = useContext(GlobalVarContext);
  const {dhcpNetmask_A, setDhcpNetmask_A} = useContext(GlobalVarContext);
  const {dnsServer1_A, setDnsServer1_A} = useContext(GlobalVarContext);
  const {dnsServer2_A, setDnsServer2_A} = useContext(GlobalVarContext);

  const {int_WAN, setInt_WAN } = useContext(GlobalVarContext);
  const {enableDhcp_WAN, setEnableDhcp_WAN} = useContext(GlobalVarContext);
  const {portAlias_WAN, setPortAlias_WAN} = useContext(GlobalVarContext);
  const {ipaddress_WAN, setIpaddress_WAN} = useContext(GlobalVarContext);
  const {intNetmask_WAN, setIntNetmask_WAN} = useContext(GlobalVarContext);
  const {https_WAN, setHttps_WAN} = useContext(GlobalVarContext);
  const {ping_WAN, setPing_WAN} = useContext(GlobalVarContext);
  const {addressRangeFrom_WAN, setAddressRangeFrom_WAN} = useContext(GlobalVarContext);
  const {addressRangeTo_WAN, setAddressRangeTo_WAN}  = useContext(GlobalVarContext);
  const {dhcpNetmask_WAN, setDhcpNetmask_WAN} = useContext(GlobalVarContext);
  const {dnsServer1_WAN, setDnsServer1_WAN} = useContext(GlobalVarContext);
  const {dnsServer2_WAN, setDnsServer2_WAN} = useContext(GlobalVarContext);
  
  //handle to open and close the "enable" menu
  const handlePortClick = (port) => {
    if (selectedPort === port) {
      setSubmenuOpen(!submenuOpen);
    } else {
      setSelectedPort(port);
      setSubmenuOpen(true);
    }
  };

  //handleCheckbox state change
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    switch (name) {
      case "int_1": setInt_1(checked);
        break;
      case "enableDhcp_1": setEnableDhcp_1(checked);
        break;
      case "https_1": setHttps_1(checked);
      break;
      case "ping_1": setPing_1(checked);
      break;
        case "int_2": setInt_2(checked);
        break;
      case "enableDhcp_2": setEnableDhcp_2(checked);
        break;
        case "int_3": setInt_3(checked);
        break;
      case "enableDhcp_3": setEnableDhcp_3(checked);
        break;
        case "int_A": setInt_A(checked);
        break;
      case "enableDhcp_A": setEnableDhcp_A(checked);
        break;
        case "int_WAN": setInt_WAN(checked);
        break;
      case "enableDhcp_WAN": setEnableDhcp_WAN(checked);
        break;
      default:
        break;
    }
  };
  console.log(defaultGateway_1);
  return (
    <div className="ports">
      {/*Interface chooser*/}
      <div className="port">
        <label className={selectedPort === 1 ? 'active' : ''}  onClick={() => handlePortClick(1)}>
          <p>1</p>
          <Ethernet />
        </label>
        <label className={selectedPort === 2 ? 'active' : ''} onClick={() => handlePortClick(2)}>
          <p>2</p>
          <Ethernet />
        </label>
        <label className={selectedPort === 3 ? 'active' : ''} onClick={() => handlePortClick(3)}>
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
        {submenuOpen && (
          <div className="submenu">
            <form>
              <ol>
                <li>
                  enable:
                  <input 
                      type="checkbox"
                      name="int_1"
                      checked={int_1} 
                      onChange={handleCheckboxChange}
                  />
                </li>

                <li>
                  Port Alias
                  <input 
                    type="text" 
                    name="portAlias_1"
                    placeholder="LAN_XY"
                    value={portAlias_1} 
                    onChange={e => setPortAlias_1(e.target.value)}  
                  />
                </li>
                <li>
                  IP
                  <input
                    type="text" 
                    name="ipaddress_1"
                    placeholder="192.168.1.0"
                    value={ipaddress_1}
                    onChange={e => setIpaddress_1(e.target.value)}  
                  />
                </li>
                <li>
                  Subnetz
                  <input 
                    type="text" 
                    name="intNetmask_1" 
                    placeholder="255.255.255.0"
                    value={intNetmask_1} 
                    onChange={e => setIntNetmask_1(e.target.value)}  
                  />
                </li>
                  <div className="adminaccess">
                    <ol>
                    <p>Admin Access:</p>
                      <li>
                        https:
                        <input 
                          type="checkbox"
                          name="https_1"
                          checked={https_1} 
                          onChange={handleCheckboxChange}
                        />
                      </li>
                      <li>
                        Ping:
                        <input 
                          type="checkbox"
                          name="ping_1"
                          checked={ping_1} 
                          onChange={handleCheckboxChange}
                        />
                      </li>
                    </ol>
                  </div>
              </ol>
            {/*activate DHCP*/}
              <div className="object">
                <label>
                DHCP Server
                  <input 
                      type="checkbox"
                      name="enableDhcp_1"
                      checked={enableDhcp_1} 
                      onChange={handleCheckboxChange}
                  />
                  </label>
              </div>
                <div className="dhcpmenu">
                  <form>
                    <ol>
                     <li>
                        default Gateway:
                        <input 
                          type="text" 
                          name="defaultGateway_1" 
                          placeholder="192.168.1.1"
                          value={defaultGateway_1} 
                          onChange={e => setDefaultGateway_1(e.target.value)}  
                        />
                      </li>
                      <li>
                        Netmask
                        <input 
                          type="text" 
                          name="dhcpNetmask_1" 
                          placeholder="255.255.255.0"
                          value={dhcpNetmask_1} 
                          onChange={e => setDhcpNetmask_1(e.target.value)}  
                        />
                      </li>
                      Adress Range:
                      <li>
                        From:
                        <input 
                          type="text" 
                          name="addressRangeFrom_1" 
                          placeholder="192.168.1.100"
                          value={addressRangeFrom_1} 
                          onChange={e => setAddressRangeFrom_1(e.target.value)}  
                        />
                      </li>
                      <li>
                        To:
                        <input 
                          type="text" 
                          name="addressRangeTo_1" 
                          placeholder="192.168.1.200"
                          value={addressRangeTo_1} 
                          onChange={e => setAddressRangeTo_1(e.target.value)}
                        />
                      </li>

                      <li>
                          DNS Server 1
                          <input 
                            type="text" 
                            name="dnsServer1_1" 
                            placeholder="1.1.1.1"
                            value={dnsServer1_1} 
                            onChange={e => setDnsServer1_1(e.target.value)}  
                          />
                      </li>
                      <li>
                          DNS Server 2
                          <input 
                            type="text" 
                            name="dnsServer2_1"
                            placeholder="8.8.8.8"
                            value={dnsServer2_1} 
                            onChange={e => setDnsServer2_1(e.target.value)}
                          />
                      </li>
                    </ol>
                  </form>
                </div>
            </form>
          </div>
        )} 
      </div>

    </div>
    
  )
}