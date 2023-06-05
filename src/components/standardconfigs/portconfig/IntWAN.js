import React from "react";

export default function IntWAN() {
  return (`#WAN interface config:
  edit "wan"
    set vdom "root"
    set mode dhcp
    set allowaccess ping fgfm
    set type physical
    set role wan
    set snmp-index 1
  next`
  )
}