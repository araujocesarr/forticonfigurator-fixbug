import React from "react";

export default function Int3() {
  return (`#interface 3 configuration:
  edit "lan3"
    set vdom "root"
    set alias {portAlias_3}
    set ip {ipaddress_3} {intNetmask_3}
    set allowaccess {https_3} {ping_3}
    set status down
    set type physical
    set lldp-transmission enable
    set role lan
    set snmp-index 7
  next`
  )
}