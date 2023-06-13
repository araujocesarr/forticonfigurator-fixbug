import React from "react";

export default function int1() {
  return `#interface 1 configuration:
  edit "lan1"
    set vdom "root"
    set alias {portAlias_1}
    set ip {ipaddress_1} {intNetmask_1}
    set allowaccess {https_1} {ping_1}
    set status down
    set type physical
    set lldp-transmission enable
    set role lan
    set snmp-index 7
  next`;
}
