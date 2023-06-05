import React from "react";

export default function IntA() {
  return (`#interface 4 configuration:
  edit "a"
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