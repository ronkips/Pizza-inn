import React from "react";
import LoginForm from "./LoginForm";
import style from "../../styles/Auth.module.css";
import Link from "next/link";
const Login = () => {
  return (
    <div className={style.PageBody}>
      <span className={style.PageTitle}>
        <Link href={"/register"}>Login</Link>
      </span>
      <div className={style.HR}></div>

      <LoginForm />
    </div>
  );
};

export default Login;
