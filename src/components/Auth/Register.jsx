import React, { useState } from "react";
import style from "../../styles/Auth.module.css";
import Input from "../Input";
import Link from "next/link";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <div className={style.PageBody}>
      <span className={style.PageTitle}>Register</span>
      <div className={style.HR}></div>
      <form>
        <Input
          val={email}
          onChangeFunc={setEmail}
          placeholder="Email"
          type="email"
          required
        />
        <Input
          val={passwordConfirm}
          onChangeFunc={setPasswordConfirm}
          placeholder="Password"
          type="password"
          required
        />
        <Input
          val={password}
          onChangeFunc={setPassword}
          placeholder="Confirm Password"
          type="password"
          required
        />
        <p className={style.Span}>
          Already registered? {""}
          <Link className="navlink" href={"/login"}>
            Login
          </Link>
        </p>
        <button className={style.Btn}>Register</button>
      </form>
    </div>
  );
};

export default Register;
