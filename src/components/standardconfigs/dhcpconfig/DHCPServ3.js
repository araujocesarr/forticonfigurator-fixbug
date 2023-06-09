import React from "react";

export default function DHCPServ() {
  return (`#system dhcp server
  config system dhcp server
    edit 1
      set dns-service default
      set default-gateway 192.168.1.99
      set netmask 255.255.255.0
      set interface "lan"
      config ip-range
        edit 1
          set start-ip 192.168.1.110
          set end-ip 192.168.1.210
        next
      end`
  )
}
