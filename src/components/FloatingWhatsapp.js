import React from "react";
import "./FloatingWhatsapp.css";
import Whatsapp from "../Assets/floatingWhatsapp/whatsapp.png";

export default function FloatingWhatsapp() {
  return (
    <div className="floating-whatsapp">
      <a
        href="https://wa.me/9361321282?text=Welcome%2C%20to%20my%20pooja.%20How%20can%20i%20help%20you"
        target="_blank"
      >
        <img src={Whatsapp} alt="Whatsapp" />
      </a>
    </div>
  );
}
