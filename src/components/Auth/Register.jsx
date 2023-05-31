import React, { useState } from "react";
import style from "../../styles/Auth.module.css";
import Input from "../Input";
import Link from "next/link";
import { useRouter } from "next/router";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  // const navigate = useNavigate();
  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Prepare the data to be sent in the request body
    const data = {
      email,
      password,
      confirmPassword
    };

    try {
      const response = await fetch("http://localhost:4000/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      const result = await response.json();

      if (result.message) {
        setLoading(false);
        alert("Registration successful");
        router.push("/login");
      } else {
        alert("Registration failed");
        setLoading(false);
      }
      // if (response.message) {
      //   // Registration successful, handle the response as needed
      //   console.log("Registration successful");
      //   return <Link href={"/login"} />;
      // } else {
      //   // Registration failed, handle the response as needed
      //   const errorData = await response.json();
      //   console.error("Registration failed:", errorData.error_message);
      // }
    } catch (error) {
      console.error("Error:", error);
    }
  };

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
          val={password}
          onChangeFunc={setPassword}
          placeholder="Password"
          type="password"
          required
        />
        <Input
          val={confirmPassword}
          onChangeFunc={setConfirmPassword}
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
        <button className={style.Btn} onClick={handleRegister}>
          {loading ? "Loading" : "Register"}
        </button>
      </form>
    </div>
  );
};

export default Register;
