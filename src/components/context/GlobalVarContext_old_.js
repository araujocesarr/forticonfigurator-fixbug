import React, { createContext, useState } from "react";

export const GlobalVarContext = createContext();

export const VarContextProvider = ({ children }) => {
  // user input variables array
  const [portConfigs, setPortConfigs] = useState([
    // your existing portConfigs array
  ]);

  const [selectedPort, setSelectedPort] = useState(null);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  const handlePortClick = (portNumber) => {
    // your existing handlePortClick function
  };

  const handleConfigChange = (e, configKey) => {
    // your existing handleConfigChange function
  };

  // create a value object containing all the variables
  const value = {
    portConfigs,
    setPortConfigs,
    selectedPort,
    setSelectedPort,
    submenuOpen,
    setSubmenuOpen,
    handlePortClick,
    handleConfigChange,
  };

  return (
    <GlobalVarContext.Provider value={value}>
      {children}
    </GlobalVarContext.Provider>
  );
};
