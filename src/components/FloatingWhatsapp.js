import React, { useRef } from "react";
import "./FloatingWhatsapp.css";
import Whatsapp from "../Assets/floatingWhatsapp/whatsapp.png";
import { motion } from "framer-motion";

export default function FloatingWhatsapp() {
  const constraintsRef = useRef(null);
  return (
    <motion.div
      className="floating-whatsapp"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      dragElastic={0.5}
    >
      <a
        href="https://wa.me/9361321282?text=Welcome%2C%20to%20my%20pooja.%20How%20can%20i%20help%20you"
        target="_blank"
      >
        <img src={Whatsapp} alt="Whatsapp" />
      </a>
    </motion.div>
  );
}
