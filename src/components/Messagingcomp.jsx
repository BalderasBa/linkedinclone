import React, { useState } from "react";
import styled from "styled-components";
import {
  faChevronDown,
  faChevronUp,
  faEllipsis,
  faPenToSquare,
  faSearch,
  faSliders,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Messages from "./Messages";
import uniqid from "uniqid";
import { msgs } from "../data";
import userSVG from "../images/user.svg";

const Container = styled.div`
  z-index: 1001;
  position: fixed;
  right: 5px;
  bottom: ${(props) => (props.messagesOn ? "0" : "10px")};
  background-color: #fff;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: -2px -2px 5px 0 #00000010;
  height: calc(100vh - 100px);
  width: 288px;
  transition: 300ms ease-out;
  overflow-y: ${(props) => (props.messagesOn ? "scroll" : "hidden")};
  transform: ${(props) =>
    props.messagesOn ? "translateY(0)" : "translateY(calc(100vh - 130px))"};
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  font-size: 16px;
  border-bottom: 1px solid #0003;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 30px;
  cursor: pointer;
  svg {
    margin-left: 5px;
    padding: 5px;
    border-radius: 50%;
    &:hover {
      background-color: #0002;
    }
  }
  img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    position: relative;
  }
  .online {
    position: absolute;
    content: "";
    right: 0;
    bottom: 0;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: lightgreen;
  }
  &:hover {
    background-color: #efefef;
  }
`;
const Body = styled.div`
  padding: 10px;
  bottom: 0;
  right: 0;
  transition: 300ms ease-in;
  display: flex;
  flex-direction: column;
  opacity: 1;
`;
const Search = styled.div`
  position: relative;
  margin: 10px 0;
  overflow: hidden;
  input {
    line-height: 2;
    padding: 5px 30px;
    width: 100%;
    border: none;
    outline: none;
    background-color: #eef3f8;
    border-radius: 5px;
    position: relative;
  }
`;

function Messagingcomp(props) {
  const [messages, setMessages] = useState(false);

  return (
    <Container messagesOn={messages}>
      <Header onClick={() => setMessages(!messages)}>
        <img src={userSVG} alt="" />
        <span className="online"></span>
        <h3>Messaging</h3>
        <div>
          <FontAwesomeIcon icon={faEllipsis} />
          <FontAwesomeIcon icon={faPenToSquare} />
          {messages ? (
            <FontAwesomeIcon icon={faChevronDown} />
          ) : (
            <FontAwesomeIcon icon={faChevronUp} />
          )}
        </div>
      </Header>
      <Body>
        <Search>
          <FontAwesomeIcon
            icon={faSearch}
            style={{
              position: "absolute",
              top: "10px",
              left: "5px",
              zIndex: "5",
            }}
          />
          <input type="text" placeholder="Search messages" />
          <FontAwesomeIcon
            icon={faSliders}
            style={{
              position: "absolute",
              top: "10px",
              right: "5px",
              zIndex: "5",
            }}
          />
        </Search>
        {msgs.map((msgid) => {
          return <Messages key={uniqid()} message={msgid} />;
        })}
      </Body>
    </Container>
  );
}

export default Messagingcomp;
