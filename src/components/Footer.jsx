import React from "react";
import style from "../styles/Footer.module.css";

const Footer = (props) => {
  const { location, cart } = props;
  return (
    <div className={style.Footer}>
      <div className={style.FooterSection}>
        <h2 className={style.H2}>Company</h2>
        <div className={style.LinksContainer}>
          <div className={`${style.Link} ${style.TextLink}`}>About Us</div>
          <div className={`${style.Link} ${style.TextLink}`}>FAQ</div>
          <a
            className={`${style.Link} ${style.TextLink}`}
            // href="mailto:no-mail@email.com"
          >
            Contact Us
          </a>
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

      <h2 className={style.H2}>Social Media</h2>
      <div className={style.Row}>
        <a
          className={style.Link}
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={`${style.SocialMediaBtn} ${style.FaceBook}`}>
            <i className="fa fa-facebook" aria-hidden="true" />
          </div>
        </a>
        <a
          className={style.Link}
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={`${style.SocialMediaBtn} ${style.Twitter}`}>
            <i className="fa fa-twitter" aria-hidden="true" />
          </div>
        </a>
        <a
          className={style.Link}
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={`${style.SocialMediaBtn} ${style.Instagram}`}>
            <i className="fa fa-instagram" aria-hidden="true" />
          </div>
        </a>
        <a
          className={style.Link}
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={`${style.SocialMediaBtn} ${style.Youtube}`}>
            <i className="fa fa-youtube-play" aria-hidden="true" />
          </div>
        </a>
      </div>

      <div className={`mb-2 ${style.Row}`}>
        <span className={style.Copyright}>
          Copyright © {new Date().getFullYear()} Tap FoodWorks Ltd. | All Rights
          Reserved
        </span>
      </div>
    </div>
  );
};

export default Footer;
