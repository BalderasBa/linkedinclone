import React from "react";
import styled from "styled-components";

function Messages(props) {
  // console.log(props.message.msgsfromHim[0]);
  return (
    <Container href="messaging">
      <img src={props.message.image} alt="" />
      <div>
        <h3>{props.message.user}</h3>
        <p>
          {props.message.sender === "you" && <span>you: </span>}
          {props.message.msgsfromHim[0].content}
        </p>
        <span>{props.message.msgsfromHim[0].time}</span>
      </div>
    </Container>
  );
}
const Container = styled.a`
  text-decoration: none;
  position: relative;
  border-bottom: 2px dotted #0003;
  display: flex;
  padding: 10px 0;

  cursor: pointer;
  :hover {
    background-color: #0001;
  }
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 10px;
  }
  h3 {
    color: #000;
  }
  p {
    color: #0008;
    font-size: 0.8rem;
    line-height: 1.33;
    overflow: hidden;
    height: 30px;
    line-clamp: 1;
    span {
      margin-right: 5px;
    }
  }
  div > span {
    position: absolute;
    top: 5px;
    right: 5px;
    color: #0008;
    font-size: 0.8rem;
  }
`;
export default Messages;
