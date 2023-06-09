import React from "react";

export default function DHCPServ1() {
  return (`#system dhcp server
  config system dhcp server
    edit 1
      set dns-service default
      set default-gateway {defaultGateway_1}
      set netmask {dhcpNetmask_1}
      set interface "lan"
      config ip-range
        edit 1
          set start-ip {addressRangeFrom_1}
          set end-ip {addressRangeTo_1}
        next
      end`
  )
}
