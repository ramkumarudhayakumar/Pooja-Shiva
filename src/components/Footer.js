import React from "react";
import "./Footer.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa6";

export default function Footer({ footerContent }) {
  return (
    <footer>
      <div className="row">
        <div className="col-6 col-sm-4 footer-col1">
          <div>
            <h4>ABOUT</h4>
            <p>{footerContent.footerAboutContent}</p>
            <div className="social-icons">
              <a href="#" type="button" className="btn footer-icon">
                <FaFacebookF className="footer-iconic" />
              </a>
              <a href="#" type="button" className="btn footer-icon">
                <FaWhatsapp className="footer-iconic" />
              </a>
              <a href="#" type="button" className="btn footer-icon">
                <FaTwitter className="footer-iconic" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-6 col-sm-4 footer-col2">
          <div>
            <h4>CONTACT INFO</h4>
            <ul>
              <li>Address: 21/81, VTPM Street, Rameswaram – 623 526.</li>
              <li>Phone: 96778 21794, 98652 71648</li>
              <li>E-mail: baba441971@gmail.com</li>
            </ul>
          </div>
        </div>
        <div className="col-12 col-sm-4 footer-col3">
          <div className="footer-col3-div">
            <h4 className="text-center">
              {footerContent.footerPromotion}
              <FaRegCopyright className="copyright-icon" />
            </h4>
            <div className="footer-btndiv">
              <a href="#" type="button" className="btn">
                {footerContent.footerButton}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
