import React from "react";
import style from "../styles/Spinner.module.css";
import PZ from "../../public/pizza.svg";
import Image from "next/image";

const Spinner = () => {
  return (
    <div className={style.SpinnerContainer}>
      <div className={style.Spinner}>
        <Image
          src={PZ}
          alt="pizza1"
          className={`${style.PizzaPart} ${style.PizzaPart1}`}
        />
        <Image
          src={PZ}
          alt="pizza2"
          className={`${style.PizzaPart} ${style.PizzaPart2}`}
        />
        <Image
          src={PZ}
          alt="pizza3"
          className={`${style.PizzaPart} ${style.PizzaPart3}`}
        />
        <Image
          src={PZ}
          alt="pizza4"
          className={`${style.PizzaPart} ${style.PizzaPart4}`}
        />
      </div>
      <h2 className={style.H1}>Loading</h2>
    </div>
  );
};

export default Spinner;
