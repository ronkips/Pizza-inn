import React from "react";
import style from "../../styles/Navlinks.module.css";
import Link from "next/link";
// import { NavLink } from "react-router-dom";

const Navlinks = (props) => {
  const { user } = props;
  return (
    <div className={style.NavLinkHolder}>

      <div className={style.NavLink}>
        <Link href={"/menu"}>Home</Link>
      </div>
      <div className={style.NavLink}>Menu</div>

      {user ? (
        <>
          <div className={style.NavLink}>Orders</div>
          <div className={style.NavLink}>Logout</div>
        </>
      ) : (
        <>
          <div className={style.NavLink}>
            <Link href={"/login"}>Login</Link>
          </div>
          <div className={style.NavLink}>
            <Link href={"/register"}>Register</Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navlinks;
