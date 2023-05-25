import React from "react";
import style from "../../styles/Navlinks.module.css";
import Link from "next/link";
import { NavLink } from "react-router-dom";

const Navlinks = (props) => {
  const { user } = props;
  return (
    <div className={style.NavLinkHolder}>
      {/* <NavLink
        to="/"
        className={style.NavLink}
        activeClassName={style.NavLinkActive}
      >Home</NavLink> */}
      <div className={style.NavLink}>Home</div>
      <div className={style.NavLink}>Menu</div>

      {user ? (
        <>
          <div className={style.NavLink}>Orders</div>
          <div className={style.NavLink}>Logout</div>
        </>
      ) : (
        <>
          <div className={style.NavLink}>Login</div>
          <div className={style.NavLink}>Register</div>
        </>
      )}
    </div>
  );
};

export default Navlinks;
