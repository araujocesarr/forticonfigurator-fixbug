import React from "react";

export default function IntA() {
  return (`#interface A configuration:
  edit "a"
    set vdom "root"
    set alias {portAlias_A}
    set ip {ipaddress_A} {intNetmask_A}
    set allowaccess {https_A} {ping_A}
    set status down
    set type physical
    set lldp-transmission enable
    set role lan
    set snmp-index 7
  next`
  )
}