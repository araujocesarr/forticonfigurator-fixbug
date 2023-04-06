import React from "react";
import Ethernet from "../icons/Ethernet"

export default function Ports40F() {

  return (
    <div className="port">
      <div className="top">
        <label>
          <p>WAN1</p>
          <Ethernet />
        </label>
        <label>
          <p>1</p>
          <Ethernet />
        </label>
        <label>
          <p>3</p>
          <Ethernet />
        </label>
        <label>
          <p>5</p>
          <Ethernet />
        </label>
        <label>
          <p>A</p>
          <Ethernet />
        </label>
      </div>

      <div className="bottom">
        <label>
          <p>WAN2</p>
          <Ethernet />
        </label>
        <label>
          <p>2</p>
          <Ethernet />
        </label>
        <label>        
          <p>4</p>
          <Ethernet />
        </label>
        <label>        
          <p>6</p>
          <Ethernet />
        </label>
        <label>        
          <p>B</p>
          <Ethernet />
        </label>
      </div>
    </div>
  )
}