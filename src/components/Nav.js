import React from "react";
import "./Nav.css";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { Rotate } from "hamburger-react";

const navVariants = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
const navChildVariants = {
  hidden: {
    rotateY: "0deg",
    y: -20,
    x: -20,
  },
  visible: {
    rotateY: "360deg",
    y: 0,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
    },
  },
};
export default function Nav({ showNav, setShowNav, isOpen, setOpen }) {
  function hamburgerHandler() {
    setShowNav(false);
    setOpen(false);
  }
  return (
    <nav>
      <motion.ul
        className="list-inline"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.li
          className="list-inline-item"
          onClick={hamburgerHandler}
          variants={navChildVariants}
        >
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-200}
            duration={500}
            className="nav-link "
          >
            Home
          </Link>
        </motion.li>
        <motion.li
          className="list-inline-item"
          onClick={hamburgerHandler}
          variants={navChildVariants}
        >
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
            className="nav-link"
          >
            About
          </Link>
        </motion.li>
        <motion.li
          className="list-inline-item"
          onClick={hamburgerHandler}
          variants={navChildVariants}
        >
          <Link
            to="services"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="nav-link"
          >
            Services
          </Link>
        </motion.li>
        <motion.li
          className="list-inline-item"
          onClick={hamburgerHandler}
          variants={navChildVariants}
        >
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="nav-link"
          >
            Contact
          </Link>
        </motion.li>
        <motion.li
          className="list-inline-item"
          onClick={hamburgerHandler}
          variants={navChildVariants}
        >
          <Link
            to="gallery"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="nav-link"
          >
            Gallery
          </Link>
        </motion.li>
      </motion.ul>
    </nav>
  );
}
