import React, { createContext, useState } from "react";

export const GlobalVarContext = createContext();

export const VarContextProvider = ({ children }) => {
  // user input variables array
  const [portConfigs, setPortConfigs] = useState([
    {
      portNumber: 1,
      enable: false,
      portAlias: "",
      ipaddress: "",
      intNetmask: "",
      https: "",
      ping: "",
      addressRangeFrom: "",
      addressRangeTo: "",
      dhcpNetmask: "",
      dnsServer1: "",
      dnsServer2: "",
      enableDhcp: "disable",
    },
    {
      portNumber: 2,
      enable: false,
      portAlias: "",
      ipaddress: "",
      intNetmask: "",
      https: "",
      ping: "",
      addressRangeFrom: "",
      addressRangeTo: "",
      dhcpNetmask: "",
      dnsServer1: "",
      dnsServer2: "",
      enableDhcp: "disable",
    },
    {
      portNumber: 3,
      enable: false,
      portAlias: "",
      ipaddress: "",
      intNetmask: "",
      https: "",
      ping: "",
      addressRangeFrom: "",
      addressRangeTo: "",
      dhcpNetmask: "",
      dnsServer1: "",
      dnsServer2: "",
      enableDhcp: "disable",
    },
    {
      portNumber: "A",
      enable: false,
      portAlias: "",
      ipaddress: "",
      intNetmask: "",
      https: "",
      ping: "",
      addressRangeFrom: "",
      addressRangeTo: "",
      dhcpNetmask: "",
      dnsServer1: "",
      dnsServer2: "",
      enableDhcp: "disable",
    },
    {
      portNumber: "WAN",
      enable: false,
      portAlias: "",
      ipaddress: "",
      intNetmask: "",
      https: "",
      ping: "",
      addressRangeFrom: "",
      addressRangeTo: "",
      dhcpNetmask: "",
      dnsServer1: "",
      dnsServer2: "",
      enableDhcp: "disable",
    },
  ]);

  const [selectedPort, setSelectedPort] = useState(null);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  /* const handlePortClick = (portNumber) => {
    // your existing handlePortClick function
  };

  const handleConfigChange = (e, configKey) => {
    // your existing handleConfigChange function
  }; */

  // create a value object containing all the variables
  const value = {
    portConfigs,
    setPortConfigs,
    selectedPort,
    setSelectedPort,
    submenuOpen,
    setSubmenuOpen,
    //handlePortClick,
    //handleConfigChange,
  };

  return (
    <GlobalVarContext.Provider value={value}>
      {children}
    </GlobalVarContext.Provider>
  );
};
