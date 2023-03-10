import Head from "next/head";
import { useState } from "react";
import styled from "styled-components";
import AppLayout from "../../components/layout/AppLayout";
import NaverLogin from "../../components/common/NaverLogin";
import Link from "next/link";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

interface IsLoginBlock {}

const LoginBlock = styled.div<IsLoginBlock>`
  height: 100%;
  width: 100%;
  max-width: 440px;
  padding: 30px 0 0 0;
  h1 {
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 16px;
  }
  .LoginForm {
    input {
      width: 100%;
      height: 46px;
      padding: 8px 10px;
      margin-bottom: 8px;
    }
    button {
      width: 100%;
      height: 46px;
      padding: 8px 10px;
      margin-bottom: 8px;
      background: black;
      color: white;
    }
  }
  .LoginMenuWrapper {
    display: flex;
    justify-content: end;
    margin-bottom: 8px;
    a {
      font-size: 14px;
      font-weight: 200;
      padding-left: 20px;
    }
  }
`;

export default function Login() {
  const router = useRouter();
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });
  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name + ": " + value);
    setLoginInput({ ...loginInput, [name]: value });
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push("/account");
  };
  return (
    <>
      <Head>
        <title>Shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <LoginBlock>
          <h1>Create Account</h1>
          <form className="LoginForm" onSubmit={onSubmit}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={loginInput.email}
              onChange={handleInput}
            ></input>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={loginInput.password}
              onChange={handleInput}
            ></input>
            <button>SIGN UP</button>
          </form>
        </LoginBlock>
      </AppLayout>
    </>
  );
}
