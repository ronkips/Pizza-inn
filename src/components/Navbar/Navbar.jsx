import React, { useState } from "react";
import style from "../../styles/Navbar.module.css";
// import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/Logo.png";
import Navlinks from "./Navlinks";
import SideDrawer from "./SideDrawer";

const Navbar = () => {
  const [sidebarShown, setSidebarShown] = useState(false);
  return (
    <div className={style.NavBar}>
      <div className={`container ${style.NavContainer}`}>
        <div className={style.NavIcon}>
          <Image
            className={style.NavIcon}
            src={logo}
            alt="pizza man"
            width={80}
          />
        </div>
        <div className={style.NavLinkHolder}>
          <Navlinks />
        </div>
        <button
          className={style.Toggler}
          onClick={() => setSidebarShown(!sidebarShown)}
        >
          <div
            className={`${style.Bar1} ${sidebarShown ? style.CrossBar1 : null}`}
          />
          <div
            className={`${style.Bar2} ${sidebarShown ? style.CrossBar2 : null}`}
          />
          <div
            className={`${style.Bar3} ${sidebarShown ? style.CrossBar3 : null}`}
          />
        </button>
      </div>
      <SideDrawer
        sidebarClose={() => setSidebarShown(false)}
        sidebarShown={sidebarShown}
      />
    </div>
  );
};

export default Navbar;
