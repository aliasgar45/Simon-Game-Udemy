import React from "react";
import { Link } from "react-scroll";
import discordimg from "../../assets/discord.png";
import linkedinimg from "../../assets/linkedin.png";
import instagramimg from "../../assets/insta.png";
import "./Footer.css";

function Footer({ links }) {
  return (
    <div className="footer_container">
      <div className="grid-item">
        <div className="item_title">
          <p>Location</p>
        </div>
        <div className="item_info">
          <p>Terna Engineering College</p>
          <p>Plot No 12,Sector-22,</p>
          <p>Nerul Railway station W,Navi Mumbai</p>
          <p>Maharashtra 400706</p>
        </div>
      </div>
      <div className="grid-item">
        <div className="item_title">Links</div>
        <div className="item_info">
          {links.map((link) => {
            if (
              link == "home" ||
              link == "faq" ||
              link == "about" ||
              link == "prizes"
            ) {
              return (
                <nav className="footer_links" key={link}>
                  <Link
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={500}
                    value={link}
                  >
                    {link}
                  </Link>
                </nav>
              );
            }
          })}
        </div>
      </div>
      <div className="grid-item">
        <div className="item_title">
          <p>Contact</p>
        </div>
        <div className="item_info">
          <p>
            <a className="mail" href="mailto:avalon@ternaengg.ac.in">
              avalon@ternaengg.ac.in
            </a>
          </p>
          <p className="contact">Kuldeep Rathor - +91 8482974719</p>
          <p>Aman Singh - +91 9967785923</p>
        </div>
      </div>
      <div className="grid-item span">
        <p>©2023 Avalon.All Rights Reserved.</p>
      </div>
      <div className="grid-item span">
      <div className="img_container">
        <a href="/">
          <img src={discordimg} alt="discordimg" />
        </a>
        <a href="/">
          <img src={linkedinimg} alt="linkdenimg" />
        </a>
        <a href="/">
          <img src={instagramimg} alt="instagramimg" />
        </a>
      </div>
      </div>
    </div>
  );
}

export default Footer;
