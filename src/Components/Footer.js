import React from "react";
import logo from "../Image/netflix_logo_icon_170919.png";

function Footer() {
  return (
    <>
      {/* <div className="line"></div> */}
      <div className="footer">
        <div className="footer__call">Questions? Call 000-111-222-3333</div>
        <div className="footer__list">
          <div className="footer__list--item">
            <ul>
              <li>FAQ</li>
              <li>Investor Relation</li>
              <li>Privacy</li>
              <li>Speed Test</li>
            </ul>
          </div>
          <div className="footer__list--item">
            <ul>
              <li>Help Center</li>
              <li>Jobs</li>
              <li>Cookie Preferences</li>
              <li>Legal Notice</li>
            </ul>
          </div>
          <div className="footer__list--item">
            <ul>
              <li>Accounts</li>
              <li>Way to Watch</li>
              <li>Corporate Information</li>
              <li>Only on Netflix</li>
            </ul>
          </div>
          <div className="footer__list--item">
            <ul>
              <li>Media Center</li>
              <li>Terms of Use</li>
              <li>Contact us</li>
              <li>Social Media Accounts</li>
            </ul>
          </div>
        </div>
        <div className="footer__india">
          <img src={logo} alt="netflixLogo" />
          <p>Netflix India</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
