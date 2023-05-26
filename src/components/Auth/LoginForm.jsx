import React, { useState } from "react";
import style from "../../styles/Auth.module.css";
import Input from "../Input";
import Link from "next/link";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form>
        <Input
          val={email}
          onChangeFunc={setEmail}
          placeholder="Email"
          type="email"
        />
        <Input
          val={password}
          onChangeFunc={setPassword}
          placeholder="Password"
          type="password"
        />
        <p className={style.Span}>
          Not yet register? {""}
          <Link className="navlink" href={"/register"}>Register</Link>
        </p>
        <button className={style.Btn}>Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
