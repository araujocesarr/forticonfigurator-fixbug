import React from "react";

export default function int2() {
  return `#interface 2 configuration:
  edit "lan2"
    set vdom "root"
    set alias {portAlias_2}
    set ip {ipaddress_2} {intNetmask_2}
    set allowaccess {https_2} {ping_2}
    set status down
    set type physical
    set lldp-transmission enable
    set role lan
    set snmp-index 7
  next`;
}
