import React, { createContext, useState } from "react";

export const GlobalVarContext = createContext();

export const VarContextProvider = ({ children }) => {
  const [int_1, setInt_1] = useState(false);
  const [enableDhcp_1, setEnableDhcp_1] = useState(false);
  const [portAlias_1, setPortAlias_1] = useState('');
  const [ipaddress_1, setIpaddress_1] = useState('');
  const [intNetmask_1, setIntNetmask_1] = useState('');
  const [https_1, setHttps_1] = useState(true);
  const [ping_1, setPing_1] = useState(true);
  const [defaultGateway_1, setDefaultGateway_1] = useState('');
  const [addressRangeFrom_1, setAddressRangeFrom_1] = useState('');
  const [addressRangeTo_1, setAddressRangeTo_1] = useState('');
  const [dhcpNetmask_1, setDhcpNetmask_1] = useState('');
  const [dnsServer1_1, setDnsServer1_1] = useState('');
  const [dnsServer2_1, setDnsServer2_1] = useState('');

  const [int_2, setInt_2 ] = useState(false);
  const [enableDhcp_2, setEnableDhcp_2] =  useState(false);
  const [portAlias_2, setPortAlias_2] =  useState('');
  const [ipaddress_2, setIpaddress_2] = useState('');
  const [intNetmask_2, setIntNetmask_2] =  useState('');
  const [https_2, setHttps_2] =  useState('');
  const [ping_2, setPing_2] =  useState('');
  const [addressRangeFrom_2, setAddressRangeFrom_2] =  useState('');
  const [addressRangeTo_2, setAddressRangeTo_2]  =  useState('');
  const [dhcpNetmask_2, setDhcpNetmask_2] =  useState('');
  const [dnsServer1_2, setDnsServer1_2] =  useState('');
  const [dnsServer2_2, setDnsServer2_2] =  useState('');

  const [int_3, setInt_3 ] = useState(false);
  const [enableDhcp_3, setEnableDhcp_3] =  useState(false);
  const [portAlias_3, setPortAlias_3] =  useState('');
  const [ipaddress_3, setIpaddress_3] = useState('');
  const [intNetmask_3, setIntNetmask_3] =  useState('');
  const [https_3, setHttps_3] =  useState('');
  const [ping_3, setPing_3] =  useState('');
  const [addressRangeFrom_3, setAddressRangeFrom_3] =  useState('');
  const [addressRangeTo_3, setAddressRangeTo_3]  =  useState('');
  const [dhcpNetmask_3, setDhcpNetmask_3] =  useState('');
  const [dnsServer1_3, setDnsServer1_3] =  useState('');
  const [dnsServer2_3, setDnsServer2_3] =  useState('');

  const [int_A, setInt_A ] = useState(false);
  const [enableDhcp_A, setEnableDhcp_A] =  useState(false);
  const [portAlias_A, setPortAlias_A] =  useState('');
  const [ipaddress_A, setIpaddress_A] = useState('');
  const [intNetmask_A, setIntNetmask_A] =  useState('');
  const [https_A, setHttps_A] =  useState('');
  const [ping_A, setPing_A] =  useState('');
  const [addressRangeFrom_A, setAddressRangeFrom_A] =  useState('');
  const [addressRangeTo_A, setAddressRangeTo_A]  =  useState('');
  const [dhcpNetmask_A, setDhcpNetmask_A] =  useState('');
  const [dnsServer1_A, setDnsServer1_A] =  useState('');
  const [dnsServer2_A, setDnsServer2_A] =  useState('');

  const [int_WAN, setInt_WAN ] = useState(false);
  const [enableDhcp_WAN, setEnableDhcp_WAN] =  useState(false);
  const [portAlias_WAN, setPortAlias_WAN] =  useState('');
  const [ipaddress_WAN, setIpaddress_WAN] = useState('');
  const [intNetmask_WAN, setIntNetmask_WAN] =  useState('');
  const [https_WAN, setHttps_WAN] =  useState('');
  const [ping_WAN, setPing_WAN] =  useState('');
  const [addressRangeFrom_WAN, setAddressRangeFrom_WAN] =  useState('');
  const [addressRangeTo_WAN, setAddressRangeTo_WAN]  =  useState('');
  const [dhcpNetmask_WAN, setDhcpNetmask_WAN] =  useState('');
  const [dnsServer1_WAN, setDnsServer1_WAN] =  useState('');
  const [dnsServer2_WAN, setDnsServer2_WAN] =  useState('');

  const contextValues = {
    //port 1
    int_1,
    setInt_1,
    enableDhcp_1,
    setEnableDhcp_1,
    portAlias_1,
    setPortAlias_1,
    ipaddress_1,
    setIpaddress_1,
    intNetmask_1,
    setIntNetmask_1,
    https_1,
    setHttps_1,
    ping_1,
    setPing_1,
    defaultGateway_1,
    setDefaultGateway_1,
    addressRangeFrom_1,
    setAddressRangeFrom_1,
    addressRangeTo_1,
    setAddressRangeTo_1,
    dhcpNetmask_1,
    setDhcpNetmask_1,
    dnsServer1_1,
    setDnsServer1_1,
    dnsServer2_1,
    setDnsServer2_1,
    //port 2
    int_2,
    setInt_2,
    enableDhcp_2,
    setEnableDhcp_2,
    portAlias_2,
    setPortAlias_2,
    ipaddress_2,
    setIpaddress_2,
    intNetmask_2,
    setIntNetmask_2,
    https_2,
    setHttps_2,
    ping_2,
    setPing_2,
    addressRangeFrom_2,
    setAddressRangeFrom_2,
    addressRangeTo_2,
    setAddressRangeTo_2,
    dhcpNetmask_2,
    setDhcpNetmask_2,
    dnsServer1_2,
    setDnsServer1_2,
    dnsServer2_2,
    setDnsServer2_2,
    //port 3
    int_3,
    setInt_3,
    enableDhcp_3,
    setEnableDhcp_3,
    portAlias_3,
    setPortAlias_3,
    ipaddress_3,
    setIpaddress_3,
    intNetmask_3,
    setIntNetmask_3,
    https_3,
    setHttps_3,
    ping_3,
    setPing_3,
    addressRangeFrom_3,
    setAddressRangeFrom_3,
    addressRangeTo_3,
    setAddressRangeTo_3,
    dhcpNetmask_3,
    setDhcpNetmask_3,
    dnsServer1_3,
    setDnsServer1_3,
    dnsServer2_3,
    setDnsServer2_3,
    //port A
    int_A,
    setInt_A,
    enableDhcp_A,
    setEnableDhcp_A,
    portAlias_A,
    setPortAlias_A,
    ipaddress_A,
    setIpaddress_A,
    intNetmask_A,
    setIntNetmask_A,
    https_A,
    setHttps_A,
    ping_A,
    setPing_A,
    addressRangeFrom_A,
    setAddressRangeFrom_A,
    addressRangeTo_A,
    setAddressRangeTo_A,
    dhcpNetmask_A,
    setDhcpNetmask_A,
    dnsServer1_A,
    setDnsServer1_A,
    dnsServer2_A,
    setDnsServer2_A,
    //port WAN
    int_WAN,
    setInt_WAN,
    enableDhcp_WAN,
    setEnableDhcp_WAN,
    portAlias_WAN,
    setPortAlias_WAN,
    ipaddress_WAN,
    setIpaddress_WAN,
    intNetmask_WAN,
    setIntNetmask_WAN,
    https_WAN,
    setHttps_WAN,
    ping_WAN,
    setPing_WAN,
    addressRangeFrom_WAN,
    setAddressRangeFrom_WAN,
    addressRangeTo_WAN,
    setAddressRangeTo_WAN,
    dhcpNetmask_WAN,
    setDhcpNetmask_WAN,
    dnsServer1_WAN,
    setDnsServer1_WAN,
    dnsServer2_WAN,
    setDnsServer2_WAN,
  };

  return (
    <GlobalVarContext.Provider value={contextValues}>
      {children}
    </GlobalVarContext.Provider>
  );
};
