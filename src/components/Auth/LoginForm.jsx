import React, { useState } from "react";
import style from "../../styles/Auth.module.css";
import Input from "../Input";
import Link from "next/link";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import Loader from "../Loader";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Prepare the data to be sent in the request body
    try {
      const userData = {
        email,
        password
      };
      // console.log("==>", JSON.stringify(userData));
      const res = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      });

      console.log("res", res);
      const data = await res.json();
      if (data.success == true) {
        setLoading(false);
        toast.success("Login successful");
        router.push("/menu");
      } else {
        toast.error("Login failed");
        setLoading(false);
      }
    } catch (error) {
      console.error("Errors:", error);
    }
  };

  return (
    <div>
      <form>
        <Input
          val={email}
          onChangeFunc={setEmail}
          placeholder="Email"
          type="email"
          required
        />
        <Input
          val={password}
          onChangeFunc={setPassword}
          placeholder="Password"
          type="password"
          required
        />
        <p className={style.Span}>
          Not yet register? {""}
          <Link className="navlink" href={"/register"}>
            Register
          </Link>
        </p>
        <button className={style.Btn} onClick={handleLogin}>
          {loading ? <Loader /> : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
