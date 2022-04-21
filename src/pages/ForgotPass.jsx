import React, { useState } from "react";
import styled from "styled-components";

import Footer from "../components/Footer";

const ForgotPass = () => {
  // const [passwordShown, setPasswordShown] = useState(false);

  return (
    <>
      <Container>
      <Nav>
        <a href="/">
          <img src="/images/login-logo.svg" alt="" />
        </a>
        <div>
          <Join href="/signup">Join now</Join>
          <SignIn href="/signin">Sign in</SignIn>
        </div>
      </Nav>
        <Section>
          <H1>
            Forgot password ?<p>Reset password in two quick steps</p>
          </H1>
          <Form>
            <Input>
              <input type="email" id="email" placeholder="Email or Phone" />
            </Input>
            <Input>
              <input id="submit" type="submit" value="Reset password" />
            </Input>
          </Form>
          <Forgot>
            <a href="/signin">Back</a>
          </Forgot>
        </Section>
      </Container>

      <Footer />
    </>
  );
};

const H1 = styled.h1`
  align-self: flex-start;
  color: #000;
  font-size: 22px;
  text-transform: none;
  margin-bottom: 10px;
  p {
    margin-top: 6px;
    font-size: 15px;
    color: #0008;
  }
`;
const Container = styled.div`
margin-bottom: 100px;
`;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  padding: 12px 0 16px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: space-between;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
  }
`;

const Join = styled.a`
  font-size: 16px;
  padding: 10px 12px;
  text-decoration: none;
  border-radius: 4px;
  color: rgba(0, 0, 0, 0.6);
  margin-right: 12px;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.08);
    color: rgba(0, 0, 0, 0.9);
    text-decoration: none;
  }
`;
const SignIn = styled.a`
  box-shadow: inset 0 0 0 1px #0a66c2;
  color: #0a66c2;
  border-radius: 24px;
  transition: 167ms;
  font-size: 16px;
  font-weight: 600;
  line-height: 40px;
  padding: 10px 24px;
  text-align: center;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;

  &:hover {
    background-color: rgba(112, 181, 249, 0.15);
    color: #0a66c2;
    text-decoration: none;
  }
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  position: relative;
  width: 30%;
  padding: 20px;
  margin: auto;
  border-radius: 10px;
  @media (max-width: 768px) {
    min-height: 0px;
    width: 70%;
  }
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Input = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  position: relative;
  button {
    position: absolute;
    right: 10px;
    background-color: transparent;
    color: #3d69e1;
    outline: none;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }

  label {
    color: #5c5d61;
    font-size: 14px;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    margin-bottom: 5px;
  }
  input {
    outline: none;
    border: none;
    display: block;
    font-size: 15px;
    line-height: 20px;
    font-weight: 500;
    color: #000;
    border-radius: 20px;
    height: 40px;
    width: 320px;
    padding: 7px 15px;
    margin-bottom: 25px;
    border: 1px solid #0004;
    &:active,
    &:focus {
      border: 1px solid #000;
    }
  }
  input[type="submit"] {
    background-color: #3d69e1;
    color: #fff;
    padding: 10px 20px;
    border-radius: 20px;
    text-align: center;
    display: block;
    width: 100%;
    font-size: 18px;
    font-weight: bold;
    text-transform: capitalize;
    cursor: pointer;
    transition: 200ms ease-in;
    &:focus,
    &:hover {
      background-color: #3457b2;
    }
  }
`;
const Forgot = styled.div`
  margin-top: 20px;
  align-self: flex-start;
  a {
    color: #3457b2;
    text-decoration: none;
    width: 100%;
    text-decoration: none;
    font-weight: bold;
    font-size: 15px;
    padding: 7px 15px;
    border-radius: 5px;
    transition: 200ms;
    &:hover {
      text-decoration: underline;
      color: #fff;
      background-color: #3457b2;
    }
  }
`;
export default ForgotPass;
