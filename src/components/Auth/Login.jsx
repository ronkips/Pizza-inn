import React from "react";
import LoginForm from "./LoginForm";
import style from "../../styles/Auth.module.css";
const Login = () => {
  return (
    <div className={style.PageBody}>
      <span className={style.PageTitle}>Login</span>
      <div className={style.HR}></div>

      <LoginForm />
    </div>
  );
};

export default Login;
