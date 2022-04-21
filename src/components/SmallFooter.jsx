import React, { useState } from "react";
import styled from "styled-components";

function SmallFooter() {
  const [clicked, setClicked] = useState(false);
  return (
    <Small>
      <ul>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Accessibility</a>
        </li>
        <li>
          <a href="#">Help Center</a>
        </li>
        <li
          style={{ position: "relative" }}
          onClick={(e) => {
            e.preventDefault();
            setClicked(!clicked);
          }}
        >
          <a href="#">Privacy & Terms</a>
          <img src="/images/down-arrow.svg" alt="" />
          <Div clicked={clicked}>
            <a href="">Privacy Policy</a>
            <a href="">User Agreement</a>
            <a href="">Cookies Policy</a>
            <a href="">Copyright Policy</a>
          </Div>
        </li>
        <li>
          <a href="#">Ad Choices</a>
        </li>
        <li>
          <a href="#">Advertising</a>
        </li>
        <li>
          <a href="#">Business Services</a>
        </li>
        <li>
          <a href="#">Get the LinkedIn app</a>
        </li>
        <li>
          <a href="#">More</a>
        </li>
      </ul>
      <p>
        <img src="/images/linkedin-logo.svg" alt="" /> Corporation &copy;
        {new Date().getFullYear()}
      </p>
    </Small>
  );
}
const Div = styled.div`
  position: absolute;
  top: 15px;
  width: 120px;
  background-color: #fff;
  padding: 10px;
  a {
    display: block;
    padding: 3px 0;
    margin-bottom: 5px;
    :hover {
      color: #0a66c2;
      transform: translateX(3px);
    }
  }
  display: ${(props) => (props.clicked ? "block" : "none")};
  opacity: ${(props) => (props.clicked ? "1" : "0")};
`;

const Small = styled.footer`
  text-align: center;
  max-width: 85%;
  /* margin {
    top: 10px;
    bottom: 60px;
  } */
  ul {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 8px 15px;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      a {
        font-size: 14px;
        color: #adadad;
        text-decoration: none;
        transition: 300ms;
      }
      :nth-of-type(4) {
        a {
          margin-right: 3px;
        }
      }
      &:hover {
        > a {
          text-decoration: underline;
          color: #0a66c2;
        }
      }
    }
  }
`;
export default SmallFooter;
