import React from "react";
import logo from "../../../public/Logo.png";
import style from "../../styles/Characters.module.css";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className={style.BodyContainer}>
        <Image className={style.Logo} src={logo} alt="pizza man" />
        <h2 className={style.H2}>Pizza Inn Online Ordering</h2>
        <h1 className={style.H1}>Your Yummy Pizza Delivered Fast & Fresh</h1>
        <Link href={"/menu"}>
          <button className={style.Btn}>Order Now</button>
        </Link>
      </div>
      <div className={style.LandscapeOverlay} />
    </>
  );
};

export default Home;
