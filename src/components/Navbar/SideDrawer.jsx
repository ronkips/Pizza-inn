import React from "react";
import Navlinks from "./Navlinks";
import style from "../../styles/Sidedrawer.module.css";
import logo from "../../../public/Logo.png";
import Image from "next/image";
const SideDrawer = (props) => {
  const { sidebarClose, sidebarShown } = props;
  return (
    <div>
      <div
        className={`${style.Backdrop} ${
          sidebarShown ? style.BackdropOpen : style.BackdropClose
        }`}
        onClick={sidebarClose}
      >
        <div
          className={`${style.SideBarBody} ${
            sidebarShown ? style.SideBarBodyOpen : style.SideBarBodyClose
          }`}
        >
          <div className={style.SideDrawerIcon}>
            <Image src={logo} alt="pizza man" width={80} />
          </div>
          <Navlinks />
        </div>
      </div>
    </div>
  );
};

export default SideDrawer;
