import React from "react";
import styled from "styled-components";

const MsgDateTime = styled.p`
  text-align: center;
  position: relative;
  color: #0008;
  font-size: 12px;
  letter-spacing: 2px;
  ::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateX(-110%);
    height: 1px;
    width: 20%;
    background-color: #0003;
  }
  ::after {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateX(10%);
    height: 1px;
    width: 20%;
    background-color: #0003;
  }
`;
function MsgsFromId(props) {
  console.log(props);
  return (
    <div className="messages-body">
      <MsgDateTime>{props.m.time}</MsgDateTime>
      <div className="messages-body-body">
        <img
          src={
            props.m.sender === "you"
              ? "https://i.ibb.co/ZcJ50Vs/screenshot.jpg"
              : props.m.image
          }
          alt=""
        />
        <div>
          <h3>{props.m.sender === "you" ? "Hallousse Yehya" : props.m.user}</h3>
          <span>{props.m.time}</span>
          <p>
            {/* {props.m.sender === "you" && <span>you: </span>} */}
            {props.m.content}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MsgsFromId;
