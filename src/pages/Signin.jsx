import React, { useState } from "react";
import styled from "styled-components";

import Footer from "../components/Footer";

const Signin = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  return (
    <>
      <Container>
        <Nav>
          <a href="/">
            <img src="/images/login-logo.svg" alt="" />
          </a>
        </Nav>
        <Section>
          <H1>
            Sign in
            <p>Stay updated on your professional world</p>
          </H1>
          <Form>
            <Input>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Email or Phone" />
            </Input>
            <Input>
              <label htmlFor="password">Password (6 or more characters)</label>
              <input
                id="password"
                type={passwordShown ? "text" : "password"}
                placeholder="Password"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setPasswordShown(!passwordShown);
                }}
              >
                {passwordShown ? "hide" : "show"}
              </button>
            </Input>
            <Input>
              <input id="submit" type="submit" value="Sign In" />
            </Input>
            <Forgot>
              <a href="/forgotpassword">Forgot password ?</a>
            </Forgot>
          </Form>

          <Or>
            <hr />
            Or
            <hr />
          </Or>
          <Google>
            <img src="/images/apple-icon.svg" alt="" />
            Sign In with Apple
          </Google>
          <Forgot>
            New to LinkedIn ? <a href="/signup">Join Now</a>
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
const Container = styled.div``;

const Nav = styled.nav`
  max-width: 1128px;
  margin: auto;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  position: relative;
  justify-content: center;
  flex-wrap: nowrap;
  & > a {
    width: 135px;
    height: 34px;
    @media (max-width: 768px) {
      padding: 0 5px;
    }
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
const Google = styled.button`
  img {
    margin-right: 5px;
  }
  display: flex;
  justify-content: center;
  background-color: #fff;
  align-items: center;
  height: 56px;
  width: 100%;
  border-radius: 28px;
  box-shadow: inset 0 0 0 1px rgb(0 0 0 / 60%),
    inset 0 0 0 2px rgb(0 0 0 / 0%) inset 0 0 0 1px rgb(0 0 0 / 0);
  vertical-align: middle;
  z-index: 0;
  transition: 167ms;
  margin-bottom: 10px;
  font-size: 20px;
  color: rgba(0, 0, 0, 0.6);
  cursor: pointer;
  &:hover {
    background-color: rgba(207, 207, 207, 0.25);
    color: rgba(0, 0, 0, 0.75);
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
const Or = styled.span`
  color: #5c5d61;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  white-space: nowrap;
  width: 100%;
  margin: 20px auto;
  hr {
    margin: 0 5px;
    width: 10%;
  }
`;
export default Signin;
