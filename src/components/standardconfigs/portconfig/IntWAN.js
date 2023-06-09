import React from "react";

export default function IntWAN() {
  return (`#interface WAN configuration:
  edit "wan"
    set vdom "root"
    set alias {portAlias_WAN}
    set ip {ipaddress_WAN} {intNetmask_WAN}
    set allowaccess {https_WAN} {ping_WAN}
    set status down
    set type physical
    set lldp-transmission enable
    set role lan
    set snmp-index 7
  next`
  )
}