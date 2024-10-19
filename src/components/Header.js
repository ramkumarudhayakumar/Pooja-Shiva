import React, { useState } from "react";
import "./Header.css";
import Nav from "./Nav";
import { Cross as Hamburger } from "hamburger-react";
import translate from "../translate/translate.json";

export default function Header({
  setHeadingTrans,
  setAboutTrans,
  setAboutLi1Trans,
  setAboutLi2Trans,
  setAboutLi3Trans,
  setAboutLi4Trans,
  setAboutLi5Trans,
  setServicesSubHeading,
  setServicesContent,
  setFooterContent,
}) {
  const [headerScroll, setHeaderScroll] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);

  function tamilHandler() {
    setHeadingTrans(translate.heading.headingTamil);
    setAboutTrans(translate.aboutHeading.aboutHeadingTamil);
    setAboutLi1Trans(translate.aboutLi1.aboutLi1Tamil);
    setAboutLi2Trans(translate.aboutLi2.aboutLi2Tamil);
    setAboutLi3Trans(translate.aboutLi3.aboutLi3Tamil);
    setAboutLi4Trans(translate.aboutLi4.aboutLi4Tamil);
    setAboutLi5Trans(translate.aboutLi5.aboutLi5Tamil);
    setServicesSubHeading((ser) => ({
      ...ser,
      servicesSubHeading1:
        translate.servicesSubHeading1.servicesSubHeadingTamil,
      servicesSubHeading2:
        translate.servicesSubHeading2.servicesSubHeadingTamil,
      servicesSubHeading3:
        translate.servicesSubHeading3.servicesSubHeadingTamil,
      servicesSubHeading4:
        translate.servicesSubHeading4.servicesSubHeadingTamil,
      servicesSubHeading5:
        translate.servicesSubHeading5.servicesSubHeadingTamil,
    }));
    setServicesContent((ser) => ({
      ...ser,
      servicesContent1: translate.servicesContent1.servicesContentTamil,
      servicesContent2: translate.servicesContent2.servicesContentTamil,
      servicesContent3: translate.servicesContent3.servicesContentTamil,
      servicesContent4: translate.servicesContent4.servicesContentTamil,
      servicesContent5: translate.servicesContent5.servicesContentTamil,
    }));
    setFooterContent((footer) => ({
      ...footer,
      footerAboutContent: translate.footerAbout.footerAboutTamil,
      footerPromotion: translate.footerPromotion.footerPromotionTamil,
      footerButton: translate.footerButton.footerButtonTamil,
    }));
  }
  function englishHandler() {
    setHeadingTrans(translate.heading.headingEnglish);
    setAboutTrans(translate.aboutHeading.aboutHeadingEnglish);
    setAboutLi1Trans(translate.aboutLi1.aboutLi1English);
    setAboutLi2Trans(translate.aboutLi2.aboutLi2English);
    setAboutLi3Trans(translate.aboutLi3.aboutLi3English);
    setAboutLi4Trans(translate.aboutLi4.aboutLi4English);
    setAboutLi5Trans(translate.aboutLi5.aboutLi5English);
    setServicesSubHeading((ser) => ({
      ...ser,
      servicesSubHeading1:
        translate.servicesSubHeading1.servicesSubHeadingEnglish,
      servicesSubHeading2:
        translate.servicesSubHeading2.servicesSubHeadingEnglish,
      servicesSubHeading3:
        translate.servicesSubHeading3.servicesSubHeadingEnglish,
      servicesSubHeading4:
        translate.servicesSubHeading4.servicesSubHeadingEnglish,
      servicesSubHeading5:
        translate.servicesSubHeading5.servicesSubHeadingEnglish,
    }));
    setServicesContent((ser) => ({
      ...ser,
      servicesContent1: translate.servicesContent1.servicesContentEnglish,
      servicesContent2: translate.servicesContent2.servicesContentEnglish,
      servicesContent3: translate.servicesContent3.servicesContentEnglish,
      servicesContent4: translate.servicesContent4.servicesContentEnglish,
      servicesContent5: translate.servicesContent5.servicesContentEnglish,
    }));
    setFooterContent((footer) => ({
      ...footer,
      footerAboutContent: translate.footerAbout.footerAboutEnglish,
      footerPromotion: translate.footerPromotion.footerPromotionEnglish,
      footerButton: translate.footerButton.footerButtonEnglish,
    }));
  }
  function hindiHandler() {
    setHeadingTrans(translate.heading.headingHindi);
    setAboutTrans(translate.aboutHeading.aboutHeadingHindi);
    setAboutLi1Trans(translate.aboutLi1.aboutLi1Hindi);
    setAboutLi2Trans(translate.aboutLi2.aboutLi2Hindi);
    setAboutLi3Trans(translate.aboutLi3.aboutLi3Hindi);
    setAboutLi4Trans(translate.aboutLi4.aboutLi4Hindi);
    setAboutLi5Trans(translate.aboutLi5.aboutLi5Hindi);
    setServicesSubHeading((ser) => ({
      ...ser,
      servicesSubHeading1:
        translate.servicesSubHeading1.servicesSubHeadingHindi,
      servicesSubHeading2:
        translate.servicesSubHeading2.servicesSubHeadingHindi,
      servicesSubHeading3:
        translate.servicesSubHeading3.servicesSubHeadingHindi,
      servicesSubHeading4:
        translate.servicesSubHeading4.servicesSubHeadingHindi,
      servicesSubHeading5:
        translate.servicesSubHeading5.servicesSubHeadingHindi,
    }));
    setServicesContent((ser) => ({
      ...ser,
      servicesContent1: translate.servicesContent1.servicesContentHindi,
      servicesContent2: translate.servicesContent2.servicesContentHindi,
      servicesContent3: translate.servicesContent3.servicesContentHindi,
      servicesContent4: translate.servicesContent4.servicesContentHindi,
      servicesContent5: translate.servicesContent5.servicesContentHindi,
    }));
    setFooterContent((footer) => ({
      ...footer,
      footerAboutContent: translate.footerAbout.footerAboutHindi,
      footerPromotion: translate.footerPromotion.footerPromotionHindi,
      footerButton: translate.footerButton.footerButtonHindi,
    }));
  }
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
                  <li onClick={tamilHandler}>Tamil</li>
                  <li onClick={englishHandler}>English</li>
                  <li onClick={hindiHandler}>Hindi</li>
                </ul>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
