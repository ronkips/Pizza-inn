import React from "react";
import style from "../styles/Footer.module.css";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  // const { location, cart } = props;
  return (
    <footer className={style.Footer}>
      <div className={style.FooterSection}>
        <h2 className={style.H2}>Company</h2>
        <div className={style.LinksContainer}>
          <div className={`${style.Link} ${style.TextLink}`}>About Us</div>
          <div className={`${style.Link} ${style.TextLink}`}>FAQ</div>
          <Link
            className={`${style.Link} ${style.TextLink}`}
            href="mailto:no-mail@email.com"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div className={style.FooterSection}>
        <h2 className={style.H2}>Legal</h2>
        <div className={style.LinksContainer}>
          <div
            className={`${style.Link} ${style.TextLink}`}
            // to="/terms-and-conditions"
          >
            Terms & Conditions
          </div>
          <div
            className={`${style.Link} ${style.TextLink}`}
            // to="/privacy-policy"
          >
            Privacy Policy
          </div>
          <div className={`${style.Link} ${style.TextLink}`}>Disclaimer</div>
        </div>
      </div>
      <div className={style.FooterSection}>
        <h2 className={style.H2}>Social Media</h2>
        <div className={style.Row}>
          <a
            className={style.Link}
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`${style.SocialMediaBtn} ${style.FaceBook}`}>
              <FontAwesomeIcon icon={faFacebook} aria-hidden="true" />
            </div>
          </a>
          <a
            className={style.Link}
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`${style.SocialMediaBtn} ${style.Twitter}`}>
              <FontAwesomeIcon icon={faTwitter} aria-hidden="true" />
            </div>
          </a>
          <a
            className={style.Link}
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`${style.SocialMediaBtn} ${style.Instagram}`}>
              <FontAwesomeIcon icon={faInstagram} aria-hidden="true" />
            </div>
          </a>
          <a
            className={style.Link}
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={`${style.SocialMediaBtn} ${style.Youtube}`}>
              <FontAwesomeIcon icon={faYoutube} aria-hidden="true" />
            </div>
          </a>
        </div>
      </div>

      <div className={`mb-2 ${style.Row}`}>
        <span className={style.Copyright}>
          Copyright © {new Date().getFullYear()} Tap FoodWorks Ltd. | All Rights
          Reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
