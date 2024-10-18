import React, { useState } from "react";
import "./Header.css";
import Nav from "./Nav";
import { Cross as Hamburger } from "hamburger-react";

export default function Header() {
  const [headerScroll, setHeaderScroll] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  function hamburgerHandler() {
    setShowNav(!showNav);
  }
  function hamburgerBlurHandler() {
    setTimeout(() => {
      setShowNav(false);
      setOpen(false);
    });
  }
  function headerScrollHandler() {
    if (window.scrollY >= 100) {
      setHeaderScroll(true);
    } else {
      setHeaderScroll(false);
    }
  }
  window.addEventListener("scroll", headerScrollHandler);
  return (
    <header
      className={!headerScroll ? "header-unscroll" : "header-scroll sticky-top"}
    >
      <div className="row">
        <div className="col-3 col-sm-2 header-col1">
          <h1>SHIVA</h1>
        </div>
        <div className="col-1 col-sm-8 header-col2">
          <div className={!showNav ? "header-col2-navDiv-show" : ""}>
            <Nav
              showNav={showNav}
              setShowNav={setShowNav}
              isOpen={isOpen}
              setOpen={setOpen}
            />
          </div>
        </div>
        <div className="col-8 col-sm-2 header-col3">
          <div className="header-col3-buttonDiv">
            <div
              className="header-col3-hamburger"
              onClick={hamburgerHandler}
              onBlur={hamburgerBlurHandler}
            >
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <div>
              <button type="button" className="btn rounded-pill">
                Language
                <ul className="Language-list">
                  <li>Tamil</li>
                  <li>English</li>
                  <li>Hindi</li>
                </ul>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
