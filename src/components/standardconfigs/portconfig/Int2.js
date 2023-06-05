import React from "react";

export default function Int2() {
  return (`#interface 4 configuration:
  edit "lan1"
    set vdom "root"
    set ip 192.168.1.1 255.255.255.0
    set status down
    set type physical
    set lldp-transmission enable
    set role lan
    set snmp-index 7
  next`
  )
}